<template>
    <div class="content_slider">
        <div class="slider_box">
            <div class='clock_box'>
                <app-clock v-show="clock"></app-clock>
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
    props:['clock'],
    components:{
        'app-clock':Clock
    },
    computed: {
        
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
        display: flex;
        text-align: center;
        .clock_box{
            width: 100%;
        
        }
    }
}
@media screen and (max-width: 700px){
    .content_slider{
        display:none;
    }
}
</style>