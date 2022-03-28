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

requestAnimationFrame(animate)

// 500个svg标签
// let  svg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30px" height="30px" viewBox="0 0 24 24" style="enable-background:new 0 0 50 50" xml:space="preserve">
// <rect x="0" y="0" width="4" height="7" fill="#FF6700" transform="scale(1 1.94336)">
//     <animateTransform attributeType="xml" attributeName="transform" type="scale" values="1,1; 1,3; 1,1" begin="0s" dur="0.6s" repeatCount="indefinite"></animateTransform>
// </rect>
// <rect x="10" y="0" width="4" height="7" fill="#FF6700" transform="scale(1 2.72331)">
//     <animateTransform attributeType="xml" attributeName="transform" type="scale" values="1,1; 1,3; 1,1" begin="0.2s" dur="0.6s" repeatCount="indefinite"></animateTransform>
// </rect>
// <rect x="20" y="0" width="4" height="7" fill="#FF6700" transform="scale(1 1.38997)">
//     <animateTransform attributeType="xml" attributeName="transform" type="scale" values="1,1; 1,3; 1,1" begin="0.4s" dur="0.6s" repeatCount="indefinite"></animateTransform>
// </rect>
// </svg>`

// let svgs = ''
// for (let i = 0; i < 1000; i++) {
//   svgs += svg
// }

// let div = document.createElement('div')
// div.innerHTML = svgs

// document.body.appendChild(div)

// canvas创建1000个加载动画
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