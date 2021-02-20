<template>
  <div>
    <PageHeader :title="title" :image="image" :image-folder="imageFolder" />
    <el-container class="vm-section pb-0">
      <div class="vm-section_content">
        <p>
          Parents, kids, and practitioners need to overcome several challenges
          when it comes to prescription medications for pediatrics: The child
          may experience difficulties swallowing a solid dosage form or may
          detest the flavor or texture of a liquid medication. In situations
          where the usual treatment is an injection, the child’s distress of the
          needle may prove to be a major problem.
        </p>

        <p>
          The limited pediatric market for most drugs may be the leading reason
          for the lack of investment in drug development for this population by
          the pharmaceutical industry. Most medications are not labeled for
          pediatric populations, and when a medication is not approved for use
          in infants and children, it usually is not available in a suitable
          pediatric dosage form. Fortunately, our compounding pharmacy is able
          to help.
        </p>

        <p>
          Hence, many pediatricians and other practitioners work with Vivmeds
          Pharmacy to customize medications that meet the needs and tastes of
          their young patients. Personalized medications from Vivmeds can make
          it more convenient for children to take the medications that they need
          in several ways. Most drugs have a limited pediatric market and are
          not labeled or approved for use in infants and children or are not
          available in a form that is appropriate for pediatric use.
        </p>

        <p>
          At Vivmeds Pharmacy, our compounding Pharmacists and other compounding
          experts know how to deliver oral medications in dosage forms that
          children will be more willing to take, such as flavored suspensions,
          freezer pops, lozenges or “gummy bears,” concentrates and even
          lollipops -- the perfect solution when you need a “swish and swallow”
          delivery method for medications that need to be present in the mouth
          for a longer period.<br />
          With pleasing flavors, colors and dosage forms, our custom-made
          compounded medications can be the key to enticing a child to take the
          medicine he or she needs. Beyond providing more attractive flavor or
          presentation: we put into perspective the physical and chemical
          properties of the active and inactive ingredients we work with to
          produce a medication that is safe and effective as well as
          kid-friendly.
        </p>

        <p>
          With many drugs, we can also compound medications into transdermal
          gels that can be applied to the child’s skin for absorption. We can
          also include helpful additives such as penetration enhancers when
          appropriate. Contact us to discuss your patient’s needs, and we can
          help you decide on a customized medication.
        </p>

        <p>
          As a compounding pharmacy, we can compound oral medications into
          pleasantly flavored suspensions, solutions, concentrates, freezer
          pops, “gummy bears” or lozenges, in colors that entice the child to
          take the medication. A palatable formulation is more likely to improve
          compliance and minimize spillage or waste during administration.
          Lollipops are an ideal alternative to “swish and swallow” medications
          that need to be retained in the mouth for a prolonged period of time.
          Most drugs can be compounded into transdermal gels that can easily be
          applied to an appropriate site, such as the child’s wrist, for
          absorption through the skin.
        </p>

        <p>
          Professional compounding is beyond just diluting current medications
          or mixing powders with bases. The physical and chemical properties of
          each active and inactive ingredient must be put into considerations in
          order to prepare an effective and safe customized medication with the
          desired taste, color, fragrance, viscosity, uniformity, texture, and
          stability. The efficacy of any compounded medication is influenced by
          the technique and equipment used in preparing the formulation, the
          purity and quality of the ingredients, choice of vehicle (base), and
          proper use of additives such as penetration enhancers.
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
      <template
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
  name: 'Pediatrics',
  components: {
    PageHeader,
    ScheduleConsultation,
  },
  data() {
    return {
      title: 'Pediatrics',
      image: 'pediatrics.jpg',
      imageFolder: 'compounding',
    }
  },
}
</script>

<style lang="scss"></style>
