<template>
  <div class="vm-footer">
    <el-container>
      <el-row type="flex" class="flex-wrap" :gutter="40">
        <el-col :md="5" :lg="5">
          <div class="vm-footer__logo">
            <img :src="getImage('vivmeds-logo.svg')" alt="VivMeds" />
          </div>
        </el-col>
        <el-col :md="6" :lg="6">
          <div class="vm-footer__section">
            <h5>Services</h5>
            <nuxt-link to="/compounding-services"
              >Compounding Services</nuxt-link
            >
            <nuxt-link to="/point-of-care"
              >Point-Of-Care Testing Services</nuxt-link
            >
            <nuxt-link to="/diabetes-management">Diabetes Management</nuxt-link>
            <nuxt-link to="/medication-therapy-management"
              >Medication Therapy Management</nuxt-link
            >
            <nuxt-link to="/">Immunizations</nuxt-link>
            <nuxt-link to="/">Integrative Medicine</nuxt-link>
          </div>
        </el-col>
        <el-col :md="7" :lg="7">
          <div class="vm-footer__section">
            <h5>Compounding Services</h5>
            <nuxt-link to="/"
              >Compounding Medications for Podiatry Conerns</nuxt-link
            >
            <nuxt-link to="/"
              >Compounding Medications for Women’s Health</nuxt-link
            >
            <nuxt-link to="/">Dentistry</nuxt-link>
            <nuxt-link to="/">Dermatology</nuxt-link>
            <nuxt-link to="/">Hospice & Palliative Medicine</nuxt-link>
            <nuxt-link to="/">Men’s Healthcare & Wellness</nuxt-link>
            <nuxt-link to="/">Pain Management</nuxt-link>
            <nuxt-link to="/">Pediatrics</nuxt-link>
            <nuxt-link to="/">Wound & Scar Therapy</nuxt-link>
          </div>
        </el-col>
        <el-col :md="6" :lg="6">
          <div class="vm-footer__section">
            <h5>Animal Care</h5>
            <nuxt-link to="/">Canine Product Guide</nuxt-link>
            <nuxt-link to="/">Equine Product Guide</nuxt-link>
            <nuxt-link to="/">Feline Product Guide</nuxt-link>
            <nuxt-link to="/">Vet Compounds</nuxt-link>
          </div>
        </el-col>
      </el-row>
      <el-row type="flex" class="flex-wrap" :gutter="40">
        <el-col :md="7" :lg="5">
          <div class="vm-footer__section">
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
        </el-col>
        <el-col :md="9" :lg="11">
          <div class="vm-footer__section">
            <h5>Contact Us</h5>
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
        </el-col>
        <el-col :md="8" :lg="8">
          <div class="vm-footer__section">
            <h5>Follow Us</h5>
            <p>
              <span class="label">Instagram</span>
              <span>@vivmedspharmacy</span>
            </p>
            <p>
              <span class="label">Facebook</span>
              <span>@vivmedspharmacy</span>
            </p>
            <p>
              <span class="label">Twitter</span>
              <span>@vivmedspharmacy</span>
            </p>
          </div>
        </el-col>
      </el-row>
      <el-row type="flex">
        <el-col :span="24">
          <div class="vm-footer__copyright">
            <p>Copyright {{ new Date().getFullYear() }} Vivmeds Pharmacy</p>
          </div>
        </el-col>
      </el-row>
    </el-container>
  </div>
</template>

<script>
import image from '@/mixin/image'

export default {
  name: 'Footer',
  mixins: [image],
  data() {
    return {}
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
.vm-footer {
  background: #f0ffd4;
  padding: 80px 0 40px;
  width: 100%;

  .el-container {
    flex-direction: column;
  }

  &__section {
    margin-bottom: 40px;

    h5 {
      margin-bottom: 20px;
    }

    a {
      color: #292222;
      display: inline-block;
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

  &__copyright {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 30px 0;

    p {
      font-size: 1rem;
    }
  }
}

@media (max-width: 600px) {
  .vm-footer {
    padding: 40px 0 20px !important;

    &__logo {
      text-align: center;
      margin-bottom: 30px;
    }
  }
}
</style>
