<template>
  <div>
    <PageHeader :title="title" :image="image" :image-folder="imageFolder" />
    <el-container class="vm-section pb-0">
      <div class="vm-section_content">
        <p>
          At Vivmeds Pharmacy, our top-notch compounding pharmacy lab
          specializes in tailored compounded medications designed with
          FDA-approved ingredients. We manage issues such as diet and allergy
          restrictions in offering medications that are rare to find or no
          longer manufactured.
        </p>
      </div>
      <div class="vm-section_content">
        <h3>
          Deep Pharmaceutical Expertise In Delivering Quality Formulations
        </h3>
        <p>
          Compounded prescriptions may be an ideal solution in situations where
          patients want more than just the traditional pharmaceutical product.
          Compounding is relied upon by physicians in situations where it is
          necessary to administer tailored and unique formulations to a patient.
        </p>
        <p>
          Because compounded prescriptions are customized to the individual
          requirements of the patient, it is possible to provide solutions that
          commercial pharmaceuticals are not able to address.
        </p>
      </div>
      <div class="vm-section_content">
        <p>
          Vivmeds follows the U.S. Pharmacopeial Convention 800 (USP 800)
          guidelines for compounding in addition to being compliant with the
          Texas Board of Pharmacy. We work in close collaboration with DFW
          leading physicians to offer formulations specific to the needs of
          their patients.
        </p>
      </div>
    </el-container>
    <el-container class="vm-section">
      <div class="vm-section__heading">
        <h2 class="text-left text-regular">Our Compounding Services</h2>
      </div>
      <el-row type="flex" :gutter="30" class="flex-wrap">
        <el-col
          v-for="(service, i) in compoundingServices"
          :key="i"
          :sm="12"
          :md="12"
          :lg="8"
        >
          <ServiceCard
            image-folder="compounding"
            :image="service.image"
            :title="service.title"
            :link="service.link"
          />
        </el-col>
      </el-row>
    </el-container>
    <ScheduleConsultation>
      <template>
        To learn more about our Compounding Services <br />
        <span>Schedule a Free Consultation</span> with the Pharmacist or
        <br />Call us at <span>940-226-4849</span>
      </template>
    </ScheduleConsultation>
  </div>
</template>

<script>
import config from '@/mixin/services-config'

import PageHeader from '@/components/Website/PageHeader'
import ServiceCard from '@/components/Home/ServiceCard'
import ScheduleConsultation from '@/components/Website/ScheduleConsultation'

export default {
  name: 'CompoundingServices',
  components: {
    PageHeader,
    ServiceCard,
    ScheduleConsultation,
  },
  data() {
    return {
      title: 'Compounding Services',
      image: 'compounding.jpg',
      imageFolder: 'services',
      compoundingServices: config.compoundingServices,
    }
  },
}
</script>

<style lang="scss"></style>
