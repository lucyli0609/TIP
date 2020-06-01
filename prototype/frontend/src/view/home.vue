<template>
    <div class='homePage'>
      <vue-particles style="width:100%; height: 100%; position: absolute" color="#dedede"
                   :particleOpacity="0.7"
                   :particlesNumber="80"
                   shapeType="circle"
                   :particleSize="4"
                   linesColor="#dedede"
                   :linesWidth="1"
                   :lineLinked="true"
                   :lineOpacity="0.4"
                   :linesDistance="150"
                   :moveSpeed="3"
                   :hoverEffect="true"
                   hoverMode="grab"
                   :clickEffect="true"
                   clickMode="push">
        </vue-particles>
        <div class='FirstPage'>
            <el-row style="type:flex">
                <div style="text-align: center;">
                  <img :src="logo" alt="">
                </div>
            </el-row>
            <el-row style="type:flex; margin-top: 20px">
                <div style="text-align: center;">
                  <el-button @click="goScan">Barcode Scanning Page</el-button>
                </div>
            </el-row>
            <el-row style="type:flex; margin-top: 20px">
                <div style="text-align: center;">
                  <el-button @click="goOverview">Overview Page</el-button>
                </div>
            </el-row>
        </div>

</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      logo: require('../assets/Logo_NBG.png')
    }
  },
  methods: {
    goScan () {
      this.$router.push('/scan')
    },
    goOverview () {
      this.$router.push('/FirstPage')
    }
  }
}
</script>

<style scoped>
.homePage {
    width: 100%;
    height: 100%;
    position:absolute;
    background-color: #152238;
    background-repeat: non-repeat;
    background-size: cover;
    padding-bottom: 5%;
}
.FirstPage{
     position: relative;
     margin: 10%;
}
img{
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 400px;
}
</style>
