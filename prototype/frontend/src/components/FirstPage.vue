<template>
    <div>
      <Header></Header>
      <div class='MainBox'>
        <el-row display="margin-top:10px">
          <el-input placeholder="Enter Barcode" v-model="input" :disabled="true" style="display:inline-table; width: 60%; float:left"></el-input>
          <el-button @click="submitBarcode" style="float:left; margin: 2px;"> submit</el-button>
        </el-row>
        <el-row>
          <el-table :data="productInfo" style="width: 100%" border>
            <el-table-column prop="barcode" label="Barcode Number" min-width="100">
            </el-table-column>
            <el-table-column prop="name" label="Product Name" min-width="100">
            </el-table-column>
            <el-table-column prop="price" label="Product Unit Price" min-width="100">
            </el-table-column>
          </el-table>

        </el-row>
      </div>
    </div>
</template>

<script>
import Header from '../components/Header'
export default {
  data () {
    return {
      input: '',
      productInfo: [
        {
          barcode: '',
          name: '',
          price: ''
        }
      ],
      fileName: '',
      barcode: ''
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
    },

    submitBarcode () {
      console.log('>>>' + this.input)
      this.axios.get('http://127.0.0.1:8000/api/overview_item').then(response => {
        var res = response.data
        console.log(res)

        // params: {
        //   barcode: res['productInfo'].barcode
        // }
      })
    },

    handleUpload (file) {
      console.log(file.name)
      this.fileName = file.name
      this.input = this.fileName
    }

  },
  components: {
    Header
  }
}
</script>

<style scoped>
.MainBox{
  margin-top: 20px;
}
.box1{
  align-items: center;
}
</style>
