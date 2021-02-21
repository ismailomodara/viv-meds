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
                prop="firstName"
                :rules="validations.inputField"
              >
                <el-input v-model="form.firstName" type="text" />
              </el-form-item>
            </el-col>
            <el-col :md="12">
              <el-form-item
                label="Last Name"
                prop="lastName"
                :rules="validations.inputField"
              >
                <el-input v-model="form.lastName" type="text" />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row type="flex">
            <el-col :span="24">
              <el-form-item
                label="Telephone Number"
                prop="phoneNumber"
                :rules="validations.inputField"
              >
                <el-input v-model="form.phoneNumber" type="text" />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row type="flex">
            <el-col :span="24">
              <el-form-item
                label="RX Description"
                prop="description"
                :rules="validations.inputField"
              >
                <el-input v-model="form.description" type="textarea" rows="7" />
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

export default {
  name: 'RequestRefill',
  data() {
    return {
      title: 'Prescription Refill Request',
      image: 'request-refill.jpg',
      imageFolder: 'prescriptions',
      form: {
        firstName: '',
        lastName: '',
        phoneNumber: '',
        description: '',
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
        setTimeout(() => {
          this.submitting = false
        }, 2000)
        return true
      })
    },
  },
}
</script>

<style lang="scss" scoped></style>
