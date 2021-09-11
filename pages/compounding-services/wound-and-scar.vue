<template>
  <div>
    <PageHeader :title="title" :image="image" :image-folder="imageFolder" />
    <el-container class="vm-section pb-0">
      <div class="vm-section_content">
        <h4>Common Wounds and Types of Scars</h4>
        <p>
          As a natural process of healing, scars occur after the body sustains
          an injury. The nature of the scar – its size and its appearance – will
          depend on its location on the body and how it happened. Other patient
          factors, such as genetics, ethnicity, and age, can affect scar
          formation and healing time.
        </p>

        <p>
          The common pattern between scars is that they affect people of all
          ages, and they never completely fade. Simultaneously, they can be
          treated with medication to change their size and minimize the
          intrusiveness of their appearance.
        </p>

        <p>
          Compounded medication can help treat several different types of scars.
          Some of the most common types of scars that require treatment include:
        </p>
      </div>

      <div class="vm-section_content">
        <h4>Keloids</h4>
        <p>
          A keloid scar is large, often reddish in appearance, and results from
          an overproduction of collagen. It’s usually raised and grow outside of
          the area where the wound initially occurred. Depending on their size
          and location, they can be painful in addition to affecting a patient’s
          movement.
        </p>
      </div>

      <div class="vm-section_content">
        <h4>Burn (Contracture) Scars</h4>
        <p>
          Some patients report that the healing process is one of the toughest
          instances of suffering a burn. The scars that form after a burn can
          cause tightness and discomfort; they can even affect a patient’s
          ability to move. Depending on the degree of the burn, the scars can
          also impede the underlying muscle and nerve structures.
        </p>
      </div>

      <div class="vm-section_content">
        <h4>Acne Scars</h4>
        <p>
          Hormone imbalances and highly processed foods, high consumption of
          meats and dairy can cause individuals to incur acne well into their
          30s and beyond. As our skin loses elasticity, it also loses its
          ability to heal efficiently, making scars and hyperpigmentation more
          common. Acne scars rarely hurt, but often cause embarrassment.
        </p>
      </div>

      <div class="vm-section_content">
        <h4>Surgical Scars</h4>
        <p>
          A key, or even minor, surgery can leave scars with the site of
          incision apparent. Sometimes, the incision may leave imprints from
          staples, if used. Surgical scars generally concave slightly and can
          lead to embarrassment or self-consciousness.
        </p>
      </div>

      <div class="vm-section_content">
        <h4>Reasons to consider Compounding Wound and Scar</h4>
        <p>
          The healing process for scars differs from people to people, as well
          as the nature of the injury itself. A surgical scar, for example,
          generally heals faster because your skin has been bonded to aid in
          healing. Deeper and more expansive injuries, such as scars from
          injuries, take longer to heal.
        </p>

        <p>
          Many people turn to over the counter remedies to heal scars. While
          they may seem promising, they actually do little to diminish the
          appearance of a scar once the healing process is complete. Over the
          counter creams generally produced to appeal to the masses. As such,
          they will not be formulated to address your specific needs, or even
          the type of scar you have.
        </p>

        <p>
          During the healing process, it is important to follow a physician’s
          orders and keep the wound clean. However, once the healing process is
          complete and you want to diminish the appearance of a healed scar,
          compounding medications can help.
        </p>
      </div>

      <div class="vm-section_content">
        <h4>Custom Medication for Scars and Wounds</h4>
        <p>
          Vivmeds Pharmacy offers wound care and scar healing solutions for
          numerous problems, including acne, burns, and surgical scars. If you
          want to know if compounding is right for you, take this order form
          with you to your next doctor’s appointment and ask your health care
          provider if compounding medications are right for you.
        </p>
      </div>

      <div class="vm-section_content">
        <p class="text-primary">
          Contact us at Vivmeds Pharmacy at 940-226-4849 to speak with a
          Pharmacy representative.
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
  name: 'WoundsAndScars',
  components: {
    PageHeader,
    ScheduleConsultation,
  },
  data() {
    return {
      title: 'Wound & Scar Therapy',
      image: 'wound-and-scar-therapy.jpg',
      imageFolder: 'compounding',
    }
  },
}
</script>

<style lang="scss"></style>
