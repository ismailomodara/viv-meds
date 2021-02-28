<template>
  <div>
    <PageHeader :title="title" :image="image" />
    <el-container class="is-flex-column">
      <div class="vm-section_content">
        <h5>Free COVID-19 Vaccine</h5>
        <p>Immunizations will be available at no costs to patients.</p>
      </div>
      <div class="vm-section_content">
        <h5>Signup for COVID-19 Vaccine Information</h5>
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
            <el-col :span="24">
              <el-form-item
                label="Home Address"
                prop="address"
                :rules="validations.inputField"
              >
                <el-input v-model="form.address" type="text" />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row type="flex" :gutter="40" class="flex-wrap">
            <el-col :span="24">
              <el-form-item
                label="Current Medications"
                prop="currentMedications"
                :rules="validations.inputField"
              >
                <el-input v-model="form.currentMedications" type="text" />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row type="flex" :gutter="40" class="flex-wrap">
            <el-col :md="12">
              <el-form-item
                label="Current Pharmacy"
                prop="currentPharmacy"
                :rules="validations.inputField"
              >
                <el-input v-model="form.currentPharmacy" type="text" />
              </el-form-item>
            </el-col>
            <el-col :md="12">
              <el-form-item
                label="Name of Insurance"
                prop="nameOfInsurance"
                :rules="validations.inputField"
              >
                <el-input v-model="form.nameOfInsurance" type="text" />
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
      <div class="vm-section_content">
        <h5>Steps We've Taken to Keep You Safe</h5>
        <p>
          At Vivmeds Pharmacy, we are dedicated to protecting you and your
          health. Our pharmacy is also taking additional steps to keep you safe:
        </p>
        <ul>
          <li>
            Screening for COVID-19 symptoms prior to providing immunizations
          </li>
          <li>
            Online Consent & Release Form to streamline vaccine processing and
            reduce the number of patients in the waiting area
          </li>
          <li>
            Personal protective equipment (PPE), including face shields, for all
            Vivmeds pharmacy associates.
          </li>
          <li>
            Hand hygiene practiced before and after immunizations, including
            changing gloves between patients
          </li>
          <li>
            Monitoring COVID transmission and prevalence in the local area to
            adapt PPE requirements if necessary
          </li>
          <li>Keeping social distancing before and after the immunization</li>
        </ul>
      </div>
      <div class="vm-section_content">
        <Faq />
      </div>
      <div class="vm-section_content">
        <h5>Transfer Your Prescription to Our Pharmacy</h5>
        <p>
          Your health is our top priority. That's why we prudently evaluate your
          medication history when filling your prescriptions. We are always here
          to answer any questions you may have to provide clarity for an easy
          experience, as well as peace of mind. .
        </p>
        <p>We accept all major insurance plans.</p>
        <ul>
          <li>
            <span>Auto Refill:</span> Enroll at the pharmacy and we'll notify
            you when your prescriptions are ready for pickup.
          </li>

          <li>
            <span>Vaccination Station:</span> Walk-ins welcome for immunizations
            for flu, shingles, tetanus, and more
          </li>

          <li>
            <span>Integrative Medicine and Holistic wellness:</span> Our
            integrative approach to care at Vivmeds Pharmacy begins with
            advanced prevention. We want to help you stay healthy, and not fall
            sick to begin with. We also want to expose any weak links that you
            might have, so that we can support these weaknesses and prevent
            problems down the road.
          </li>

          <li>
            <span>Non-Sterile Compounding:</span> At Vivmeds Pharmacy, we
            provide specialty pharmaceutical solutions that typical pharmacies
            cannot always provide. Our goal is to give you the highest level of
            quality, customized medications and customer service at peerless
            prices. Our compounding pharmacy works with patients and physicians
            to provide a custom solution for their pharmaceutical needs that go
            beyond what standard pharmacies normally provide.
          </li>

          <li>
            <span>Free Delivery Service:</span> We help our patients save time
            running to the pharmacy and focus on work, hobbies, and other tasks.
            We conveniently bring to your front door, office, or a more
            convenient location.
          </li>
        </ul>
      </div>
    </el-container>
  </div>
</template>

<script>
import validations from '@/mixin/validations'
import Faq from '@/components/Faq'

export default {
  name: 'Covid19',
  components: {
    Faq,
  },
  data() {
    return {
      title: 'Covid-19',
      image: 'covid-19.jpg',
      form: {
        firstName: '',
        lastName: '',
        email: '',
        dateOfBirth: '',
        gender: '',
        address: '',
        currentMedications: '',
        currentPharmacy: '',
        nameOfInsurance: '',
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