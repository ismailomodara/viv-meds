<template>
  <div>
    <PageHeader :title="title" :image="image" :image-folder="imageFolder" />
    <el-container class="vm-section pb-0">
      <div class="vm-section_content">
        <p>
          Pain management is complex regardless of whether the pain is acute or
          chronic in nature or non-cancer or cancer related. Pain management is
          key to improving quality of life. Pain prevents people from doing
          things they enjoy. It can prevent them from talking and spending time
          with others. It can distress their mood and their ability to think.
          And pain can make it hard to eat and sleep, which can make other
          symptoms worse. Pain causes distress and suffering for patients and
          their loved ones.
        </p>

        <p>
          Pain can also increase blood pressure and heart rate and can
          negatively affect healing. Managing the pain helps ease suffering.
          Chronic pain may have varieties of origins and perpetuating factors,
          hence making it much more difficult to manage than acute pain, needing
          a specialized approach and personalized treatment protocols to meet
          the specific needs of each patient.
        </p>

        <p>
          At Vivmeds Pharmacy we make customized compounded pain medications
          with multiple effective ingredients. We offer compounded medications
          for both acute and chronic pain in creams, gels, capsules, sprays and
          more. There are different kinds of pain and each requires a unique
          treatment using customized treatment protocols that are helpful for
          meeting a patient’s specific needs.
        </p>

        <p>
          These customized protocols may involve use of a variety of medications
          with pain-relieving properties, such as anti-depressants,
          anti-convulsants, anti-arrhythmics, anesthetics, anti-virals and NMDA
          (N-methyl-D-aspartate) antagonists. By applying just the right
          combination of these medications to alter the feelings of pain,
          doctors have seen good results with smaller concentrations.
        </p>

        <p>
          In addition, these medications can be created in topical formulations
          that provide concentrated dosages at the site of the pain, such as in
          the joints or at specific nerve sites. Topical application often
          reduces the chances for negative side effects and can even be more
          effective since the medication does not have to undergo metabolism
          through GI tract.<br />
          medications to alter the feelings of pain, doctors have seen good
          results with smaller concentrations.
        </p>

        <p>
          <strong>
            Conditions that can benefit from compounded pain medication:</strong
          >
        </p>
        <ul>
          <li>Migraines</li>
          <li>Diabetic neuropathy</li>
          <li>Chronic neurological pain</li>
          <li>Osteoarthritis</li>
          <li>Rheumatoid arthritis</li>
          <li>Lupus</li>
          <li>Knee, Shoulder, Back Pain</li>
          <li>Sports Injuries</li>
          <li>Fibromyalgia</li>
          <li>Carpal Tunnel Syndrome</li>
          <li>Shingles</li>
          <li>Tennis Elbow</li>
        </ul>
      </div>

      <div class="vm-section_content">
        <p class="text-primary">
          Contact us at Vivmeds Pharmacy at 940-226-4849 to speak with a
          Pharmacy representative.
        </p>
        <p>
          At Vivmeds Pharmacy, our compounding pharmacy is dedicated to
          providing more personalized compounding medications by actively
          collaborating with patients and practitioners to solve individual
          problems on a case by case situation. Please contact our compounding
          pharmacist to discuss the dosage form, strength, and medication or
          combination that is most appropriate for your patient.
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
  name: 'PainManagement',
  components: {
    PageHeader,
    ScheduleConsultation,
  },
  data() {
    return {
      title: 'Pain Management',
      image: 'pain-management.webp',
      imageFolder: 'compounding',
    }
  },
}
</script>

<style lang="scss"></style>
