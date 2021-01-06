import type { Bar } from "./model";

export const drawCompass = (canvas: HTMLCanvasElement, size: number, features: Bar[], heading: number) => {
    if(size === 0){
        return;
    }
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    //ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

   
    drawIndicator(ctx, heading);

    ctx.save();
    ctx.shadowOffsetX=0;
    ctx.shadowOffsetY=0;
    ctx.shadowColor="black";
    ctx.shadowBlur=4;
    ctx.strokeStyle = 'gray';
    ctx.fillStyle = 'blanchedalmond';
    ctx.textAlign = 'center';
    ctx.lineWidth = 4;
    ctx.translate(ctx.canvas.width/2, ctx.canvas.height/2);

    const minDist = features[0]?.dist||0;
    const maxDist = features[9]?.dist||0;

    const distScale = dist => ctx.canvas.width/4 + (ctx.canvas.width/5) * (dist - minDist)/(maxDist - minDist);

    features.forEach((d,i)=>{
        if(i<=10 ){
           const dir = -Math.PI/2 + Math.PI*(d.dir - heading)/180;
            const scaleDist = distScale(d.dist);
          ctx.strokeText(d.name, scaleDist * Math.cos(dir), scaleDist * Math.sin(dir));
          ctx.fillText(d.name, scaleDist * Math.cos(dir), scaleDist * Math.sin(dir));
        }
    });
    ctx.rotate(Math.PI/2);
    ctx.restore();
}


const drawIndicator = (ctx: CanvasRenderingContext2D, heading: number) =>{
    const middleX = ctx.canvas.width/2;
    const middleY = ctx.canvas.height/2;
    ctx.save();
    ctx.translate(middleX, middleY);
    ctx.rotate(-Math.PI*heading/180);
    ctx.font = '14px Arial';
    const directions = ["N","E","S","W"];
    for(let i = 0; i<4; i++){
    ctx.beginPath()
        ctx.moveTo(0, 0); 
        ctx.lineTo(0, -middleY/2);
        ctx.lineTo(-middleX/12, -middleY/12);
        ctx.lineTo(0, 0);
        ctx.fill();
    ctx.beginPath()
        ctx.moveTo(0, 0); 
        ctx.lineTo(0, -middleY/2);
        ctx.lineTo(middleX/12, -middleY/12);
        ctx.lineTo(0, 0);
        ctx.stroke();
    ctx.fillText(directions[i], -5, -5-middleY/2)
    ctx.rotate(Math.PI/2);
    }
    

    ctx.restore();
}