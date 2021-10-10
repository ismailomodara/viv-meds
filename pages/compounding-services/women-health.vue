<template>
  <div>
    <PageHeader
      :title="title"
      :image="image"
      :image-folder="imageFolder"
      :image-alt="`Compounding Services - ${title}`"
    />
    <el-container class="vm-section pb-0">
      <div class="vm-section_content">
        <h4>
          Preventative Care, Hormones, Getting Fit, Pregnancy & Weight Loss
        </h4>
        <p>
          At Vivmeds Pharmacy, our integrative approach to wellness starts with
          prevention. Our compounding pharmacists help improve your health by
          offering personalized medications for your exclusive medical
          conditions and health history, in addition to providing supplements
          and vitamins to support your body’s optimal health.
        </p>
        <p>
          Every woman will have a distinct pattern of risk factors for disease.
          As such, each person’s ideal solution to a health problem must be
          uniquely tailored to them. At Vivmeds Pharmacy, few of the most
          commonly compounded medications for women include:
        </p>
        <ul>
          <li>Urology medications and those supporting urinary tract health</li>
          <li>
            Bioidentical Hormone Replacement Therapy (BHRT): Estrogen therapy,
            progesterone, DHEA, and pregnenolone
          </li>
          <li>
            Medications to address hormone imbalances (i.e. thyroid medications)
          </li>
          <li>
            Medications for pain management, particularly pain and skin
            conditions arising from diabetes and autoimmune disorders.
          </li>
          <li>Topical creams for improving sexual health,</li>
          <li>Ointments for helping breastfeeding mothers, and more.</li>
        </ul>
        <p>
          At Vivmeds Pharmacy we make all of our HRT creams, capsules and
          sublingual drops to the highest standards. We are able to make
          medications customized to each woman based on her unique needs. HRT
          can help when hormones fall out of balance. This commonly happens as
          you age and with the onset of menopause. Hormones play an important
          part in general health including energy, sex, sleep, memory, weight,
          mood, skin and hair, and joints and bones. Since hormones work in
          connection with other hormones in your body a combination of
          treatments is often required.
        </p>
      </div>

      <div class="vm-section_content">
        <h4>Compounding Medications for Women’s Health</h4>
        <p>
          Perhaps you need medications to treat pain, improve sexual health,
          alleviate symptoms of menopause, or improve your quality of life,
          consider the benefits of compounding medication. Vivmeds Pharmacy can
          create custom doses, delivery systems, and formulations that help
          maximize your health or minimize side effects. Our pharmacists work
          directly with your prescribing physician to find the best solution for
          you.
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
  name: 'WomenHealth',
  components: {
    PageHeader,
    ScheduleConsultation,
  },
  data() {
    return {
      title: "Compounding Services for Women's Health",
      image: 'compounding-medications-for-women-health.jpg',
      imageFolder: 'compounding',
    }
  },
}
</script>

<style lang="scss"></style>
