export default {
    login(context,payload){
        context.commit('login',payload)
    },
    loginout(context){
        context.commit('loginout')
    }
}