<template>
    <div>
      <Header></Header>
      <div class='MainBox'>
        <div class='Title'>
          <h3> Overview of Inventory and Sales </h3>
        </div>
        <div class='UpdateBox'>
        <el-row display="margin-top:10px">
            <el-button type="danger" plain @click="submitBarcode"> Update</el-button>
        </el-row>
        </div>

        <div class='TableBox'>
        <el-row>
          <el-table :data="productInfo" style="width: 100%" border>
            <el-table-column prop="name" label="Product Name" min-width="100">
            </el-table-column>
            <el-table-column prop="price" label="Product Unit Price" min-width="100">
            </el-table-column>
            <el-table-column prop="quantity" label="Existing Quantity" min-width="100">
            </el-table-column>
            <el-table-column prop="salesQuantity" label="Sales Quantity" min-width="100">
            </el-table-column>
          </el-table>
        </el-row>
      </div>
      </div>
      <div class="square">
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
          price: '',
          quantity: '',
          salesQuantity: '',
          supplier: ''
        }
      ],
      fileName: '',
      barcode: ''
    }
  },
  name: 'FirstPage',
  methods: {

    submitBarcode () {
      console.log('>>>' + this.input)
      this.axios.get('http://127.0.0.1:8000/api/overview_item').then(response => {
        var res = response.data
        console.log(res)
        this.productInfo = res['productInfo']
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
  margin-top: 10px;
}
.UpdateBox{
  text-align: center;
  Padding: 10px;
}
.TableBox{
  text-align: center;
  Padding: 8px;
}
.square{
    background-color: #23395d;
    width: 100%;
    height: 80px;
    position: fixed;
    bottom: 0;
}
.Title{
  text-align: center;
  margin-top: 15px;
  color: #23395d
}

</style>
