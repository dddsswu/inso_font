<template>
    <div class="blog_box">
        <app-leftslider @app-addphoto="addphoto($event)" :photo="true"></app-leftslider>
        <div class="mid_box">
            <div class="title_box">
                <div>
                    <span>标题：</span><input v-model="title" /><button class="app-button" @click="submit">提交</button></div>
            </div>
            <textarea class="input_code" v-model="msg"></textarea>
        </div>
        <div class="show_box">
            <div class="img_box" v-if="imgData"><img :src="imgData" /></div>
            <div class="input_blog" v-html="msg"></div>
        </div>
        <input @change="drawpic" style="display:none" type="file" ref="photo" multiple="false" accept="image/*" />
    </div>
</template>

<script>
import leftSlider from "../../components/leftSlider";
import {mapState} from 'vuex'
export default {
    data: function() {
        return {
            msg: "",
            count: 0,
            photo: [],
            imgData: "",
            title: ""
        };
    },
    components: {
        "app-leftslider": leftSlider
    },
    computed:{...mapState(['username'])},
    methods: {
        addphoto(val) {
            if (val) {
                let node = this.$refs.photo;
                node.click();
            }
        },
        drawpic(e) {
            let _this = this;
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");
            var files = e.target.files;
            var image = new Image();
            image.src = window.URL.createObjectURL(files[0]);
            image.onload = function() {
                console.log(image.sizes)
                // canvas.width = image.height / 2;
                // canvas.height = image.width / 2;
                canvas.width = 1366;
                canvas.height = 768;
                ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

                var base64Img = canvas.toDataURL("image/jpg", 0.8);
                _this.imgData = base64Img;
                console.log(_this.imgData)
            };
            //var dataURL = canvas.toDataURL()
            // console.log(_this.imgData);
        },
        async submit() {
            let date = new Date();
            date = [date.getFullYear(), date.getMonth() + 1, date.getDate()]
            date = date.join('-')
            if(this.username==="")return this.$alert('请先登录！').then(()=>{this.$router.push('/login')})
            if(this.msg===""||this.title==="") return this.$alert('请填写好标题/内容！').then(()=>{})
            let params = { "msg": this.msg,username:this.username, "title": this.title, date:date,"imgData": this.imgData };
            let res = await this.$ajax('/postblog', 'POST', params);
            console.log(res)
            if(res.data.code){
              this.$alert(res.data.msg).then(()=>{
                this.$router.push('/')
              })
            }else{
              this.$alert(res.data.msg);
            }
        }
    }
};
</script>

<style lang="less" scoped>
@import url('../../components/css/common.less');
.blog_box {
    width: 100%;
    height: 100%;
    border: 1px solid red;
    display: flex;
    .mid_box {
        width: 40%;
        height: 100%;
        .title_box {
            width: 100%;
            height: 8%;
        }
        .input_code {
            width: 99%;
            resize: none;
            height: 90%;
        }
    }
    .show_box {
        width: 40%;
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        .img_box {
            width: 100%;
            height: 40%;
            border: 1px solid yellow;
            margin-bottom: -20rem;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .input_blog {
            width: 100%; //border: 1px solid yellow;
        }
    }
}
</style>