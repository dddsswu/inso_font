<template>
    <div class="content_slider">
        <div class="slider_box">
            
        </div>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            
        }
    },
    computed: {
        
    }

}
</script>

<style scoped lang="less">
@import './css/common.less';
.content_slider {
    background-color:@app-orgen; 
    color: @app-orgen;
    font-size: 0.9rem;
    height: 100%;
    width: @slider-width;
    .slider_box {
        display: flex;
        text-align: center;
        
    }
}
@media screen and (max-width: 700px){
    .content_slider{
        display:none;
    }
}
</style>