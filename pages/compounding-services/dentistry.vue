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
        <h4>Making the Visit to the Dentist Much Easier</h4>
        <p>
          Sometimes, a trip to the dentist can be met with some anxiety. Tooth
          pain or not, some patients simply cannot get past the anxiety
          associated with dental work. Perhaps, you’re apprehensive about going
          to the dentist, you’re not alone. A dental topical anesthetic gel can
          help alleviate this fear and make the visit easier.
        </p>
        <p>
          Dental compounding is a good approach to overcome these fears.
          Compounded medications can reduce the physical distresses involved in
          a visit to the dentist and help ease the patient’s anxiety. <br />
          Whatever the reason for your anxiety, a custom-formulated, dental
          topical anesthetic gel can help remove your uneasiness and make the
          visit easier.
        </p>
      </div>

      <div class="vm-section_content">
        <h4>Common Reasons for Dental Phobia</h4>
        <p>
          Some people suffer from dental phobia, as a result of fear or anxiety.
          What’s the difference? Fear is based on events from a prior
          experience, while anxiety comes from an event yet to be
          experienced.<br />
          Dental Compounding Preparation can go a long way in removing the fear
          of needed dental work. From fear of injections, X-rays and other
          dental equipment and procedures, being prepared, when possible, can
          help alleviate the fear and help you stay on top of your dental
          health.
        </p>
        <p>
          One way to achieve this is by using a dental topical anesthetic gel
          before a trip to the dentist or orthodontist to prevent the discomfort
          that can come from work done on the teeth and gums.
        </p>
        <p>
          This can be extremely beneficial to children as well. In fact, we
          highly recommend it. Dental fear can be avoided in children thanks to
          dental topical anesthetic gels, created in their favorite flavors, so
          they associate dental visits with good taste.
        </p>
      </div>

      <div class="vm-section_content">
        <h4>A Full Range of Compounded Dental Medications</h4>
        <p>
          We compound a full range of compounded dental medications, which come
          in a variety of forms, customized to each patient’s preferences.
          Dental topical anesthetic gels not only ease the mind of patients but
          help dentists and hygienists work more efficiently, saving you time
          and money.
        </p>
        <p>
          Our dental compounding pharmacists can formulate a wide range of oral
          medications for patients in search of a healthy, alternative solution.
          From mouth rinses to teeth-whitening blends, with our customized,
          high-quality treatment, you’ll know what you’re getting instead of
          having to question the ingredients found in over-the-counter products.
        </p>
        <p>
          <strong>Our list of compounded dental medications includes:</strong>
        </p>
        <ul>
          <li>Pain relief treatments</li>
          <li>Fluoride treatments</li>
          <li>Topical anesthetics</li>
          <li>Oral sedation</li>
          <li>Mouth rinses</li>
          <li>Dry socket preparations</li>
          <li>Teeth-whitening treatments</li>
          <li>Anxiety medications for procedures</li>
        </ul>
      </div>

      <div class="vm-section_content">
        <h4 class="text-black">Benefits of Our Dental Compounding Pharmacy</h4>
        <p>
          Patients and dentists alike can benefit from our dental compounding
          services. Here are some of the top reasons to choose our dental
          compounding pharmacy:
        </p>
        <ul>
          <li>Reduced Anxiety</li>
          <li>Creative Formulations</li>
          <li>Flavored Solutions</li>
          <li>Improved Patient-Dentist Relationship</li>
          <li>
            Vivmeds Pharmacy offers you alternatives to traditional dental
            treatment, such as dental topical anesthetic gel, teeth-whitening
            solutions and much more.
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
  name: 'Dentistry',
  components: {
    PageHeader,
    ScheduleConsultation,
  },
  data() {
    return {
      title: 'Dentistry',
      image: 'dentistry.jpg',
      imageFolder: 'compounding',
    }
  },
}
</script>

<style lang="scss"></style>
