<template>
    <div class='header-wrapper'>
        <div class='header'>
            <p>Easy Peasy</p>
            <img :src='logo' style="width:100px; height:100px">
        </div>
    </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      logo: require('../assets/Logo_NBG.png')
    }
  }
}
</script>

<style scoped>
.header-wrapper{
    background-color: #3170a7;
    margin: 0px;
    padding: 0px;
    border: 0px;
    width: 100%;
}
.header{
    text-align: center;
}

</style>
