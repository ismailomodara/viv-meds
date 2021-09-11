<template>
  <div>
    <PageHeader :title="title" :image="image" :image-folder="imageFolder" />
    <el-container class="vm-section pb-0">
      <div class="vm-section_content">
        <h4>Smoking Cessation: Fast Facts</h4>
        <ul>
          <li>
            Tobacco use can lead to tobacco dependence and serious health
            problems. Quitting smoking greatly reduces the risk of developing
            smoking-related diseases.
          </li>
          <li>
            Tobacco/nicotine dependence is a condition that often requires
            repeated treatments, but there are helpful treatments and resources
            for quitting.
          </li>
          <li>
            Smokers can and do quit smoking for good. In fact, since 2002 there
            have been more former smokers than current smokers.
          </li>
        </ul>
      </div>
      <div class="vm-section_content">
        <p>
          It is estimated that a smoker requires eight to 11 cessation attempts,
          and a Gallup poll reported that smokers average 6.1 quit attempts
          before achieving success. However,a recent article indicates that the
          average may be as high as 30 quit attempts, noting that previous
          figures may be underestimated because of the exclusion of smokers
          facing significant challenges in quitting and limitations in smokers’
          ability to recall lifetime quit attempts. In fact, smokers are 30–40%
          more likely to develop type 2 diabetes than nonsmokers. And people
          with diabetes who smoke are more likely than nonsmokers to have
          trouble with insulin dosing and with controlling their disease. The
          more cigarettes you smoke, the higher your risk for type 2 diabetes.
          No matter what type of diabetes you have, smoking makes your diabetes
          harder to control. If you have diabetes and you smoke, you are more
          likely to have serious health problems from diabetes. It is well
          established that tobacco use—including both combustible and smokeless
          tobacco—can increase a person’s risk of developing several conditions,
          including lung cancer, coronary artery disease, and stroke, as well as
          increase overall mortality.
        </p>

        <p>
          Despite the awareness of associated harm, current smokers face a
          significant challenge in quitting smoking that is attributed to
          nicotine’s potent euphoriant effects.Nicotine exerts its effects via
          binding of nicotinic receptors in the central nervous system, causing
          a release of dopamine. Dopamine triggers areas in the brain that
          control pleasure, reward, and compulsive behaviors, leading to the
          smoker’s dependence on nicotine-triggerered dopamine release.Continual
          stimulation of the pleasure center of the brain is what makes smoking
          cessation so challenging.
        </p>

        <p>
          As a community pharmacy,Vivmeds Pharmacy is perfectly positioned to
          make a difference with this challenging health issue both through the
          products we carry as well as the counseling services we provide to our
          patients.
        </p>
      </div>
      <div class="vm-section_content">
        <h4>Health Benefits from Smoking Cessation</h4>
        <p>
          Quitting smoking can provide immediate and long-term health benefits.
          Immediate reductions in heart rate and blood pressure can be observed,
          and patients may notice decreased phlegm and improved breathing within
          one month. Long-term benefits include a reduction in smoking-related
          mortality of greater than 90% if patients quit before age 30, and 50%
          when patients quit before age 50.
        </p>
      </div>
      <div class="vm-section_content">
        <h4>Vivmeds Pharmacy Approach to Smoking Cessation</h4>
        <p>
          As a Community Pharmacy, we are aware that not all patients who are
          inquiring about smoking cessation or who have a prescription for a
          smoking-cessation product are ready to quit. Our initial approach is
          to perform Behavioral intervention to identify the patient’s stage of
          quitting in order to determine the next step. At Vivmeds Pharmacy, we
          elect to use the motivational interviewing strategy, which is a
          “patient-centered” approach with the goal of helping the patient make
          informed decisions about their health. Not all patients are willing to
          stop smoking at the time of their first visit. Educating the patient
          about different quitting options can help them decide whether they
          feel comfortable in setting a quit date or they need a longer
          preparation period. For patients not ready to set a quit date,
          providing information on different cessation opportunities can make a
          significant difference when they are contemplating whether or not to
          quit. Actively engage ambivalent patients to explore reasons to make a
          change. We will work with you on either pharmacologic and non
          pharmacologic interventions based on the number of cigarettes smoked
          per day.
        </p>
      </div>
    </el-container>
    <ScheduleConsultation>
      <template slot="default">
        To learn more about how we can help with Smoking Cessation <br />
        <span>Schedule a Free Consultation</span> with the Pharmacist or
        <br />Call us at <span>940-226-4849</span>
      </template>
    </ScheduleConsultation>
  </div>
</template>

<script>
import PageHeader from '@/components/Website/PageHeader'
import ScheduleConsultation from '@/components/Website/ScheduleConsultation'
import getSiteMeta from '@/utils/getSiteMeta'

export default {
  name: 'SmokingCessation',
  components: {
    PageHeader,
    ScheduleConsultation,
  },
  data() {
    return {
      title: 'Smoking Cessation',
      image: 'cessation.jpg',
      imageFolder: 'services',
    }
  },
  head() {
    return {
      title: 'Smoking Cessation',
      meta: [...this.meta],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `https://vivmeds.com/cessation`,
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
          url: `https://vivmeds.com/product/medication`,
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
