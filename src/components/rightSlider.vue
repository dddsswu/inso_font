<template>
    <div class="content_slider">
        <div class="slider_box">
            <div class='clock_box'>
                <app-clock v-if="clock"></app-clock>
            </div>
            <div class="chatbox" v-if="groupchat">
                <button @click="toChat" class="app-button">聊天区</button>
            </div>
        </div>
    </div>
</template>

<script>
import Clock from '../components/clock/clock.vue'
export default {
    data: function() {
        return {
            
        }
    },
    props:['clock','groupchat'],
    components:{
        'app-clock':Clock
    },
    computed: {
        
    },
    methods:{
        toChat(){
            this.$router.push('/groupchat')
        }
    }

}
</script>

<style scoped lang="less">
@import './css/common.less';
.content_slider {
    background-color:@app-gray; 
    color: @app-orgen;
    font-size: 0.9rem;
    height: 100%;
    width: @slider-width;
    .slider_box {
        width: 100%;
        display: flex;
        text-align: center;
        flex-wrap: wrap;
        .clock_box{
            width: 100%;
        
        }
        .chatbox{
            width: 100%;
            height: 3.5rem;
            button{
                width:100%;
                height:100%;

            }
        }
    }
}
@media screen and (max-width: 700px){
    .content_slider{
        display:none;
    }
}
</style>