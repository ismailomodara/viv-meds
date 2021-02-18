<template>
  <div>
    <Header />
    <el-container class="vm-section">
      <el-row type="flex" class="vm-home-actions">
        <el-col v-for="(cta, i) in ctas" :key="i" :xs="12" :sm="6" :md="6">
          <div class="vm-home-action">
            <div class="vm-home-action__icon">
              <img :src="getImage(`${cta.icon}.svg`, 'home')" :alt="cta.icon" />
            </div>
            <p>{{ cta.title }}</p>
          </div>
        </el-col>
      </el-row>
    </el-container>
    <el-container class="vm-section">
      <div class="vm-section__heading">
        <h2>Our Services</h2>
      </div>
      <el-row type="flex" :gutter="30" class="flex-wrap">
        <el-col v-for="(service, i) in services" :key="i" :md="12" :lg="8">
          <ServiceCard
            image-folder="services"
            :image="service.image"
            :title="service.title"
            :link="service.link"
          />
        </el-col>
      </el-row>
    </el-container>
    <Testimonials />
    <Newsletter />
    <GetDirections />
    <ContactUs />
  </div>
</template>

<script>
import image from '@/mixin/image'

import Header from '@/components/Home/Header'
import ServiceCard from '@/components/Home/ServiceCard'
import Testimonials from '@/components/General/Testimonials'
import Newsletter from '@/components/General/Newsletter'
import GetDirections from '@/components/Home/GetDirections'
import ContactUs from '@/components/General/ContactUs'

export default {
  name: 'Home',
  components: {
    Header,
    ServiceCard,
    Testimonials,
    Newsletter,
    GetDirections,
    ContactUs,
  },
  mixins: [image],
  data() {
    return {
      ctas: [
        {
          icon: 'transfer',
          title: 'Transfer your Prescriptions',
        },
        {
          icon: 'refill',
          title: 'Refill Prescriptions',
        },
        {
          icon: 'auto-refill',
          title: 'Automatic Refill Request',
        },
        {
          icon: 'schedule',
          title: 'Schedule a Wellness Consultation',
        },
      ],
      services: [
        {
          image: 'compounding.jpg',
          title: 'Compounding Services',
          link: 'compounding-services',
        },
        {
          image: 'point-of-care.jpg',
          title: 'Point-of-Care Testing Services',
          link: 'point-of-care',
        },
        {
          image: 'diabetes.jpg',
          title: 'Diabetes Management',
          link: 'diabetes-management',
        },
        {
          image: 'medication-therapy.jpg',
          title: 'Medication Therapy Management',
          link: 'medication-therapy-management',
        },
        {
          image: 'immunization.jpg',
          title: 'Immunizations',
          link: 'immunization',
        },
        {
          image: 'integrative-medicine.jpg',
          title: 'Integrative Medicine',
          link: 'integrative-medicine',
        },
        {
          image: 'animal-care.jpg',
          title: 'Veterinary Compounding',
          link: 'animal-care',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.vm-home-actions {
  flex-wrap: wrap;
  width: 100%;

  .vm-home-action {
    text-align: center;

    &__icon {
      height: 200px;
      width: 200px;
      background: #6a8b2c;
      border-radius: 1000px;
      margin: 0 auto 25px;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        height: 60px;
        width: auto;
      }
    }

    p {
      color: #6a8b2c;
      font-size: 1rem;
      font-weight: 600;
    }
  }
}

@media (max-width: 992px) {
  .vm-home-action {
    &__icon {
      height: 120px !important;
      width: 120px !important;
      margin-bottom: 10px !important;

      img {
        height: 45px !important;
      }
    }
  }
}

@media (max-width: 400px) {
  .vm-home-action {
    margin-bottom: 20px;
  }
}
</style>
