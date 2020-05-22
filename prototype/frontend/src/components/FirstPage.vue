<template>
    <div>
        <p>111</p>
        <el-button @click="showBook"> hello</el-button>
    </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  name: 'FirstPage',
  methods: {
    showBook () {
      console.log('Hey there')
      this.axios.get('http://127.0.0.1:8000/api/show_books').then(response => {
        var res = response.data
        console.log(res)
      })
    }
  }
}
</script>
