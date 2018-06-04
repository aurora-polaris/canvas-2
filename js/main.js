var can ,ctx,w,h
var img=new Image()
var star=new Image()
var lastTime
var deltaTime
var switchy=false
var alive=0
var px,py
// 数量
var num=100
var starts=[]
function init(){
	can=document.getElementById('canvas')
	ctx=can.getContext('2d')
	w=can.width
	h=can.height
	// 鼠标事件
	document.addEventListener('mousemove',mousemove,false)
	img.src="image/girl.jpg"
	star.src="image/star.png"
	// 初始化星星
	for(var i=0;i<num;i++){
		//push
		starts[i]=new starObj()
		starts[i].init()
	}
	lastTime=Date.now()
	gameloop()
}
/*循环调用  requestAnimFrame(function(){})  根据性能确定时间
 setTimeout(function(){},time) 3秒后第一次调用
 setInterval(function(){},time) 第一次调用3秒后再一次调用*/
function gameloop(){
	window.requestAnimationFrame(gameloop)/* 做兼容, 循环调用gameloop*/
	var now=Date.now()
	deltaTime=now-lastTime
	lastTime=now
	background()
	drawImage()
	drawStar()
	aliveUpdate()
}
document.body.onload=init
function background(){
	ctx.fillStyle='$393550'
	ctx.fillRect(0,0,w,h)
}
// 绘制图片
function drawImage(){
	ctx.drawImage(img,0,0,w,h)
}
function mousemove(e){
	if(e.offsetX||e.layerX){
		px=e.offsetX==undefined?e.layerX:e.offsetX
		py=e.offsetY==undefined?e.layerY:e.offsetY
		// 判断鼠标是否在 画布内
		if(px>0&&px<800&&py>0&&py<600){
		   switchy=true
		}else{
			switchy=false
		}
		
	}
}
