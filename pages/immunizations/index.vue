<template>
  <div>
    <PageHeader :title="title" :image="image" :image-folder="imageFolder" />
    <el-container class="vm-section pb-0">
      <div class="vm-section_content text-center">
        <h4>Vaccines for you and your family</h4>
        <p>
          We have the CDC-recommended vaccines you need, administered by an
          immunization-trained pharmacist.
        </p>
      </div>
    </el-container>
    <ScheduleConsultation button-text="Schedule Vaccination">
      <template slot="default">
        <span>Schedule a Free Consultation</span> with the Pharmacist or
        <br />Call us at <span>940-226-4849</span>
      </template>
    </ScheduleConsultation>
    <el-container class="vm-section pb-0">
      <div class="vm-section_content">
        <h4>We offer the following vaccines:</h4>
        <ul>
          <li>Cholera vaccine</li>
          <li>Diphtheria, tetanus, pertussis vaccine</li>
          <li>Hepatitis A vaccine</li>
          <li>Hepatitis B vaccine</li>
          <li>Human papillomavirus (HPV) vaccine</li>
          <li>Influenza (flu) vaccine</li>
          <li>Japanese encephalitis vaccine</li>
          <li>Measles, mumps, rubella (MMR) vaccine</li>
          <li>Meningococcal (meningitis) vaccine</li>
          <li>Pneumococcal (pneumonia) vaccine</li>
          <li>Polio vaccine</li>
          <li>Rabies vaccine</li>
          <li>Typhoid vaccine</li>
          <li>Zoster (shingles) vaccine</li>
          <li>Varicella (chicken pox) vaccine</li>
        </ul>
      </div>
      <div class="vm-section_content text-center">
        <h3>Ready to get a vaccination?</h3>
        <p class="w-85">
          You’re never too old to get vaccines. In fact, sticking to an
          immunization schedule as you age gives you the best shot at long-term
          health. Many adults are at risk of vaccine-preventable illnesses, and
          sometimes the damage is done after an infection has set in. Hence,
          being able to prevent illness is better than trying to treat it once
          it's set in.
        </p>
      </div>
      <div class="vm-section_content">
        <div class="vm-vaccinations">
          <el-collapse v-model="activeVaccination" accordion>
            <el-collapse-item
              v-for="(vaccination, i) in vaccinations"
              :key="i"
              :title="vaccination.title"
              :name="i + 1"
            >
              <div>
                <component :is="vaccination.component"></component>
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
      </div>
    </el-container>
  </div>
</template>

<script>
import PageHeader from '@/components/Website/PageHeader'
import ScheduleConsultation from '@/components/Website/ScheduleConsultation'

import Influenza from '@/components/Immunizations/Influenza'
import Tetanus from '@/components/Immunizations/Tetanus'
import Hepatitis from '@/components/Immunizations/Hepatitis'
import ChickenPox from '@/components/Immunizations/ChickenPox'
import HumanPapilloma from '@/components/Immunizations/HumanPapilloma'
import Pneumococcal from '@/components/Immunizations/Pneumococcal'
import Measles from '@/components/Immunizations/Measles'
import Hingles from '@/components/Immunizations/Hingles'
import getSiteMeta from '@/utils/getSiteMeta'

export default {
  name: 'Immunizations',
  components: {
    PageHeader,
    ScheduleConsultation,
    Influenza,
    Tetanus,
    Hepatitis,
    ChickenPox,
    HumanPapilloma,
    Pneumococcal,
    Measles,
    Hingles,
  },
  data() {
    return {
      title: 'Immunizations',
      image: 'immunizations.jpg',
      imageFolder: 'services',
      activeVaccination: '',
      vaccinations: [
        {
          title: 'Influenza (flu) Vaccine',
          component: 'influenza',
        },
        {
          title: 'Tetanus, Diphtheria, Pertussis (Tdap) Vaccine',
          component: 'tetanus',
        },
        {
          title: 'Hepatitis Vaccine',
          component: 'hepatitis',
        },
        {
          title: 'Chicken Pox Vaccine',
          component: 'chicken-pox',
        },
        {
          title: 'Human Papilloma Virus (HPV)',
          component: 'human-papilloma',
        },
        {
          title: 'Pneumococcal Vaccine',
          component: 'pneumococcal',
        },
        {
          title: 'Measles, Mumps, and Rubella Vaccine',
          component: 'measles',
        },
        {
          title: 'Hingles (Herpes zoster virus)',
          component: 'hingles',
        },
      ],
    }
  },
  head() {
    return {
      title: 'Vaccination | Flu Shot | Covid-19 | Vivmeds Pharmacy',
      meta: [...this.meta],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `https://vivmeds.com/immunizations`,
        },
      ],
    }
  },
  computed: {
    meta() {
      const metaData = [
        {
          title: 'Vaccination | Flu Shot | Covid-19| Vivmeds Pharmacy',
          description:
            'Get COVID-19 Vaccination, Flu shots and travel vaccination at Vivmeds Pharmacy, 3303 Unicorn Lake Blvd Suite 280 DentonTX762',
          url: `https://vivmeds.com/immunizations`,
        },
        {
          name: 'keywords',
          content:
            'vaccination, travel vaccination in Denton, immunization, yellow fever vaccine',
        },
      ]
      return getSiteMeta(metaData)
    },
  },
}
</script>

<style lang="scss">
.vm-vaccinations {
  width: 80%;
  margin: 0 auto;
}

@media (max-width: 1024px) {
  .vm-vaccinations {
    width: 100%;
  }
}
</style>
