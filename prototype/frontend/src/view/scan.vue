<template>
    <div>
      <Header></Header>
      <div class='MainBox'>
        <div class='PictureBox'>
        <el-row>
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
        </div>

        <div class='ButtonBox'>
        <el-row>
            <el-button type="success" plain @click="searchBarcode">Search Your Barcode</el-button>
        </el-row>
        </div>
      </div>

        <div class='FormBox'>
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
                <el-form-item label="Supplier Details">
                    <el-input v-model="supplier"></el-input>
                </el-form-item>
                <el-form-item label="Quantity">
                    <el-input-number v-model="quantity"></el-input-number>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">Create</el-button>
                </el-form-item>
            </el-form>
        </el-row>
        </div>

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
      supplier: '',
      quantity: '',
      form: {
        barcode: '',
        name: '',
        price: '',
        supplier: '',
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
    clear () {
      this.barcode = ''
      this.supplier = ''
      this.price = ''
      this.name = ''
      this.quantity = ''
    },
    searchBarcode () {
      this.axios.get('http://127.0.0.1:8000/api/barcode_get_item?barcode=' + this.barcode).then(response => {
        var res = response.data
        console.log(res)
        console.log(res['productInfo'])
        this.form = res['productInfo']
        this.name = res['productInfo'].name
        this.price = res['productInfo'].price
        if (res['error_num'] === 1) {
          this.$message.error('We cannot find the information, please manully enter')
        } else {
          if (res.newItem === 0) {
            this.supplier = res['productInfo'].supplier
            this.$message({
              message: 'We found the product in the your Database',
              type: 'success'
            })
          } else {
            this.$message({
              message: 'This is a new product, Information get from barcode system',
              type: 'warning'
            })
          }
        }
      })
    },
    onSubmit () {
      this.axios.post('http://127.0.0.1:8000/api/update_info', {
        barcode: this.barcode,
        name: this.name,
        price: this.price,
        quantity: this.quantity,
        supplier: this.supplier

      }).then(response => {
        console.log(response)
        console.log(response.data)
        this.$message({
          message: 'Updated Successfully!',
          type: 'success'
        })
        this.clear()
        // this.barcode = ''
        // this.supplier = ''
        // this.price = ''
        // this.name = ''
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
.MainBox{
    text-align: center;
    margin-top: 20px;
}
.ButtonBox{
    margin-top: 20px;
}
.FormBox{
    Padding: 20px;
}
.el-form-item{
  margin-bottom: 10px;
}
</style>
