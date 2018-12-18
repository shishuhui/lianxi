<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
  list-style: none;
}
a{
  text-decoration: none;
}
#app,html,body{
  width:100%;
  height: 100%;
  overflow: hidden;
}
.border{
  border-bottom: 20px solid #eee;
}
.content{
  border-top: 1px solid #ccc;
}
input,button{  
  outline: none; 
}
</style>
