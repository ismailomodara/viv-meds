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
            <el-col :md="24" :lg="12">
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
                <el-input v-model="form.telephone_number" type="text" />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row type="flex">
            <el-col :span="24">
              <el-form-item
                label="Best Way to reach you"
                prop="best_way_to_reach_you"
                :rules="validations.inputField"
              >
                <el-input v-model="form.best_way_to_reach_you" type="text" />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row type="flex" :gutter="40" class="flex-wrap">
            <el-col :md="12">
              <el-form-item
                label="Previous Pharmacy Name:"
                prop="previous_pharmacy"
                :rules="validations.inputField"
              >
                <el-input v-model="form.previous_pharmacy" type="text" />
              </el-form-item>
            </el-col>
            <el-col :md="12">
              <el-form-item
                label="Previous Pharmacy Telephone Number:"
                prop="previous_pharmacy_mobile"
                :rules="validations.inputField"
              >
                <el-input v-model="form.previous_pharmacy_mobile" type="text" />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row type="flex">
            <el-col :span="24">
              <el-form-item
                label="Prescription Name and Strength:"
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
                prop="prescriptionNo"
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
  name: 'TransferPrescriptions',
  data() {
    return {
      title: "Patient's Information",
      image: 'transfer-prescriptions.jpg',
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
        previous_pharmacy: '',
        previous_pharmacy_mobile: '',
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
