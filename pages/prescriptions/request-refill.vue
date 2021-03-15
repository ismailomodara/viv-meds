<template>
  <div>
    <PageHeader :title="title" :image="image" :image-folder="imageFolder" />
    <el-container class="is-flex-column">
      <div class="vm-section_content">
        <p>
          Fill out our secure form below, and we will certainly get back to you.
        </p>
      </div>
      <div class="vm-section_content">
        <el-form ref="form" :model="form" label-position="top">
          <el-row type="flex" :gutter="60" class="flex-wrap">
            <el-col :md="12">
              <el-form-item
                label="First Name"
                prop="first_name"
                :rules="validations.inputField"
              >
                <el-input v-model="form.first_name" type="text" />
              </el-form-item>
            </el-col>
            <el-col :md="12">
              <el-form-item
                label="Last Name"
                prop="last_name"
                :rules="validations.inputField"
              >
                <el-input v-model="form.last_name" type="text" />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row type="flex">
            <el-col :span="24">
              <el-form-item
                label="Telephone Number"
                prop="telephone_number"
                :rules="validations.inputField"
              >
                <el-input v-model="form.telephone_number" type="text" />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row type="flex">
            <el-col :span="24">
              <el-form-item
                label="Rx Description"
                prop="rx_description"
                :rules="validations.inputField"
              >
                <el-input
                  v-model="form.rx_description"
                  type="textarea"
                  rows="7"
                />
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <div class="vm-button__container">
          <el-button
            class="el-button--secondary"
            round
            :loading="submitting"
            @click="submit"
            >Submit</el-button
          >
        </div>
      </div>
    </el-container>
  </div>
</template>

<script>
import validations from '@/mixin/validations'
import request from '@/controller/request'

export default {
  name: 'RequestRefill',
  data() {
    return {
      title: 'Prescription Refill Request',
      image: 'request-refill.jpg',
      imageFolder: 'prescriptions',
      form: {
        first_name: '',
        last_name: '',
        telephone_number: '',
        rx_description: '',
      },
      submitting: false,
      validations,
    }
  },
  methods: {
    submit() {
      this.$refs.form.validate((valid) => {
        if (!valid) {
          return false
        }
        this.submitting = true
        request
          .prescription_refill(this.form)
          .then((response) => {
            if (response.status === 200) {
              this.$message({
                type: 'success',
                message: 'Your request has been recorded successfully.',
                duration: 4000,
              })
              this.$refs.form.resetFields()
            }
            this.submitting = false
          })
          .catch(() => {
            this.submitting = false
            this.$message.error('An error occurred, please again')
          })
        return true
      })
    },
  },
}
</script>

<style lang="scss" scoped></style>
