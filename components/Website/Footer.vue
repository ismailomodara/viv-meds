<template>
  <div class="vm-footer">
    <el-container>
      <el-row type="flex" class="flex-wrap">
        <el-col :md="5" :lg="5">
          <div class="vm-footer__logo">
            <img :src="getLogo('regular')" alt="VivMeds" loading="lazy" />
          </div>
        </el-col>
        <el-col :md="6" :lg="6">
          <div class="vm-footer__section">
            <h5>Services</h5>
            <nuxt-link
              v-for="(service, i) in services"
              :key="i"
              :to="`/${service.link}`"
              >{{ service.title }}</nuxt-link
            >
          </div>
        </el-col>
        <el-col :md="7" :lg="7">
          <div class="vm-footer__section">
            <h5>Compounding Services</h5>
            <nuxt-link
              v-for="(service, i) in compoundingServices"
              :key="i"
              :to="`/compounding-services/${service.link}`"
              >{{ service.title }}</nuxt-link
            >
          </div>
        </el-col>
        <el-col :md="6" :lg="6">
          <div class="vm-footer__section">
            <h5>Animal Care</h5>
            <nuxt-link
              v-for="(service, i) in animalCare"
              :key="i"
              :to="`/compounding-services/animal-care/${service.link}`"
              >{{ service.title }}</nuxt-link
            >
          </div>
        </el-col>
      </el-row>
      <el-row type="flex" class="flex-wrap">
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
              <span>Closed</span>
            </p>
          </div>
        </el-col>
        <el-col :md="9" :lg="11">
          <div class="vm-footer__section">
            <h5>Contact Us</h5>
            <p>
              <span class="label">Phone</span>
              <a href="tel:940-226-4849" class="mb-0">940-226-4849</a>
            </p>
            <p>
              <span class="label">Email</span>
              <a href="mailto:pharmacy@vivmeds.com" class="mb-0"
                >pharmacy@vivmeds.com</a
              >
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
              <a
                href="https://www.instagram.com/vivmedspharmacy/"
                class="mb-0"
                target="_blank"
                >@vivmedspharmacy</a
              >
            </p>
            <p>
              <span class="label">Facebook</span>
              <a
                href="https://web.facebook.com/vivmedspharmacy"
                class="mb-0"
                target="_blank"
                >@vivmedspharmacy</a
              >
            </p>
            <p>
              <span class="label">Twitter</span>
              <a
                href="https://twitter.com/VivmedsPharmacy"
                class="mb-0"
                target="_blank"
                >@VivmedsPharmacy</a
              >
            </p>
          </div>
        </el-col>
      </el-row>
      <el-row type="flex">
        <el-col :lg="24">
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
import config from '@/mixin/services-config'

export default {
  name: 'Footer',
  mixins: [image],
  data() {
    return {
      services: config.services,
      compoundingServices: config.compoundingServices,
      animalCare: config.animalCare,
    }
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
    padding: 40px 10px 20px !important;

    &__logo {
      text-align: center;
      margin-bottom: 30px;
    }
  }
}
</style>
