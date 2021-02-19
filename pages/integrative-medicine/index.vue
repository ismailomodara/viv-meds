<template>
  <div>
    <PageHeader :title="title" :image="image" :image-folder="imageFolder" />
    <el-container class="vm-section pb-0">
      <div class="vm-section_content">
        <h4>Our Integrative approach to wellness</h4>
        <p>
          We combine both functional and integrative approaches to help you get
          to the root cause of disease to optimize wellness in your life.
          <br />
          Our integrative approach to care at Vivmeds Pharmacy starts with
          advanced prevention. We want to help you stay healthy, and not fall
          sick to start with. We also want to uncover any weak links that you
          might have, so that we can strengthen these weaknesses and prevent
          problems down the road.
          <br />
          We have worked extensively to broaden our toolbox of integrative
          protocols. In addition to staying dedicated to providing diverse
          conventional medicine services, we work with our patients in providing
          holistic strategies through nutrition, herbs, hormones, mind-body
          treatment, detoxification and many other therapies.
          <br />
          We are devoted to “optimization.” While some patients don’t have a
          disease to treat. They just don’t feel like they are at their best. We
          seek all the foundations of wellness and our goal is to empower each
          patient to attain the best he or she in wellness.
        </p>
        <p>
          Upon completing an initial assessment form from Vivmeds Pharmacy
          wellness expert , we'll discuss your comprehensive history so that we
          can understand your lifestyle, what you eat, and what you do on a
          daily basis. This information combined with an understanding of how
          you grew up, any history of family illness, and test results will
          enable us to see the full picture of your health.
        </p>
        <p>
          We will then ask you where you would like to achieve with your health.
        </p>
        <p>
          From this information, we will create a plan of action that will
          include everything from diet changes to meditation, from supplements
          to changes in activity and massage therapy, and we will get you on
          your path to optimum health.
        </p>
      </div>
    </el-container>
    <ScheduleConsultation button-text="Schedule Appointment">
      <template>
        Are you ready to take control of your health? Now is the time for
        your<br />
        health. Call today to schedule your appointment.
      </template>
    </ScheduleConsultation>
    <el-container class="vm-section">
      <div class="vm-section_content">
        <h4>We focus on the following areas:</h4>
        <ul>
          <li>Anti-aging support</li>
          <li>Hormone optimization</li>
          <li>Hormone Pellets</li>
          <li>
            Gut Health- colitis, Crohn’s, IBS, SIBO, diarrhea, bloating, etc.
          </li>
          <li>Treatment of yeast overgrowth</li>
          <li>Treatment of fatigue and fibromyalgia</li>
          <li>Thyroid Optimization</li>
          <li>Detoxification: Heavy Metals, Mold, Organics</li>
          <li>Sinusitis protocol</li>
          <li>Health Optimization</li>
          <li>Advanced Prevention</li>
          <li>
            Sexual Health (low desire, difficult orgasm, pain with intercourse)
          </li>
          <li>Osteoporosis management</li>
          <li>Advanced Lab Testing</li>
          <li>Weight management</li>
          <li>Advanced Nutrition- Registered Dietitian on staff</li>
          <li>Cardio wellness program</li>
          <li>Brain Health Support- memory, Alzheimer’s prevention</li>
          <li>Wellness</li>
          <li>Holistic and Integrative Approach</li>
        </ul>
      </div>
      <div class="vm-section_content">
        <p>
          At Vivmeds, we empower our customers to think outside the box when it
          comes to the way they manage their own health and the products they
          use. Apart from our regular over the counter and prescription
          medicines, our Pharmacy carries a number of practitioner grade
          vitamins and natural supplements. Our healthcare experts are available
          to recommend and help you choose from our large selections of
          nutraceutical brands.
        </p>
      </div>
      <div class="vm-section_content">
        <h4>Quite effective</h4>
        <p>
          The Vitamins and Natural Supplements brands we carry depend on both
          leading-edge research and centuries of prehistoric wisdom in their
          formulations. If you’re seeking a new way to relieve stress, get
          better sleep, quit smoking, reduce wrinkles or ease digestion etc. Get
          comfortable in the fact that Vivmeds has taken the guesswork out of
          finding health and beauty products that work the way they say they do.
          Our holistic approach offers a variety of tools for healthy living,
          including the highest-quality vitamins, hard-to-find herbal and
          homeopathic formulas, plus organic and natural products.
        </p>
      </div>
      <div class="vm-section_content">
        <h4>Truly natural</h4>
        <p>
          The vitamins and supplements we offer use nature’s most powerful
          ingredients to nourish your body, inside and out. We carefully monitor
          the products we carry to ensure they contain only the ingredients you
          want, and nothing you don’t—like parabens, phthalates, PEGs, sulfates,
          petroleum, sulfite etc. We strongly believe that it has no place on or
          in our bodies if it hasn’t been absolutely proven safe.
        </p>
      </div>
      <div class="vm-section_content">
        <h4>Sustainably made products</h4>
        <p>
          The natural products, vitamins and supplements we carry are made by
          manufacturers that believe as we do—that we are accountable for taking
          good care of the earth even as we take good care of ourselves.
        </p>
      </div>
    </el-container>
  </div>
</template>

<script>
import PageHeader from '@/components/Website/PageHeader'
import ScheduleConsultation from '@/components/Website/ScheduleConsultation'

export default {
  name: 'IntegrativeMedicine',
  components: {
    PageHeader,
    ScheduleConsultation,
  },
  data() {
    return {
      title: 'Integrative Medicine',
      image: 'integrative-medicine.jpg',
      imageFolder: 'services',
    }
  },
}
</script>

<style lang="scss"></style>
