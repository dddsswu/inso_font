<template>
  <div style="height:100%" id="app">
    <app-header></app-header>
     <router-view />
  </div>
</template>

<script>
import Header from './components/Header.vue'
export default {
    components:{
        'app-header':Header
    }
}
</script>