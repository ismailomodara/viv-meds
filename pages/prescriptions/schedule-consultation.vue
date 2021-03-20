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
            <el-col :md="24" :lg="10">
              <el-form-item
                label="Email"
                prop="email"
                :rules="validations.emailField"
              >
                <el-input v-model="form.email" type="text" />
              </el-form-item>
            </el-col>
            <el-col :md="24" :lg="14">
              <el-row type="flex" :gutter="30" class="flex-wrap">
                <el-col :md="12" :lg="12">
                  <el-form-item
                    label="Date of Birth"
                    prop="dob"
                    :rules="validations.inputField"
                  >
                    <el-date-picker v-model="form.dob" type="date" />
                  </el-form-item>
                </el-col>
                <el-col :md="12" :lg="12">
                  <el-form-item
                    label="Gender"
                    prop="gender"
                    :rules="validations.inputField"
                  >
                    <el-radio-group v-model="form.gender">
                      <el-radio-button label="male">Male</el-radio-button>
                      <el-radio-button label="female">Female</el-radio-button>
                      <el-radio-button label="others">Others</el-radio-button>
                    </el-radio-group>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
          <el-row type="flex" :gutter="40" class="flex-wrap">
            <el-col :span="24">
              <el-form-item
                label="Address"
                prop="address"
                :rules="validations.inputField"
              >
                <el-input v-model="form.address" type="text" />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row type="flex" :gutter="40" class="flex-wrap">
            <el-col :md="12">
              <el-form-item
                label="City"
                prop="city"
                :rules="validations.inputField"
              >
                <el-input v-model="form.city" type="text" />
              </el-form-item>
            </el-col>
            <el-col :md="12">
              <el-form-item
                label="State"
                prop="state"
                :rules="validations.inputField"
              >
                <el-input v-model="form.state" type="text" />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row type="flex" :gutter="40" class="flex-wrap">
            <el-col :md="12">
              <el-form-item
                label="Zip Code"
                prop="zip_code"
                :rules="validations.inputField"
              >
                <el-input v-model="form.zip_code" type="text" />
              </el-form-item>
            </el-col>
            <el-col :md="12">
              <el-form-item
                label="Telephone Number"
                prop="telephone_number"
                :rules="validations.inputField"
              >
                <el-input
                  v-model="form.telephone_number"
                  type="text"
                  oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row type="flex" :gutter="40" class="flex-wrap">
            <el-col :md="12">
              <el-form-item
                label="Best Way to reach you"
                prop="best_way_to_reach_you"
                :rules="validations.inputField"
              >
                <el-input v-model="form.best_way_to_reach_you" type="text" />
              </el-form-item>
            </el-col>
            <el-col :md="12">
              <el-form-item
                label=" Best Time to be Contacted:"
                prop="best_time_to_be_contacted"
                :rules="validations.inputField"
              >
                <el-time-select
                  v-model="form.best_time_to_be_contacted"
                  :picker-options="{
                    start: '07:00',
                    step: '00:30',
                    end: '22:00',
                  }"
                  placeholder="Select time"
                >
                </el-time-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row type="flex">
            <el-col :span="24">
              <el-form-item
                label="Reason for Consultation:"
                prop="reason_for_consultation"
                :rules="validations.inputField"
              >
                <el-input
                  v-model="form.reason_for_consultation"
                  type="textarea"
                  rows="6"
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
  name: 'TransferPrescriptions',
  data() {
    return {
      title: 'Schedule a Wellness Consultation',
      image: 'schedule-consultation.jpg',
      imageFolder: 'prescriptions',
      form: {
        first_name: '',
        last_name: '',
        email: '',
        dob: '',
        gender: '',
        address: '',
        city: '',
        state: '',
        zip_code: '',
        telephone_number: '',
        best_way_to_reach_you: '',
        best_time_to_be_contacted: '',
        reason_for_consultation: '',
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
          .schedule_wellness_consultation(this.form)
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
