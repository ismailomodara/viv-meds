<template>
  <div>
    <PageHeader :title="title" :image="image" :image-folder="imageFolder" />
    <el-container class="vm-section pb-0">
      <div class="vm-section_content">
        <p>Among the US population overall, crude estimates for 2018 were:</p>
      </div>
      <div class="vm-section_content"></div>
    </el-container>
    <el-container class="vm-section pb-0">
      <div class="vm-section_content">
        <p>
          Many individuals have type 2 diabetes but do not experience symptoms.
          Even individuals with diabetes don't often monitor their blood sugar
          levels regularly when they're feeling well. Even if you aren't having
          symptoms, diabetes can damage blood vessels and organs in your body.
          By taking steps to monitor and manage your diabetes, you can reduce
          your risk for diabetes complications.
        </p>
        <p class="mb-2">
          As a community Pharmacy, we have expanded diabetes care services to
          improve the health of the community by providing ancillary services
          such as diabetes self-management education/training (DSME/T) programs
        </p>

        <h4>
          Vivmeds Pharmacy patient educator role can play out in five initial
          areas
        </h4>
        <p>
          Sometimes in practice—patients with diabetes can walk out of
          pharmacies with the right medications and OTC diabetes products and
          not improve their health status. What’s missing is patient education
          and engagement. At Vivmeds Pharmacy, that’s the disease management
          function that we have embraced.
        </p>
      </div>
      <div class="vm-section_content">
        <ul>
          <li>
            <span>Medication reconciliation:</span> Vivmeds Pharmacies would
            assist in verifying that patients are taking the correct medications
            to manage their diabetes. We can counsel patients and prescribers
            about other medications that may be indicated based on their
            comorbidities or contraindicated based on what they’re currently
            taking.
          </li>

          <li>
            <span>Medication use:</span> Many patients with diabetes require
            injectable insulin. As a community pharmacy, we educate patients how
            to store the insulin, how to draw the insulin into the syringe, how
            to inject the insulin, how to change needles and how to rotate
            injection sites.
          </li>

          <li>
            <span>Product selection:</span> At Vivmeds Pharmacy, our Pharmacists
            engage in conversations with patients and possibly family members
            about their OTC diabetes product needs. We discuss with patients
            regularly if they are experiencing any issues so they can direct
            patients to the right products they need to manage their condition
            and ensure a minor issue doesn’t evolve into a severe complication.
          </li>

          <li>
            <span>Product use:</span> Vivmeds Pharmacists are willing to teach
            patients and possibly family members how to use their diabetes
            products. Monitoring blood sugar levels is an essential part of
            health maintenance for patients with diabetes. Knowing how to use a
            lancet and glucose meter is critical.
          </li>

          <li>
            <span>Education and Awareness:</span> More importantly, Vivmeds
            Pharmacy can help guide the patient to understand their blood
            glucose results. This can include noticing patterns in their
            readings and helping a patient adjust, and understanding how their
            food choices, exercise, stress or illness may affect their glucose
            levels.
          </li>
        </ul>
      </div>
      <div class="vm-section_content">
        <p>
          The role of patient educator can play out in a number of ongoing
          areas; for instance the risk factors , like smoking, obesity, physical
          inactivity, high blood pressure and high cholesterol associated with
          diabetes, Vivmeds Pharmacy supports patients with diabetes with
          clinical services like nutritional counseling and smoking cessation
          programs that can mitigate those risk factors and offering flu and
          other key immunizations to their patients and family members. We
          support patients with diabetes with prescription and non-prescription
          products directed at the same risk factors.
        </p>
      </div>
    </el-container>
    <ScheduleConsultation type="Diabetes Care Options" />
    <Footer />
  </div>
</template>

<script>
import image from '@/mixin/image'

import PageHeader from '@/components/Website/PageHeader'
import ScheduleConsultation from '@/components/Website/ScheduleConsultation'
import Footer from '@/components/Website/Footer'

export default {
  name: 'DiabetesManagement',
  components: {
    PageHeader,
    ScheduleConsultation,
    Footer,
  },
  mixins: [image],
  data() {
    return {
      title: 'Diabetes Management',
      image: 'diabetes.jpg',
      imageFolder: 'services',
    }
  },
}
</script>

<style lang="scss"></style>
