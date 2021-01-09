<script lang="ts">
import { onMount } from 'svelte';
import { fromLatLon } from "utm";
import { drawCompass } from './draw-compass';
import type { Bar } from "./model"; //https://github.com/pyoner/svelte-typescript/issues/23



	let containerHeight = 0;
	let containerWidth = 0;
	let canvas: HTMLCanvasElement;
	let lng = 0;
	let lat = 0;
	let utmX = 0;
	let utmY = 0;
	
	let heading = 0;
	let radius = 1000;
	let features:Bar[] = [];
	let amenity = "bar"
	const amenityOptions = [
		{value: "bar", label: "Bar"},
		{value: "restaurant", label: "Restaurant"},
		{value: "school", label: "School"},
		{value: "place_of_worship", label: "Place of Worship"}
	]
	
	let deferredPrompt; 
	let btnInstallAppVisible = false;

	onMount(() => {
			
		

		if (navigator.geolocation) {
			navigator.geolocation.watchPosition(displayLocationInfo, ()=>{console.log("ERROR");}, { enableHighAccuracy: false, timeout:60000, maximumAge: 0 });
	} else {
		alert("NO GEOLOCATION");
	}


	window.addEventListener("deviceorientationabsolute", setHeading);
	window.addEventListener("beforeinstallprompt",handleInstall);
	});
	
const setHeading = (ev:DeviceOrientationEvent)=>{
	if(!ev.alpha){
		heading = 0;
		return;
	}
	const screenOrientation = (screen?.orientation?.type??"portrait-primary").split("-");

	const adjustment = screenOrientation[0] === "portrait" ? 0 : 90;
	const adjustment2 = screenOrientation[1] === "secondary" ? adjustment - 180: adjustment;
	heading = adjustment2 - ev.alpha;

}
const displayLocationInfo = (position: GeolocationPosition) =>{
	lng = position.coords.longitude;
	lat = position.coords.latitude;
	({easting: utmX, northing: utmY} = fromLatLon(lat, lng));
}
const handleInstall = (e:Event) => {
		console.log(`app install called`)
		e.preventDefault();
		deferredPrompt = e;
		
		btnInstallAppVisible = true;
		console.log(`app install call complete`)
	};


	const installApp = (e:Event) => {
		btnInstallAppVisible = false;
		deferredPrompt.prompt();
		deferredPrompt.userChoice
			.then((choiceResult) => {
				if (choiceResult.outcome === 'accepted') {
					btnInstallAppVisible = false;
					console.log('User accepted the A2HS prompt');
				} else {
					console.log('User dismissed the A2HS prompt');
				}
				deferredPrompt = null;
				
			});
	};
$: {
const address = `https://overpass.kumi.systems/api/interpreter?data=[out:json][timeout:25000];node["amenity"="${amenity}"](around:${radius},${lat},${lng});out body;>;out skel qt;`

fetch(address)
.then(response => response.json())
.then(data =>{features = data.elements.map(d=>{
	const  {easting: dataX, northing: dataY} = fromLatLon(d.lat, d.lon);
	const dist = Math.sqrt((dataX - utmX)**2 + (dataY - utmY)**2);
	const dir = (180/Math.PI) * Math.atan2((dataX - utmX)/dist, (dataY - utmY)/dist)
	
	return{name: d.tags.name, lng: d.lon, lat: d.lat, dist, dir}
	}).filter(d=> d.name!==undefined).sort((a, b)=> a.dist - b.dist);
	})
.catch(error => {
	console.error('There has been a problem with the overpass API:', error);
});
}

$: canvasSize = Math.min(containerWidth>containerHeight?containerHeight:containerWidth, 500);
$: drawCompass(canvas, canvasSize, features, heading);
</script>


<main bind:clientWidth={containerWidth} bind:clientHeight={containerHeight}>
<canvas bind:this={canvas}/>

<select bind:value={amenity} id="amenity-select">
	{#each amenityOptions as amenityOption}
	<option value={amenityOption.value} >
		{amenityOption.label}
	</option>
	{/each}
</select>
<div class="copyright">
	© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors
</div>
<button id="btnInstallApp" class="installAppBanner" on:click={installApp} style={'display :' + (btnInstallAppVisible ? 'block' : 'none')} >Install app</button>
</main>

<style>
:global(body) {
	background-color: blanchedalmond;
}
main {
	height: 100%;
	display: grid;
  	justify-content: center;
  	align-content: center;
	
	}
.copyright{
	font-size: 12px;
}

</style>