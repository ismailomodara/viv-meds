<template>
  <div>
    <PageHeader :title="title" :image="image" :image-folder="imageFolder" />
    <el-container class="vm-section pb-0">
      <div class="vm-section_content">
        <h4>Do you need Help with Feet and Leg Pain or other concerns?</h4>
        <p>
          The feet are some of your hardest working body parts. So, it’s
          somewhat normal that you would undergo pain and distress in them every
          once in a while. Simultaneously, over the counter medications could be
          ineffective for treating common podiatric ailments than medications
          designed for your specific foot issue. Millions of Americans suffer
          from foot and leg pain, often related to underlying medical conditions
          such as diabetes and gout, as well as athletic performance.
        </p>
      </div>

      <div class="vm-section_content">
        <h4>General Foot and Leg Issues</h4>
        <p>
          Podiatrists or other health care professionals may encounter several
          patient issues related to the leg and foot that require customized
          treatment. Some of the most common podiatry issues individuals
          experience include:
        </p>

        <ul>
          <li>Athlete’s foot</li>
          <li>Arthritis</li>
          <li>Recurring blisters</li>
          <li>Neuropathy</li>
          <li>Dry skin</li>
          <li>Foot ulcers</li>
          <li>Swelling and edema</li>
          <li>Nail issues</li>
          <li>Muscle pain</li>
          <li>Corns and calluses</li>
          <li>Warts</li>
          <li>Poor circulation</li>
        </ul>

        <p>
          Medications like topical over the counter creams and ointments, or
          systemic prescription medications for these conditions often come with
          other disadvantages and challenges.
        </p>

        <p>
          Oral, systemic medications come with dangerous side effects with
          long-term use, for instance, the risk of dependence and organ
          toxicity.<br />
          Topical over the counter treatments are mass produced, thus they might
          not necessarily help your unique needs effectively.
        </p>
      </div>

      <div class="vm-section_content">
        <h4>
          Compounding Medications can be made tailored to your podiatric needs
        </h4>
        <p>
          Perhaps you have a podiatric concern that is hard to treat, or you
          have concerns regarding the side effects inherent with long-term
          medication use, a Vivmeds compounding pharmacy can help. Vivmeds
          Pharmacy works together with your prescribing physician to create
          customized solutions to your exclusive podiatry problems. We create
          the most effective ingredients and delivery mechanisms to administer
          the appropriate medications where you need it most.
        </p>
        <p>
          Vivmeds pharmacy team works closely with you as a patient, and your
          podiatrist or other health care provider to develop the best available
          solution for your podiatry challenge.
        </p>
        <p>
          Everyone is different, so it is important to have a variety of
          delivery. The perfect combination will rely on your medical state,
          amount of daily activity, genetics, and previous health history.<br />
          Our compounded medications are available in the forms of creams, gels,
          ointments, sprays, and powders.
        </p>
      </div>

      <div class="vm-section_content">
        <h4>We Compound Medications for Foot and Leg Issues like:</h4>
        <p>
          Fungal Infections. Dry, cracked skin of the foot and heel are a prime
          source of fungal infection. Unfortunately, the tough surface of the
          foot can make it difficult for over the counter medications to
          effectively penetrate.<br />
          Arthritis/Inflammatory Pain. The long -term side effects of oral pain
          medications are well-documented. Get targeted therapy, straight to the
          source.<br />
          Skin and Wound Care. Individuals with poor circulation often suffer
          debilitating ulcers in their feet. Appropriate medication is necessary
          to heal the wound and prevent infection. <br />
          Combinations for more targeted effects. In addition, Vivmeds Pharmacy
          can combine medications to create a synergistic effect, aiding healing
          and improving quality of life.
        </p>
      </div>
    </el-container>
  </div>
</template>

<script>
import PageHeader from '@/components/Website/PageHeader'

export default {
  name: 'Podiatry',
  components: {
    PageHeader,
  },
  data() {
    return {
      title: 'Podiatry',
      image: 'compounding-medications-for-podiatry-concerns.jpg',
      imageFolder: 'compounding',
    }
  },
}
</script>

<style lang="scss"></style>
