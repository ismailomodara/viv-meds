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
            <el-col :md="24" :lg="12">
              <el-row type="flex" :gutter="30" class="flex-wrap">
                <el-col :md="12" :lg="12">
                  <el-form-item
                    label="Date of Birth"
                    prop="dateOfBirth"
                    :rules="validations.inputField"
                  >
                    <el-date-picker v-model="form.dateOfBirth" type="date" />
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
            <el-col :span="12">
              <el-form-item
                label="Address 1"
                prop="address1"
                :rules="validations.inputField"
              >
                <el-input v-model="form.address1" type="text" />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item
                label="Address 2"
                prop="address2"
                :rules="validations.inputField"
              >
                <el-input v-model="form.address2" type="text" />
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
                prop="zip"
                :rules="validations.inputField"
              >
                <el-input v-model="form.zip" type="text" />
              </el-form-item>
            </el-col>
            <el-col :md="12">
              <el-form-item
                label="Telephone Number"
                prop="phone"
                :rules="validations.inputField"
              >
                <el-input v-model="form.phone" type="text" />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row type="flex" :gutter="40" class="flex-wrap">
            <el-col :md="12">
              <el-form-item
                label="Best Way to reach you"
                prop="communicationMedium"
                :rules="validations.inputField"
              >
                <el-input v-model="form.communicationMedium" type="text" />
              </el-form-item>
            </el-col>
            <el-col :md="12">
              <el-form-item
                label=" Best Time to be Contacted:"
                prop="communicationTime"
                :rules="validations.inputField"
              >
                <el-input v-model="form.communicationTime" type="text" />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row type="flex">
            <el-col :span="24">
              <el-form-item
                label="Preferred Location:"
                prop="location"
                :rules="validations.inputField"
              >
                <el-input v-model="form.location" type="text" />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row type="flex">
            <el-col :span="24">
              <el-form-item
                label="Reason for Consultation:"
                prop="reason"
                :rules="validations.inputField"
              >
                <el-input v-model="form.reason" type="textarea" rows="6" />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row type="flex">
            <el-col :span="24">
              <el-form-item
                label="Additional Details:"
                prop="additionalInformation"
                :rules="validations.inputField"
              >
                <el-input
                  v-model="form.additionalInformation"
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

export default {
  name: 'TransferPrescriptions',
  data() {
    return {
      title: 'Schedule a Wellness Consultation',
      image: 'schedule-consultation.jpg',
      imageFolder: 'prescriptions',
      form: {
        firstName: '',
        lastName: '',
        email: '',
        dateOfBirth: '',
        gender: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        zip: '',
        phone: '',
        communicationMedium: '',
        communicationTime: '',
        location: '',
        reason: '',
        additionalInformation: '',
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
