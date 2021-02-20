<template>
  <div>
    <PageHeader :title="title" :image="image" :image-folder="imageFolder" />
    <el-container class="vm-section pb-0">
      <div class="vm-section_content">
        <p>
          Our compounding experts work with dermatologists to formulate tailored
          therapies that treat dermatologic problems in addition to addressing
          other issues as well. We understand that these treatments must be both
          therapeutically effective and also meet certain aesthetic needs, so
          our compounding Pharmacists and other Compounding experts are ready to
          prepare a wide range of personalized medications for use in
          dermatology.
        </p>

        <p>
          Our compounding pharmacists can also prepare topical lotions for the
          scalp or topical lacquers for nails.
        </p>

        <p>
          Sensitive skin and sensitivity to one’s appearance during the
          treatment are key areas where our compounding services for dermatology
          can assist. We can formulate medications using bases that are more
          cosmetically appealing. Should you need delivery options that are
          hypoallergenic, non-comedogenic, paraben-free, and free of petrolatum,
          we have diverse options to meet those needs.
        </p>

        <p>
          We also have other bases like powders, topical sprays, and customized
          forms for oral dosage, such as lozenges. In case you need to
          administer the medication in another way, we can help with a variety
          of preparations tailored to the exact needs of the patient.
        </p>

        <p>
          To streamline your patient’s medication plan and improve the chances
          of compliance, we can also combine compatible drugs within a single
          dosage form. And we can include USP-approved chemicals to help topical
          medications absorb more effectively.
        </p>

        <p>
          Our compounding experts can assist you with everything from the
          “tested and trusted “formulas learned in medical training, to highly
          specific and unique customized medications that fit the needs of a
          physician’s patient population. Just let us know what your needs are
          for dermatology compounding, and we will be happy to assist.
        </p>

        <p>
          <strong
            >Our compounded dermatology medications can treat skin conditions
            such as:</strong
          >
        </p>

        <ul>
          <li>Acne</li>
          <li>Psoriasis</li>
          <li>Eczema</li>
          <li>Scarring and Keloids</li>
          <li>Decubitus Ulcers</li>
          <li>Peristomal Dermatoses</li>
          <li>Excessive Sweating</li>
          <li>Stretch Marks</li>
          <li>Diaper Rash</li>
          <li>Rosacea</li>
          <li>Vitiligo and Melasma</li>
          <li>And much more</li>
        </ul>
      </div>

      <div class="vm-section_content">
        <h4>
          Effective Treatment Occurs by Compounding Medications per Patient
        </h4>
        <p>
          There are many reasons why some people prefer their medications be
          formulated one way compared to another, such as a gel instead of a
          liquid solution. We can accommodate these types of requests and
          prepare your prescription in a suitable and much easier way to use.
          After all, even the best medications can’t help a patient if they’re
          not used correctly or don’t reach the area that needs to be treated.
        </p>

        <p>
          Receiving the correct diagnosis from your doctor is just the first
          step. Following it up with a personalized treatment plan, like ours,
          is the key to proper healing. Working with our pharmacy for
          dermatology management allows patients to get the right help, ensuring
          that treatment through compounded medications is effective, sooner.
        </p>

        <p>
          At Vivmeds Pharmacy, we understand the urgency in finding answers to
          dermatological challenges. More than most other medical specialties,
          patients with dermatological conditions require individualized care –
          treatments that are not readily available commercially.
        </p>

        <p>
          Count on us for custom-formulated compounded medications that respond
          better to dermatological and other health ailments when you need them.
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
  name: 'Dermatology',
  components: {
    PageHeader,
    ScheduleConsultation,
  },
  data() {
    return {
      title: 'Dermatology',
      image: 'dermatology.jpg',
      imageFolder: 'compounding',
    }
  },
}
</script>

<style lang="scss"></style>
