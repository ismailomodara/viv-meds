<template>
  <div>
    <PageHeader :title="title" :image="image" :image-folder="imageFolder" />
    <el-container class="vm-section pb-0">
      <div class="vm-section_content">
        <h4>
          Fitness, Nutrition, Health, Sex, Erectile Dysfunctions & Weight Loss
        </h4>
        <p>
          At Vivmeds Pharmacy, our integrative approach to wellness starts with
          prevention. Our compounding pharmacists help improve your health by
          offering personalized medications for your exclusive medical
          conditions and health history, in addition to providing supplements
          and vitamins to support your body’s optimal health.
        </p>
      </div>

      <div class="vm-section_content">
        <h4>Compounding Medications for Hormone Replacement in Men</h4>
        <p>
          Decline in hormone levels also occurs in men. <br />
          Men experience a similar decline in hormone levels that women
          experience when they go through menopause. Andropause or late-onset
          hypogonadism is a common complaint which increases in occurrence with
          advancing age. Diagnosis of late-onset of hypogonadism is based on
          presence of symptoms suggestive of testosterone deficiency - prominent
          among them are sexual symptoms like loss of libido, morning penile
          erection and erectile dysfunction; and demonstration of low
          testosterone levels.
        </p>
        <p>
          Testosterone levels in men typically drop about one percent per year.
          These reduced levels of testosterone play a critical role in the
          quality and quantity of life in males. The reduced testosterone levels
          have been reported to be a risk factor for heart disease, high blood
          pressure, high cholesterol levels, osteoporosis, and diabetes.
        </p>
        <p>
          Hormone replacement (HRT) in men restores the body’s natural
          testosterone level back to “normal,” keeping in mind that normal is a
          range and the patient’s symptoms need to be taken care of. There are
          different forms of testosterone, but the other forms have harmful side
          effects and don’t have all of the benefits of replacing exactly what
          the body has always produced. Using the exact same molecule as the
          body produces is called bio-identical hormone replacement therapy
          (BHRT). Vivmeds Pharmacists compound several dosage forms of
          testosterone. Testosterone can be compounded into transdermal creams,
          sublingual tablets, and pellets.
        </p>

        <p>
          At Vivmeds Pharmacy, our Hormone Replace Therapy mission in men is to
          provide education and information on men’s health issues, regarding
          testosterone supplementation and prostate health.
        </p>

        <p>
          Our pharmacists provide a wide range of treatments for men’s health
          including medications for erectile dysfunction, hormone replacement
          therapy, and more. We are able to provide effective, proven
          medications in dosages and formulations that cannot be found anywhere
          else. Our team is dedicated to helping men achieve optimal health
          through the use of compounded medications.
        </p>

        <p>
          We save you time by being a resource to address questions regarding
          hormone replacement.<br />
          Discuss and recommend specific courses of therapy to your physician,
          based on your individual needs.<br />
          Address questions regarding side effects and ongoing therapy.<br />
          Assist your physician with therapy by adjusting on an ongoing basis to
          assure optimal results.
        </p>
      </div>

      <div class="vm-section_content">
        <p class="text-primary">
          Call us at Vivmeds Pharmacy for more information at 940-226-4849.
        </p>
      </div>
    </el-container>
    <ScheduleConsultation button-text="Contact">
      <template slot="default"
        >To learn more about our services <br />
        please contact us at <span>940-226-4849</span></template
      >
    </ScheduleConsultation>
  </div>
</template>

<script>
import PageHeader from '@/components/Website/PageHeader'
import ScheduleConsultation from '@/components/Website/ScheduleConsultation'

export default {
  name: 'MenHealth',
  components: {
    PageHeader,
    ScheduleConsultation,
  },
  data() {
    return {
      title: "Men's Health Care & Wellness",
      image: 'men-healthcare-and-wellness.jpg',
      imageFolder: 'compounding',
    }
  },
}
</script>

<style lang="scss"></style>
