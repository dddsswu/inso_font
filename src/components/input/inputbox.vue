<template>
    <div>
        <span>{{title}}</span>  <input @input="inputcode" :value="input" :type="type"/>
        <!-- <app-input type="text" title="yonghan"   @myinput="input=$event" ></app-input>{{input}}  调用方法，暂时不用封装的输入框 -->
    </div>
</template>
<script>
export default {
    data:function(){
        return {
            input:''
        }
    },
    props:['title','type'],
    methods:{
        inputcode(e){
            console.log(e.target.value)
            this.input=e.target.value;
           return this.$emit('myinput',this.input)
        }
    }
}
</script>
<style lang='less' scoped>

</style>