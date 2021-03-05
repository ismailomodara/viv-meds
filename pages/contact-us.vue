<template>
  <div>
    <PageHeader title="Contact Us" />
    <GetDirections :show-title="false" :height="600" class="p-0" />
    <el-container class="vm-section">
      <div class="vm-contact">
        <div class="vm-contact__bg"></div>
        <div class="vm-contact__content">
          <h4>Contact Us</h4>
          <div class="vm-contact__content-section">
            <p>
              <span class="label">Phone</span>
              <span>940-226-4849</span>
            </p>
            <p>
              <span class="label">Email</span>
              <span>pharmacy@vivmeds.com</span>
            </p>
            <p>
              <span class="label">Address</span>
              <span>3303 Unicorn Lake Blvd Suite 280 Denton TX 76210</span>
            </p>
          </div>
          <div class="vm-contact__content-section">
            <h5>Pharmacy Hours</h5>
            <p>
              <span class="label">Mon - Fri</span>
              <span>9AM - 6PM</span>
            </p>
            <p>
              <span class="label">Saturday</span>
              <span>10AM - 2PM</span>
            </p>
            <p>
              <span class="label">Sunday</span>
              <span>10AM - 2PM</span>
            </p>
          </div>
        </div>
      </div>
    </el-container>
    <el-container class="is-flex-column">
      <div class="vm-section_content">
        <h4 class="text-center">How can we help you?</h4>
        <el-form ref="contactForm" :model="form" label-position="top">
          <el-row type="flex" :gutter="40" class="flex-wrap">
            <el-col :span="24">
              <el-form-item
                label="Full Name"
                prop="full_name"
                :rules="validations.inputField"
              >
                <el-input v-model="form.full_name" type="text" />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row type="flex" :gutter="40" class="flex-wrap">
            <el-col :span="24">
              <el-form-item
                label="Phone Number"
                prop="phone_number"
                :rules="validations.inputField"
              >
                <el-input
                  v-model="form.phone_number"
                  type="text"
                  oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row type="flex" :gutter="40" class="flex-wrap">
            <el-col :span="24">
              <el-form-item
                label="Email"
                prop="email"
                :rules="validations.emailField"
              >
                <el-input v-model="form.email" type="text" />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row type="flex" :gutter="40" class="flex-wrap">
            <el-col :span="24">
              <el-form-item
                label="Comments/ Concerns/Inquiry"
                prop="enquiry"
                :rules="validations.inputField"
              >
                <el-input v-model="form.enquiry" type="textarea" rows="5" />
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
  name: 'ContactUs',
  data() {
    return {
      title: 'Contact Us',
      form: {
        email: 'omodara145@gmail.com',
        full_name: 'Ismail Omodara',
        phone_number: '08179591037',
        enquiry: 'Testing',
      },
      validations,
      submitting: false,
    }
  },
  methods: {
    submit() {
      this.$refs.contactForm.validate((valid) => {
        if (!valid) {
          return false
        }
        this.submitting = true
        request
          .contact(this.form)
          .then((response) => {
            console.log(response)
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

<style lang="scss" scoped>
.vm-contact {
  width: 100%;
  position: relative;
  padding-bottom: 100px;

  &__bg {
    background: #e1ffa8;
    height: 400px;
    width: 90%;
    position: absolute;
  }

  &__content {
    position: relative;
    top: 100px;
    left: 100px;
    background: #fff;
    padding: 40px;
    width: calc(100% - 100px);
    box-shadow: 2px 7px 33px rgba(196, 196, 196, 0.5);

    h4 {
      color: #6a8b2c;
      margin-bottom: 30px;
    }

    &-section {
      margin: 0 40px 40px;

      h5 {
        margin-bottom: 20px;
      }

      a {
        color: #292222;
        display: block;
        margin-bottom: 15px;
      }

      p {
        font-size: 1rem;
        color: #292222;
        font-weight: 600;
        display: flex;
        align-items: center;

        &:not(:last-child) {
          margin-bottom: 15px;
        }

        .label {
          min-width: 120px;
          display: block;
        }
      }
    }
  }
}

@media (max-width: 600px) {
  .vm-contact {
    padding-bottom: 50px;

    &__bg {
      display: none;
    }

    &__content {
      top: 0;
      left: 0;
      width: 100%;
      padding: 20px;

      &-section {
        margin: 0 0 20px;

        p {
          flex-direction: column;
          align-items: flex-start;
        }
      }
    }
  }
}
</style>
