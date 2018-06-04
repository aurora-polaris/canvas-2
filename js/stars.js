//绘制很多
var starObj=function(){
	this.x;
	this.y;
	this.picnum
	this.timer
	this.xSpd
	this.ySpd
}
starObj.prototype.init=function(){
	this.x=Math.random()*800
	this.y=Math.random()*600
	//this.picnum=0  随机闪
	this.picnum=Math.floor(Math.random()*7)
	this.timer=0
	// 位移,有正负值
	this.xSpd=Math.random()*3-1.5 // [-1.5,1.5]
	this.ySpd=Math.random()*3-1.5
}
starObj.prototype.update=function(){
	// 星星移动
	this.x+=this.xSpd*deltaTime*0.002
	this.y+=this.ySpd*deltaTime*0.002
	// 重生
	if(this.x<0||this.x>800){
		this.init()
		return
	}
	if(this.y<0||this.y>600){
		this.init()
		return
	}
	this.timer+=deltaTime
	if(this.timer>50){
		this.picnum+=1
		this.picnum&=7
		this.timer=0
	}
	
	if(this.picnum>=7){
		this.picnum=0
	}
}
starObj.prototype.draw=function(){
	/*context.drawImage(img,sx,sy,swidth,sheight,x,y,width,height);
	 使用的图片，开始剪切的x位置，开始剪切的y的位置，被剪切的图片的宽，被剪切的图片的高，在画布上的x位置，在画布上的y的位置，要使用的图像的宽，要使用的图像的高*/
//	ctx.drawImage(star,this.x,this.y)
//	ctx.drawImage(star,0,0,7,7,this.x,this.y,7,7)
	ctx.save()
	ctx.globalAlpha=alive
	ctx.drawImage(star,this.picnum*7,0,7,7,this.x,this.y,7,7)
	ctx.restore()
}
// 绘制一个
function drawStar(){
	// ctx.drawImage(star,300,400)
	for(var i=0;i<num;i++){
		starts[i].draw()
		starts[i].update()
	}
}
// 鼠标控制,使用全局透明度搭配save，restore使用
function aliveUpdate(){
	if(switchy){
		alive+=0.03*deltaTime*0.05
		if(alive>1){
			alive=1
		}
	}else{
		alive-=0.03*deltaTime*0.05
		if(alive<0){
			alive=0
		}
	}
}
