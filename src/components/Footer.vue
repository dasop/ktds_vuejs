<template>
  <footer>
    <p>{{copyright}} {{title}}</p>
  </footer>
</template>

<script>
import {bus} from '../main';
export default {

  props:{
    title:{
      type:String
    }
  },

  data () {
    return {
      copyright:'Copyright 2017 Vue Ninjas'
    }
  },
  created(){
    bus.$on('titleChanged',(data)=>{
      this.title=data;
    })
  }
}
</script>

<style scoped>
  footer{
    background:#222;
    paading:6px;
  }
  p{
    color:lightgreen;
    text-align:center;
  }
</style>
