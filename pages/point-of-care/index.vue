<template>
  <div>
    <PageHeader :title="title" :image="image" :image-folder="imageFolder" />
    <el-container class="vm-section pb-0">
      <div class="vm-section_content">
        <p>
          Point-of-care testing involves conducting a diagnostic test outside of
          a laboratory that produces a rapid and reliable result, helping in
          identifying or managing chronic diseases and acute infections. These
          tests are waived under the Clinical Laboratory Improvement Amendments
          (CLIA) of 1988. According to CDC in the National Diabetes Statistics
          Report, crude estimates for 2018 reported the following:
        </p>
        <ul>
          <li>
            <span
              >34.2 million people of all ages—or 10.5% of the US population—had
              diabetes.</span
            >
          </li>
          <li>
            <span
              >34.1 million adults aged 18 years or older—or 13.0% of all US
              adults—had diabetes.</span
            >
          </li>
          <li>
            <span
              >7.3 million adults aged 18 years or older who met laboratory
              criteria for diabetes were not aware of or did not report having
              diabetes (undiagnosed diabetes)</span
            >
          </li>
        </ul>
        <p>
          An estimated 1.2 million people aged in the United States had HIV at
          the end of 2018, the most recent year for which this information is
          available. Of those people, about 14%, or 1 in 7, did not know they
          had HIV.
        </p>
      </div>
    </el-container>
    <ScheduleConsultation>
      <template>
        <span>Schedule a Free Consultation</span> with the Pharmacist or
        <br />Call us at <span>940-226-4849</span>
      </template>
    </ScheduleConsultation>
    <el-container class="vm-section">
      <div class="vm-section_content">
        <p>
          The Value of Pharmacy-based Rapid Diagnostic Testing to Patient Care
          (This really would be good as a blog article.) Point-of-care testing
          (POCT) is now a proven approach that can provide faster turnaround
          (TAT) of laboratory test results. As manufacturers continue to
          introduce new POCT technologies, POCT is increasing in popularity,
          breadth of testing, and in the diversity of available clinical
          applications. Point-of-care (POC) testing can potentially improve the
          detection and management of infectious diseases by reducing the time
          between testing for and the diagnosis of an infection. Rapidly
          diagnosing an infection benefits the patient by facilitating timely
          access to care and initiation of therapy; it may also benefit the
          population at large by reducing the probability of disease
          transmission. Furthermore, rapidly identifying the cause of an
          infection and promptly initiating appropriate therapy may reduce
          inappropriate antimicrobial use in the community. For acute illnesses
          such as influenza and streptococcal pharyngitis, early identification
          and intervention are associated with better outcomes and reduced
          transmission.
        </p>

        <p>
          Point of Care Testing offers the general community the benefits of
          easy access, quality and cost-effective healthcare services. For
          instance, point-of-care glucose testing (finger stick test) for
          patients with diabetes requires less-invasive and less-complex sample
          collection compared with blood testing. It also provides rapid results
          that can help make more timely treatment decisions. Moreover, in the
          age in which patients are constantly seeking exceptional services yet
          instantaneous. Point of care service improves patient satisfaction and
          removes likely barriers that prevent them from receiving follow-up
          care. Traditional HIV testing, such as ELISA (enzyme-linked
          immunoassays), needs quite a few days for results, while the rapid HIV
          tests can produce results in as little as 20 minutes. This can enable
          treatment initiation and progression toward reducing undiagnosed HIV
          infection around the world. Point of Care Testing for infectious
          diseases are based on a variety of microbial particle-based or
          antibody-based detection methods, including agglutination,
          enzyme-linked immunosorbent, optical immunoassays, or lateral flow
          immunochromatography. Common Point of Care Testing for infectious
          diseases can detect a variety of infections or microorganisms from
          patient specimens.
        </p>

        <p>
          As a wellness community pharmacy practice, our point of care testing
          service will not only help reduce the overall cost incurred by a
          patient or third-party payer for a health care encounter, it also
          introduces the possibility to provide the patient with the most
          cost-effective service. Patients will essentially save money by having
          the test performed at our pharmacy. Along with decreased costs,
          Vivmeds Pharmacy point of testing service is also increasing access,
          which can decrease the patient’s overall time spent. Vivmeds Pharmacy
          is proud to be an accredited CLIA waived point of care testing center
          to administer the CLIA-waived Point-of-Care Testing services through
          the Texas Department of State Health Services.
        </p>

        <p>
          As a community Pharmacy with deep passion and expertise for helping
          communities achieve wellness, focus on quality care and patient
          outcomes through Point-of-Care Testing services would provide patients
          with improved equity of access to achieve better health outcomes.At
          Vivmeds Pharmacy, Rapid Diagnostic Testing is offered as a walk-up
          service that does not require an appointment; therefore, it can be
          done on the patient’s schedule. A few of the community pharmacy-based
          Rapid Diagnostic Testing CLIA-waived tests currently being offered at
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
    <Footer />
  </div>
</template>

<script>
import image from '@/mixin/image'

import PageHeader from '@/components/Website/PageHeader'
import ScheduleConsultation from '@/components/Website/ScheduleConsultation'
import Footer from '@/components/Website/Footer'

export default {
  name: 'PointOfCare',
  components: {
    PageHeader,
    ScheduleConsultation,
    Footer,
  },
  mixins: [image],
  data() {
    return {
      title: 'Point-Of-Care Testing Services',
      image: 'point-of-care.jpg',
      imageFolder: 'services',
    }
  },
}
</script>

<style lang="scss"></style>
