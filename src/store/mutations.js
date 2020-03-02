export default{
    login(state,payload){
        state.isLogined=payload.isLogined;
        state.username=payload.username;
    },
    loginout(state){
        state.isLogined=false;
        state.username="";
    }
}