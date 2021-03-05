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
          <el-row type="flex" :gutter="40" class="flex-wrap">
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
          <el-row type="flex" :gutter="40" class="flex-wrap">
            <el-col :md="24" :lg="12">
              <el-form-item
                label="Email"
                prop="email"
                :rules="validations.emailField"
              >
                <el-input v-model="form.email" type="text" />
              </el-form-item>
            </el-col>
            <el-col :md="12" :lg="12">
              <el-form-item
                label="Date of Birth"
                prop="dob"
                :rules="validations.inputField"
              >
                <el-date-picker v-model="form.dob" type="date" />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row type="flex">
            <el-col :span="24">
              <el-form-item
                label="Teletelephone_number Number"
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
                label="Prescription Name:"
                prop="prescription_name"
                :rules="validations.inputField"
              >
                <el-input v-model="form.prescription_name" type="text" />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row type="flex">
            <el-col :span="24">
              <el-form-item
                label="Prescription Number:"
                prop="prescription_number"
                :rules="validations.inputField"
              >
                <el-input v-model="form.prescription_number" type="text" />
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
  name: 'AutomaticRefillRequest',
  data() {
    return {
      title: 'Automatic Refill Request',
      image: 'auto-refill.jpg',
      imageFolder: 'prescriptions',
      form: {
        first_name: '',
        last_name: '',
        email: '',
        dob: '',
        telephone_number: '',
        prescription_name: '',
        prescription_number: '',
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
