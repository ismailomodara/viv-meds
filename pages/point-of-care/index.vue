<template>
  <div>
    <PageHeader :title="title" :image="image" :image-folder="imageFolder" />
    <el-container class="vm-section pb-0">
      <div class="vm-section_content">
        <p>
          Point-of-care testing (POCT) is now a proven approach that can provide
          faster turnaround (TAT) of laboratory test results. Point-of-care
          (POC) testing can potentially improve the detection and management of
          infectious diseases by reducing the time between testing for and the
          diagnosis of an infection.
        </p>
        <p>
          Rapidly diagnosing an infection benefits the patient by facilitating
          timely access to care and initiation of therapy; it may also benefit
          the population at large by reducing the probability of disease
          transmission. Furthermore, rapidly identifying the cause of an
          infection and promptly initiating appropriate therapy may reduce
          inappropriate antimicrobial use in the community. For acute illnesses
          such as influenza and streptococcal pharyngitis, early identification
          and intervention are associated with better outcomes and reduced
          transmission.
        </p>
        <p>
          As a wellness community pharmacy practice, our point of care testing
          service will not only help reduce the overall cost incurred by a
          patient or third-party payer for a health care encounter. It also
          introduces the possibility to provide the patient with the most
          cost-effective service. Patients will essentially save money by having
          the test performed at our pharmacy.
        </p>
        <p>
          Along with decreased costs, Vivmeds Pharmacy point of testing service
          is also increasing access, which can decrease the patient’s overall
          time spent. Vivmeds Pharmacy is proud to be an accredited CLIA waived
          point of care testing center to administer the CLIA-waived
          Point-of-Care Testing services through the Texas Department of State
          Health Services
        </p>
        <p>
          As a community Pharmacy with deep passion and expertise for helping
          communities achieve wellness; our focus on quality care and patient
          outcomes through Point-of-Care Testing services would provide patients
          with improved equity of access to achieve better health outcomes.
        </p>
        <p>
          At Vivmeds Pharmacy, Rapid Diagnostic Testing is offered as a
          convenient service with no hassles. Hence, it can be done on the
          patient’s schedule. A few of the community pharmacy-based Rapid
          Diagnostic Testing CLIA-waived tests currently being offered at
          Vivmeds Pharmacy include international normalized ratio, Helicobacter
          pylori, A1C, influenza, and HIV/hepatitis C virus screening.
          Infectious disease tests can be used in community pharmacies to screen
          for communicable diseases of public health interest. For example,
          performing Point-of-Care Testing services for HIV and hepatitis C
          virus can improve linkage to appropriate care or counseling services
          for patients with reactive test results. Expanded surveillance through
          the use of these tests may also provide more accurate data on disease
          prevalence as well as increase public health agencies’ ability to
          reach targeted populations for screening.
        </p>
      </div>
    </el-container>
    <ScheduleConsultation>
      <template slot="default">
        Do you need any rapid diagnostic testing service?
        <br />Call us today at Vivmeds Pharmacy on: <span>940-226-4849</span> to
        speak with the pharmacy staff .
      </template>
    </ScheduleConsultation>
  </div>
</template>

<script>
import PageHeader from '@/components/Website/PageHeader'
import ScheduleConsultation from '@/components/Website/ScheduleConsultation'
import getSiteMeta from '@/utils/getSiteMeta'

export default {
  name: 'PointOfCare',
  components: {
    PageHeader,
    ScheduleConsultation,
  },
  data() {
    return {
      title: 'Point-Of-Care Testing Services',
      image: 'point-of-care.jpg',
      imageFolder: 'services',
    }
  },
  head() {
    return {
      title: 'Point of Care Healthcare',
      meta: [...this.meta],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `https://vivmeds.com/point-of-care`,
        },
      ],
    }
  },
  computed: {
    meta() {
      const metaData = [
        {
          title: 'Point of Care Healthcare',
          description: '',
          url: `https://vivmeds.com/point-of-care`,
        },
        {
          name: 'keywords',
          content:
            'Point of care healthcare, Point of care Denton, Point of care testing PPT, Point of care diagnostics',
        },
      ]
      return getSiteMeta(metaData)
    },
  },
}
</script>

<style lang="scss"></style>
