<template>
    <div >
        <template v-for="(item,index) in msgList">
            <div class="content_msgbox"  :key="index">
            <div class="msg_box" >{{item.msg}}</div>
            <div class="time_box" >{{item.username}}:{{item.date}}</div>
            </div>
        </template>
    </div>
</template>
<script>
export default {
    data:function(){
        return {
            msgList:false,
        }
    },
    methods:{
         init(){
            try {
               let List=this.$ajax('/msgbox','GET')
               List.then((res)=>{
                   console.log(res)
                   this.msgList=res.data.data
               })
           } catch (error) {
               console.log(error)
           } 
        }
    },
    created(){
        this.init();
    }
}
</script>
<style scoped lang="less" >
    .content_msgbox{
        width: 100%;
        height: 4rem;
        border: 1px solid rgb(130,130,130);
        border-radius: 8px;
        text-align: center;
        margin-bottom: 0.2rem;
        .msg_box{
        height: 2.1rem;
        padding-top: 0.5rem;
        }
        .time_box{
            padding-right: 0.8rem;
            text-align: end;
        }   
    }
</style>