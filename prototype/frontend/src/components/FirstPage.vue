<template>
    <div>
      <el-row>
        <p>111</p>
        <el-button @click="showBook"> hello</el-button>
      </el-row>
      <el-row display="margin-top:10px">
        <el-input placeholder="Enter Barcode" v-model="input"  style="display:inline-table; width: 30%; float:left"></el-input>
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
</template>

<script>
export default {
  data () {
    return {
      input: '',
      productInfo: []
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
      this.axios.get('http://127.0.0.1:8000/api/barcode_get_item?barcode=' + this.input).then(response => {
        var res = response.data
        console.log(res)
        this.productInfo = res['productInfo']
        // if (res['newItem'] === 1) {
        //   this.$router.push('/newProduct')
        // }
      })
    }
  }
}
</script>
