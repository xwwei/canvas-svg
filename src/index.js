import './index.less'
import Stats from 'stats.js'

let stats = new Stats()
stats.showPanel( 0 ) // 0: fps, 1: ms, 2: mb, 3+: custom
document.body.appendChild( stats.dom )


function animate() {
	stats.begin()
	stats.end()
	requestAnimationFrame( animate )

}

requestAnimationFrame( animate )

// 500个svg标签
// let  svg = `<svg class="lds-message" width="80px" height="80px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
// <g transform="translate(20 50)">
//     <circle cx="0" cy="0" r="7" fill="#e15b64" transform="scale(0.99275 0.99275)">
//         <animateTransform attributeName="transform" type="scale" begin="-0.375s" calcMode="spline" keySplines="0.3 0 0.7 10.3 0 0.7 1" values="010" keyTimes="00.51" dur="1s" repeatCount="indefinite"></animateTransform>
//     </circle>
// </g>
// <g transform="translate(40 50)">
//     <circle cx="0" cy="0" r="7" fill="#f47e60" transform="scale(0.773605 0.773605)">
//         <animateTransform attributeName="transform" type="scale" begin="-0.25s" calcMode="spline" keySplines="0.3 0 0.7 10.3 0 0.7 1" values="010" keyTimes="00.51" dur="1s" repeatCount="indefinite"></animateTransform>
//     </circle>
// </g>
// <g transform="translate(60 50)">
//     <circle cx="0" cy="0" r="7" fill="#f8b26a" transform="scale(0.42525 0.42525)">
//         <animateTransform attributeName="transform" type="scale" begin="-0.125s" calcMode="spline" keySplines="0.3 0 0.7 10.3 0 0.7 1" values="010" keyTimes="00.51" dur="1s" repeatCount="indefinite"></animateTransform>
//     </circle>
// </g>
// <g transform="translate(80 50)">
//     <circle cx="0" cy="0" r="7" fill="#abbd81" transform="scale(0.113418 0.113418)">
//         <animateTransform attributeName="transform" type="scale" begin="0s" calcMode="spline" keySplines="0.3 0 0.7 10.3 0 0.7 1" values="010" keyTimes="00.51" dur="1s" repeatCount="indefinite"></animateTransform>
//     </circle>
// </g>
// </svg>`

// let svgs = ''
// for (let i = 0; i < 500; i++) {
//   svgs += svg
// }

// let div = document.createElement('div')
// div.innerHTML = svgs

// document.body.appendChild(div)

const canvas = document.createElement('canvas')
canvas.width = 1000
canvas.height = 3000

let context = canvas.getContext('2d'), speed = 0.1;

//绘制白色外圈
function whiteCircle(centerX, centerY){
  context.save();
  context.beginPath();
  context.strokeStyle = "#A5DEF1";
  context.lineWidth = 12;
  context.arc(centerX, centerY, 30 , 0, Math.PI*2, false);
  context.stroke();
  context.closePath();
  context.restore();
}

//百分比文字绘制
function text(n, centerX, centerY){
  context.save();
  context.fillStyle = "#F47C7C";
  context.font = "20px Arial";
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillText(n.toFixed(0)+"%", centerX, centerY);
  context.restore();
}

//动画循环
(function drawFrame(){
  window.requestAnimationFrame(drawFrame, canvas);
  context.clearRect(0, 0, canvas.width, canvas.height);

  for(let i = 0; i < 1000; i++) {
    let clientX = i % 10 * 100
    let clientY = Math.floor((i + 10) / 10 * 60)
    whiteCircle(clientX, clientY);
    text(speed, clientX, clientY)
  }

  if(speed > 100) speed = 0;
  speed += 0.1;
}());


document.body.appendChild(canvas)