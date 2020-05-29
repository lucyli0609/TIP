<template>
    <div>
      <Header></Header>
      <div class='MainBox'>
        <el-row>
          <div class='box1'>
            <el-upload
              action="#"
              list-type="picture-card"
              :auto-upload="false">
                <i slot="default" class="el-icon-plus"></i>
                <div slot="file" slot-scope="{file}">
                  <img
                    class="el-upload-list__item-thumbnail"
                    :src="file.url" alt=""
                  >
                   <span class="el-upload-list__item-actions">
                    <span
                      v-if="!disabled"
                      class="el-upload-list__item-delete"
                      @click="handleUpload(file)"
                    >
                      <i class="el-icon-upload2"></i>
                      <p class="search">Search Barcode</p>
                    </span>
                </div>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>
        </el-row>
        <el-row>
            <el-button @click="searchBarcode">search the Barcode</el-button>
        </el-row>
        <!-- <el-row display="margin-top:10px; width: 100%" type="flex" class="row-bg">
            <el-column :span="12">
                <p>Barcode Number</p>
            </el-column>
            <el-column :span="12">
                <el-input placeholder="Please input" v-model="barcode"></el-input>
            </el-column>
        </el-row>
        <el-row display="margin-top:10px" type="flex" class="row-bg">
            <el-column :span="12">
                <p class='form'>Product Name</p>
            </el-column>
            <el-column :span="12">
                <el-input placeholder="Please input" v-model="name"></el-input>
            </el-column>
        </el-row>
        <el-row display="margin-top:10px" type="flex" class="row-bg">
            <el-column :span="12">
                <p>Unit Price</p>
            </el-column>
            <el-column :span="12">
                <el-input placeholder="Please input" v-model="price"></el-input>
            </el-column>
        </el-row>
        <el-row display="margin-top:10px" type="flex" class="row-bg">
            <el-column :span="12">
                <p>Quantity</p>
            </el-column>
            <el-column :span="12">
                <el-input placeholder="Please input" v-model="quantity"></el-input>
            </el-column>
        </el-row>
        <el-row>
            <el-button type="primary">Submit</el-button>
        </el-row> -->
        <el-row>
            <el-form label-width="120px" ref="form" :model="form" :label-position="left">
                <el-form-item label="Barcode Number">
                    <el-input v-model="barcode">{{form.barcode}}</el-input>
                </el-form-item>
                <el-form-item label="Product Name">
                    <el-input v-model="name"></el-input>
                </el-form-item>
                <el-form-item label="Unit Price">
                    <el-input v-model="price"></el-input>
                </el-form-item>
                <el-form-item label="Quantity">
                    <el-input-number v-model="quantity"></el-input-number>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">Create</el-button>
                </el-form-item>
            </el-form>
        </el-row>

</template>

<script>
import Header from '../components/Header'
export default {
  data () {
    return {
      fileName: '',
      barcode: '',
      name: '',
      price: '',
      quantity: '',
      form: {
        barcode: '',
        name: '',
        price: '',
        quantity: ''
      }
    }
  },
  components: {
    Header
  },
  methods: {
    handleUpload (file) {
      console.log(file.name)
      this.fileName = file.name
      this.barcode = this.fileName
    },
    searchBarcode () {
      this.axios.get('http://127.0.0.1:8000/api/barcode_get_item?barcode=' + this.barcode).then(response => {
        var res = response.data
        console.log(res)
        console.log(res['productInfo'])
        this.form = res['productInfo']
        if (res.newItem === 0) {
          this.name = res['productInfo'].name
          this.price = res['productInfo'].price
          this.$message({
            message: 'We found the product in the Barcode Database',
            type: 'success'
          })
        } else {
          this.$message({
            message: 'We cannot find the product, please manually enter details',
            type: 'warning'
          })
        }
      })
    },
    onSubmit () {
      this.axios.post('http://127.0.0.1:8000/api/update_info', {
        barcode: this.barcode,
        name: this.name,
        price: this.price,
        quantity: this.quantity

      }).then(response => {
        console.log(response)
        console.log(response.data)
      })
    }
  }
}
</script>

<style scoped>
.search{
    size: 10px;
}
.box1{
    text-align: center;
}
.row-bg{
    text-align: left;
}
.form{
    width: 50%;
}
</style>
