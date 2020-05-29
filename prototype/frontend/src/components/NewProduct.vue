<template>
<div>
  <Header></Header>
   <el-form ref="form" :model="form" label-width="120px">
    <el-form-item label="Barcode Number">
        <el-input v-model="form.barcode">{{form.barcode}}</el-input>
    </el-form-item>
    <el-form-item label="Product Name">
        <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="Unit Price">
        <el-input v-model="form.price"></el-input>
    </el-form-item>
    <el-form-item label="Supplier Number">
        <el-switch v-model="form.sup"></el-switch>
    </el-form-item>
    <el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button @click="goBack">Cancel</el-button>
    </el-form-item>
  </el-form>
</div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        barcode: '',
        name: '',
        price: '',
        sup: ''
      }

    }
  },
  name: 'NewProduct',
  created () {
    console.log('hello!!!!!!!!!')
    this.getParams()
  },
  methods: {
    getParams () {
      console.log('>>!!')
      const barcodeParm = this.$route.query.barcode
      console.log(barcodeParm)
      this.form.barcode = barcodeParm
      console.log('>>!!')
    },
    onSubmit () {
      console.log('submit')
      console.log(this.form)
    },
    goBack () {
      this.$router.push('/FirstPage')
    }
  }

}
</script>
