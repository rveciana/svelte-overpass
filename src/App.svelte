<script lang="ts">
import { onMount } from 'svelte';
import { fromLatLon } from "utm";
import { drawCompass } from './draw-compass';
import type { Bar } from "./model"; //https://github.com/pyoner/svelte-typescript/issues/23


	let screenW = 0;
	let canvas: HTMLCanvasElement;
	let ctx:CanvasRenderingContext2D;
	let lng = 0;
	let lat = 0;
	
	let heading = 0;
	let radius = 1000;
	let features:Bar[] = [];
	let amenity = "bar"


	onMount(() => {
		ctx = canvas.getContext('2d');

	

		if (navigator.geolocation) {
			navigator.geolocation.watchPosition(displayLocationInfo);
	} else {
		alert("NO GEOLOCATION");
	}

	function displayLocationInfo(position) {
	lng = position.coords.longitude;
	lat = position.coords.latitude;
	heading = position.coords.heading ?? 0;
	const {easting: utmX, northing: utmY, zoneNum: utmZone} = fromLatLon(lat, lng)
	


	const address = `https://overpass.kumi.systems/api/interpreter?data=[out:json][timeout:25000];node["amenity"="${amenity}"](around:${radius},${lat},${lng});out body;>;out skel qt;`
	fetch(address)
	.then(response => response.json())
	.then(data =>{features = data.elements.map(d=>{
		const  {easting: dataX, northing: dataY, zoneNum: dataZone} = fromLatLon(d.lat, d.lon);
		const dist = Math.sqrt((dataX - utmX)**2 + (dataY - utmY)**2);
		const dir = (180/Math.PI) * Math.atan2((dataX - utmX)/dist, (dataY - utmY)/dist)
		
		return{name: d.tags.name, lng: d.lon, lat: d.lat, dist, dir}
		}).filter(d=> d.name!==undefined).sort((a, b)=> a.dist - b.dist);
		})
	.catch(error => {
		console.error('There has been a problem with the overpass API:', error);
	});
	}

	
});
$: drawCompass(ctx, features, heading);
</script>

<main bind:clientWidth={screenW} >
<canvas
	bind:this={canvas}
	width={screenW}
	height={screenW}
></canvas>

</main>

<style>
main {
	height: 100%;
	display: grid;
  	justify-content: center;
  	align-content: center;
	background-color: blanchedalmond;
	}

</style>