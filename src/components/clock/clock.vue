<template>
    <div class='clockbox'>
        <canvas  id="clock" width="200px" height="200px"></canvas> 
    </div>
</template>
<script>
export default {
    methods:{
         init() {
                let canvas = document.getElementById('clock');
                //let canvas = this.$refs.clock;
                let ctx = canvas.getContext("2d");
                this.draw(ctx);
            },
             draw(ctx) {
                 let _this=this;
                requestAnimationFrame(function step() {
                    _this.drawDial(ctx); //绘制表盘
                    _this.drawAllHands(ctx); //绘制时分秒针
                    requestAnimationFrame(step);
                });
            },
            /*绘制时分秒针*/
             drawAllHands(ctx) {
                let time = new Date();

                let s = time.getSeconds();
                let m = time.getMinutes();
                let h = time.getHours();

                let pi = Math.PI;
                let secondAngle = pi / 180 * 6 * s; //计算出来s针的弧度
                let minuteAngle = pi / 180 * 6 * m + secondAngle / 60; //计算出来分针的弧度
                let hourAngle = pi / 180 * 30 * h + minuteAngle / 12; //计算出来时针的弧度

                this.drawHand(hourAngle, 40, 6, "red", ctx); //绘制时针
                this.drawHand(minuteAngle, 60, 4, "green", ctx); //绘制分针
                this.drawHand(secondAngle, 90, 2, "yellow", ctx); //绘制秒针
            },
            /*绘制时针、或分针、或秒针
             * 参数1：要绘制的针的角度
             * 参数2：要绘制的针的长度
             * 参数3：要绘制的针的宽度
             * 参数4：要绘制的针的颜色
             * 参数4：ctx
             * */
             drawHand(angle, len, width, color, ctx) {
                ctx.save();
                ctx.translate(100, 100); //把坐标轴的远点平移到原来的中心
                ctx.rotate(-Math.PI / 2 + angle); //旋转坐标轴。 x轴就是针的角度
                ctx.beginPath();
                ctx.moveTo(-4, 0);
                ctx.lineTo(len, 0); // 沿着x轴绘制针
                ctx.lineWidth = width;
                ctx.strokeStyle = color;
                ctx.lineCap = "round";
                ctx.stroke();
                ctx.closePath();
                ctx.restore();
            },

            /*绘制表盘*/
             drawDial(ctx) {
                 console.log(111)
                let pi = Math.PI;

                ctx.clearRect(0, 0, 200, 200); //清除所有内容
                ctx.save();

                ctx.translate(100, 100); //一定坐标原点到原来的中心
                ctx.beginPath();
                ctx.arc(0, 0, 148, 0, 2 * pi); //绘制圆周
                ctx.stroke();
                ctx.closePath();

                for (let i = 0; i < 60; i++) { //绘制刻度。
                    ctx.save();
                    ctx.rotate(-pi / 2 + i * pi / 30); //旋转坐标轴。坐标轴x的正方形从 向上开始算起
                    ctx.beginPath();
                    ctx.moveTo(80, 0);
                    ctx.lineTo(100, 0);
                    ctx.lineWidth = i % 5 ? 2 : 4;
                    ctx.strokeStyle = i % 5 ? "black" : "red";
                    ctx.stroke();
                    ctx.closePath();
                    ctx.restore();
                }
                ctx.restore();
            }
        
    },
    created(){
        this.$nextTick(()=>{
            this.init();
        })
    }
}
</script>
<style lang="less" scoped>
    .clockbox{
        background-image: url('../../assets/images/timg.jpg');
        background-size: cover;
        height: 13.5rem;
        #clock{
            margin-top: 0.2rem;
        }
    }
</style>