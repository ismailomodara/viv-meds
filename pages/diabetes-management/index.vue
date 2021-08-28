<template>
  <div>
    <PageHeader :title="title" :image="image" :image-folder="imageFolder" />
    <el-container class="vm-section pb-0">
      <div class="vm-section_content">
        <p>Among the US population overall, crude estimates for 2018 were:</p>
      </div>
      <div class="vm-section_content">
        <div class="vm-chart__info">
          <PieChart :percentage="10.5" />
          <p>
            34.2 million people of all ages for 10.5% of the US population had
            diabetes
          </p>
        </div>
        <div class="vm-chart__info">
          <PieChart :percentage="13.0" />
          <p>
            34.1 million adults aged 18 years or older - or 13.0% of all US
            adults had diabetes
          </p>
        </div>
        <div class="vm-chart__info">
          <PieChart :percentage="2.8" />
          <PieChart :percentage="21.4" />
          <p>
            7.3 million adults aged 18 years or older who met laboratory
            criteria for diabetes were not aware or did not report having
            diabetes. This number represents 2.8% of all US adults and 21.4% of
            all US adults with diabetes.
          </p>
        </div>
        <div class="vm-chart__info">
          <PieChart :percentage="26.8" />
          <p>
            The percentage of adults with diabetes increased with age, reaching
            26.8% among those aged 65 years or older.
          </p>
        </div>
      </div>
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
    <ScheduleConsultation>
      <template slot="default">
        To learn more about our Diabetes Care Options,<br />
        <span>Schedule a Free Consultation</span> with the Pharmacist or
        <br />Call us at <span>940-226-4849</span>
      </template>
    </ScheduleConsultation>
  </div>
</template>

<script>
import PageHeader from '@/components/Website/PageHeader'
import PieChart from '@/components/Website/PieChart'
import ScheduleConsultation from '@/components/Website/ScheduleConsultation'
import getSiteMeta from '@/utils/getSiteMeta'

export default {
  name: 'DiabetesManagement',
  components: {
    PageHeader,
    PieChart,
    ScheduleConsultation,
  },
  data() {
    return {
      title: 'Diabetes Management',
      image: 'diabetes.jpg',
      imageFolder: 'services',
    }
  },
  head() {
    return {
      title: 'Diabetes Treatment',
      meta: [...this.meta],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `https://vivmeds.com/diabetes-management`,
        },
      ],
    }
  },
  computed: {
    meta() {
      const metaData = [
        {
          title: 'Diabetes Treatment',
          description: '',
          url: `https://vivmeds.com/diabetes-management`,
        },
        {
          name: 'keywords',
          content:
            'Diabetes causes, type 1 diabetes, type 2 diabetes, diabetes treatment in Denton, diabetes symptoms, diabetes prevention, best treatment for diabetes',
        },
      ]
      return getSiteMeta(metaData)
    },
  },
}
</script>

<style lang="scss">
.vm-chart__info {
  width: 80%;
  margin: 0 auto;
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 40px;
  }

  > p {
    margin-left: 50px;
  }
}

@media (max-width: 1024px) {
  .vm-chart__info {
    width: 100%;
  }
}

@media (max-width: 600px) {
  .vm-chart__info {
    flex-direction: column;

    > div {
      margin-bottom: 10px;
    }

    > p {
      margin: 10px 0 0;
      font-size: 0.875rem;
    }
  }
}
</style>
