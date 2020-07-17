<template>
  <div id="app">
    
    <div id="nav">
    </div>
    <router-view/>
  </div>

</template>

<style>
*{
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}
body {
  background: linear-gradient(to right, rgb(21, 153, 87), rgb(21, 87, 153));
}
#app{
  
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
