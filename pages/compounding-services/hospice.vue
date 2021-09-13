<template>
  <div>
    <PageHeader :title="title" :image="image" :image-folder="imageFolder" />
    <el-container class="vm-section pb-0">
      <div class="vm-section_content">
        <p>
          Transferring a loved one to hospice care is a very difficult choice.
        </p>

        <p>
          At Vivmeds Pharmacy, we can assist in ensuring your loved ones get the
          best comfort as possible.
        </p>
      </div>

      <div class="vm-section_content">
        <h4>Palliative Care/ Hospice</h4>
        <p>
          We can collaborate with your loved one’s physician and hospice service
          to develop an entirely customized hospice & palliative medicine
          program for your loved one.
        </p>
        <p><strong>Hospice Pharmacy Solutions Include:</strong></p>
        <ul>
          <li>
            <span>Entirely tailored Pain Medicine Strengths — </span> In
            situations where commercial strengths of pain medicine aren’t strong
            enough. We can create a tailored pain medication strength, so that
            your loved one feels completely comfortable during hospice care.
          </li>

          <li>
            <span>Transdermal Dosage Forms — </span> We offer these to eliminate
            painful injections, when patients simply are unable swallow their
            medicines, and minimize the nausea that comes with taking certain
            medications orally.
          </li>

          <li>
            <span>Flavorings — </span> A lot of times, hospice patients may have
            an aversion to certain tastes, such as sweetness. We can make the
            preparations palatable for them, when the commercial preparations
            aren’t.
          </li>

          <li>
            <span>Commercially Unavailable Medications — </span> We have an
            ongoing drug shortage problem in our modern health care system. The
            medications are often not being made in sufficient quantities by
            manufacturers, and alternatives are ineffective for your loved one.
            In these instances, we can make the medications for you, from the
            raw ingredients.
          </li>

          <li>
            <span>Combination Preparations — </span> We can formulate several of
            your loved one’s medications into a single dosage form, such as a
            transdermal gel, suppository, or capsule. This helps streamline the
            medication administration schedule, making it convenient for you,
            your hospice provider, and your loved one.<br />
            Hospice care is an inherently difficult time for your family. We
            want you to know that you have a friend at Vivmeds Pharmacy. We will
            do everything in our power to alleviate the drug administration
            issues that often occur during hospice.
          </li>
        </ul>
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
  name: 'Hospice',
  components: {
    PageHeader,
    ScheduleConsultation,
  },
  data() {
    return {
      title: 'Hospice & Palliative Medicine',
      image: 'hospice-and-palliative-medicine.webp',
      imageFolder: 'compounding',
    }
  },
}
</script>

<style lang="scss"></style>
