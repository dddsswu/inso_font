<template>
    <div class="content_slider">
        <div class="slider_box">
            <div v-if="blog" class="blog_box">
                <div class="img_box">
                    <img class="img" :src="url" />
                </div>
                <div class="title_box">{{title}}</div>
                <div class="title_box">{{date}}</div>

            </div>
            <button v-if="photo" class="app-button" @click="addphoto">添加照片</button>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex';
import URL from '../api/url'
export default {
    data: function() {
        return {
            url: '',
            title:'',
            date:''
        }
    },
    props: ['photo', 'blog'],
    computed: {
        ...mapState(['username'])
    },
    methods: {
        addphoto() {
            return this.$emit('app-addphoto', true)
        },
        async initBlog(){
            if(this.blog){
                let res = await this.$ajax('/postblog/last','POST',{username:this.username})
                this.title=res.data.title;
                this.date=res.data.date;
                this.url=URL()+res.data.imgname;
               // this.url='http://49.235.240.136:3000'+res.data.imgname;

            }
        }
    },
    created(){
        this.initBlog()
    }
}
</script>

<style scoped lang="less">
@import './css/common.less';
.content_slider {
    background-color: @app-gray;
    color: @app-orgen;
    font-size: 0.9rem;
    height: 100%;
    width: @slider-width;
    .slider_box {
        display: flex;
        text-align: center;
        height: 100%;
        .blog_box {
            width: 100%;
            height: 50%;
            border-radius: 8px;
            border: 1px solid black;
            .img_box {
                width: 100%;
                height: 80%;
                .img {
                    width: 100%;
                    height: 95%;
                }
            }
        }
    }
}

@media screen and (max-width: 700px) {
    .content_slider {
        display: none;
    }
}
</style>