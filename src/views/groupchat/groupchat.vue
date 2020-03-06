<template>
    <div class="content_home">
        <app-left></app-left>
        <div class="content_mid">
            <div class="msg_box">
                <div v-for="(item,index) in msgList" :key="index" :class="item.username===username?'owenmsg':'othermsg'">
                    {{item.username}}:{{item.msg}}
                </div>
            </div>
            <div class='input_box'>

            <textarea style="width:100%;height:100%" v-model="sendmsg"></textarea>
            </div>
            <div class="btn_box"> 
            <button class="app-button" @click="submit">发送</button>

            </div>
        </div>
        <app-right></app-right>
    </div>
</template>

<script>
import leftslider from '../../components/leftSlider'
import rightslider from '../../components/rightSlider'
import {mapState} from 'vuex'

export default {
    data: function() {
        return {
            sendmsg: '',
            isloaded: false,
            ws: '',
            msgList:[]
        }
    },
    components: {
        'app-left': leftslider,
        'app-right': rightslider
    },
    computed: {
        ...mapState(['username'])
    },
    methods: {
        init() {
            let _this = this;
            //后面补上一个登陆验证
            var ws = new WebSocket('ws://localhost:3000/groupchat');
            // 响应onmessage事件:
            ws.onopen = function() {
                _this.isloaded = true;
                let username=_this.username||'游客';
            let data = JSON.stringify({ msg: '进入成功',username });
                ws.send(data) 
            };
            // //回调后面要渲染到dom
            ws.onmessage = function(msg) {
                _this.rendermsg(msg.data)
            };
            ws.close=function (){
            }
            _this.ws = ws;
        },
        submit() {
            if(this.username==='')return this.$alert('请先登录').then(()=>{this.$router.push('/login')})
            if(!this.isloaded) return this.$alert('重新进入').then(()=>{this.$router.push('/')})
            let ws = this.ws;
            let data = JSON.stringify({ msg: this.sendmsg, username: this.username });
            console.log(data)
            ws.send(data)

        },
        rendermsg(msg) {
            console.log('render', msg);
            let data = JSON.parse(msg);
            this.msgList.push(data);
            //alert(data.msg)
        },
        out(){
            let ws=this.ws;
            let data = JSON.stringify({ msg: '已经退出', username: this.username });
            console.log(data)
            ws.send(data)
        }
    },
    created() {
        this.init()
    },
    beforeDestroy(){
        console.log(111)
        this.out();
    }
}
</script>

<style lang='less' scoped>
@import url('../../components/css/common.less');
.msg_box{
    width: 100%;
    height: 70%;
    border:1px solid red;
}
        .input_box{
            width: 100%;
        }
        .btn_box{
            width: 100%;
            text-align: end;
        }
.owenmsg{
    text-align: right;
}

</style>