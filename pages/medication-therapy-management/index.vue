<template>
  <div>
    <PageHeader :title="title" :image="image" :image-folder="imageFolder" />
    <el-container class="vm-section pb-0">
      <div class="vm-section_content">
        <h4>What is Medication Therapy Management?</h4>
        <p>
          Medication Therapy Management refers to a group of services designed
          to optimize outcomes for patients. The primary components include
          active prescription management and proactive identification of
          medication issues.
        </p>
        <p>
          As the American Pharmacists Association explains, MTM exists because
          medication management is an expensive and growing issue in the U.S. In
          fact, prescription-related issues cause an estimated 1.5 million
          needless negative events every year, resulting in over $175 billion in
          costs related to injuries and death.
        </p>
      </div>
      <div class="vm-section_content">
        <p>
          <strong
            >Through the Medication Therapy Management, you’ll get:</strong
          >
        </p>
        <ul>
          <li>
            An all-inclusive review of your medications and the reasons why you
            take them.
          </li>
          <li>
            A written summary of your medication review with your pharmacist.
          </li>
          <li>
            A road map to assist you make the best use of your medications
            (there will be opportunity for you to take notes or write down any
            follow-up questions)
          </li>
          <li>Necessary assessments of your health status</li>
          <li>Formulating a medication treatment plan</li>
          <li>
            Selecting, initiating, modifying, or administering medication
            therapy
          </li>
          <li>
            Monitored and evaluated on your response to therapy, including
            safety and effectiveness
          </li>
          <li>
            A comprehensive medication review to identify, resolve, and prevent
            medication-related problems, including adverse drug events
          </li>
          <li>
            Verbal education and training designed to enhance your understanding
            and appropriate use of your medications
          </li>
          <li>
            Support services, and resources designed to enhance your adherence
            with your therapeutic regimens
          </li>
        </ul>
      </div>
      <div class="vm-section_content">
        <p>
          <strong
            >At Vivmeds Pharmacy, our pharmacist will discuss with you
            about:</strong
          >
        </p>
        <ul>
          <li>Whether your medications have side effects</li>
          <li>
            Whether you take several prescription and non-prescription
            medications.
          </li>
          <li>
            If there might be interactions between the drugs, you're taking
          </li>
          <li>Whether your costs can be lowered</li>
        </ul>
      </div>
    </el-container>
    <ScheduleConsultation>
      <strong>
        Schedule your medication review with us at Vivmeds Pharmacy Denton
        <br />
        Texas, so you can discuss with the Pharmacist about your action plan
        <br />
        and medication list. Bring your action plan and medication list with
        you.
      </strong>
    </ScheduleConsultation>
    <el-container class="vm-section">
      <div class="vm-section_content">
        <h4>Medication Management is our strength</h4>
        <p>
          At Vivmeds Pharmacy , we work directly with you to determine where
          there may be medication-related problems or concerns. Medication
          management will ensure that all of your medications are consistent
          with each other and with you. We evaluate each of your medications for
          drug-drug interactions, drug-food interactions. We will collaborate
          with you to make sure you are taking your medications correctly. This
          service is great for those who are transitioning care (i.e. from
          hospital to home), have multiple medications, want to reduce
          healthcare costs, or have changed medication regimens/doctors.
        </p>

        <p>Please call or stop in to request this free service.</p>
      </div>
      <div class="vm-section_content">
        <h4>Request Auto-Refill</h4>
        <p>
          <strong
            >Automatic refill and Medication Synchronization Services</strong
          >
        </p>
        <p>
          Are you taking various medications? Let the staff at Vivmeds Pharmacy
          in Denton help coordinate your medication refills. At Vivmeds Pharmacy
          in Denton, we are going extra miles in delivering personalized care
          and service with our medication refill synchronization and automatic
          refill services. Our key strategy is to help adjust all your
          medication numbers, allowing them to “run out” at the same time each
          month (or every 90 days).
        </p>
        <p>
          Subsequently, our system alerts us when your prescriptions are due for
          refill. We then follow up with you to inform you about the status of
          your order. At that time, your only responsibility will be to verify:
        </p>
        <ul>
          <li>
            The medications are still needed, and no therapy changes have been
            made.
          </li>
          <li>
            Specify your preference - in store pick up, home delivery, or
            shipped (provide shipping address if not already pre-arranged).
          </li>
        </ul>
        <el-button round class="el-button--secondary"
          >Request Auto-Refill</el-button
        >
      </div>
    </el-container>
  </div>
</template>

<script>
import PageHeader from '@/components/Website/PageHeader'
import ScheduleConsultation from '@/components/Website/ScheduleConsultation'
import getSiteMeta from '@/utils/getSiteMeta'

export default {
  name: 'MedicationTherapyManagement',
  components: {
    PageHeader,
    ScheduleConsultation,
  },
  data() {
    return {
      title: 'Medication Therapy Management',
      image: 'medication-therapy.jpg',
      imageFolder: 'services',
    }
  },
  head() {
    return {
      title: 'Medication Therapy Management',
      meta: [...this.meta],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `https://vivmeds.com/medication-theraphy-management`,
        },
      ],
    }
  },
  computed: {
    meta() {
      const metaData = [
        {
          title: 'Medication Therapy Management',
          description: '',
          url: `https://vivmeds.com/medication-therapy-management`,
        },
        {
          name: 'keywords',
          content:
            'medication therapy management, medication therapy management in pharmacy, denton, auto prescription refill',
        },
      ]
      return getSiteMeta(metaData)
    },
  },
}
</script>

<style lang="scss"></style>
