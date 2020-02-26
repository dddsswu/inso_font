<template>
  <div>
    <template v-for="(item,index) in msgList">
      <div class="content_msgbox" :key="index">
        <div class="msg_box">{{item.msg}}</div>
        <div class="time_box">{{item.username}}:{{item.date}}</div>
      </div>
    </template>
    <div class="sendmsg">
      <textarea placeholder="发送你自己的留言" class="sendmsgbox" rows="2" cols="10" v-model="sendmsg"></textarea>
      <div class="btn-box">
        <button @click="submit" class="app-button">提交</button>
      </div>
    </div>
  </div>
</template>
<script>
import {mapState}from 'vuex'
export default {
  data: function() {
    return {
      msgList: false,
      sendmsg: ""
    };
  },
  computed:{...mapState(['isLogined','username'])},
  methods: {
    async init() {
      try {
        let List = await this.$ajax("/msgbox", "GET");
        console.log(List);
        this.msgList = List.data.data;
      } catch (error) {
        console.log(error);
      }
    },
    async submit(){
        if(!this.isLogined)return this.$alert('请先登录！').then(()=>{this.$router.push('/login')})
        else{
        let date=new Date();
        date=[date.getFullYear(),date.getMonth()+1,date.getDate()]
        date=date.join('-')
           let params={msg:this.sendmsg,username:this.username,date}
           let res =await this.$ajax('/msgbox','POST',params);
           if(res.data.code===1) {
               this.$alert('发送成功了！').then(()=>{
                   this.sendmsg=""
                   this.init();
               })
           }
           else return this.$alert('发送失败，请稍后再试')
        }
    }
  },
  created() {
    this.init();
  }
};

</script>
<style scoped lang="less" >
@import '../css/common.less';
.content_msgbox {
  width: 100%;
  height: 4rem;
  border: 1px solid rgb(130, 130, 130);
  border-radius: 8px;
  text-align: center;
  margin-bottom: 0.2rem;
  .msg_box {
    height: 2.1rem;
    padding-top: 0.5rem;
  }
  .time_box {
    padding-right: 0.8rem;
    text-align: end;
  }
}
.sendmsg {
  border-radius: 8px;
  height: 7.5rem;
  padding-top: 0.5rem;
  border: 1px solid red;
  .sendmsgbox {
    height: 5rem;
    width: 99%;
    resize: none;
    font: 400 18px system-ui;
  }
  .btn-box{
      margin-top: -0.3rem ;
      text-align: end;
      padding-right: 0.8rem;
  }
}
</style>