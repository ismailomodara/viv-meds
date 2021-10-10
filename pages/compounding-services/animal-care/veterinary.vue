<template>
  <div>
    <PageHeader
      :title="title"
      :image="image"
      :image-folder="imageFolder"
      :image-alt="`Compounding Services - Animal Care - ${title}`"
    />
    <el-container class="vm-section pb-0">
      <div class="vm-section_content">
        <p>
          Veterinary compounding is a specialized pharmacy practice allowing
          veterinarians to prescribe uniquely formulated medications to provide
          the personalized care their patients deserve.
        </p>
        <p>
          Perhaps you are treating a hard-to-dose companion animal, an exotic
          one that weighs 1200 pounds, or one that weighs 2 pounds, Vivmeds
          Pharmacy Services can provide you with the dose, dosage form, and
          custom flavor to meet the needs of your unique veterinary patient.<br />
          We offer Compounded medications to take care of our furry and
          feathered friends <br />
          Vivmeds Pharmacy is proud to be a full-service veterinary compounding
          pharmacy. We offer veterinary medications and high-quality
          prescription compounding services to pet owners. These compounded
          preparations can be made in a variety of dosage forms, delivery
          methods and flavors.
        </p>

        <p>
          Our compounding pharmacists will work together with your veterinarian
          to solve medication problems by compounding specialized medications
          that meet the unique needs of your pet.
        </p>

        <p><strong>Available compounding delivery methods</strong></p>
        <p>
          Vivmeds Pharmacy’s compounding pharmacists can take practically any
          pet medication and turn it into a tailored delivery method, for a more
          convenient administration to our furry friends. In fact, it can be as
          easy as rubbing it on their ears or adding it to some beef, chicken or
          fish during a meal.
        </p>
        <p>
          <strong
            >We currently offer pet compounding in the following, easy to
            administer forms:</strong
          >
        </p>

        <ul>
          <li>Chewables</li>
          <li>Oral pastes</li>
          <li>Topical creams</li>
          <li>Flavored oils</li>
          <li>Available compounding flavors</li>
          <li>
            At Vivmeds Pharmacy, we understand that there’s no FDA approved
            flavor that every pet will love, so we like to offer pet moms and
            dads, as many flavor options as possible.
          </li>
        </ul>
        <p>
          <strong
            >Some of our most popular, pet friendly flavors include:</strong
          >
        </p>

        <ul>
          <li>Fish</li>
          <li>Liver</li>
          <li>Beef</li>
          <li>Chicken</li>
          <li>Peanut Butter</li>
          <li>Banana</li>
          <li>
            Common pet prescriptions & medications available at Vivmeds Pharmacy
          </li>
          <li>
            Besides our compounding services, Vivmeds Pharmacy also offers more
            traditional pet pharmacy prescriptions and medications to help keep
            up your pet’s health.
          </li>
        </ul>

        <p>
          <strong
            >Some of our more common veterinary prescriptions and pet meds
            include:</strong
          >
        </p>
        <ul>
          <li>Anti-seizure</li>
          <li>Antibiotics</li>
          <li>Parasite treatments</li>
          <li>Vitamins</li>
          <li>Breeding supplements</li>
          <li>Antifungals</li>
          <li>Motion sickness solutions</li>
          <li>Incontinence</li>
          <li>Anti-inflammatories</li>
          <li>Pain relievers</li>
          <li>Hairball remedies</li>
          <li>Cough medicine</li>
          <li>Asthma treatments</li>
          <li>Diabetes solutions</li>
          <li>Skin balms</li>
          <li>Hyperthyroidism gels</li>
          <li>Breath treatments</li>
          <li>Heart & blood pressure treatments</li>
        </ul>
        <p class="text-primary">
          Still have questions or need customer service? Contact us here.
          940-226-4849
        </p>
      </div>
    </el-container>
  </div>
</template>

<script>
import PageHeader from '@/components/Website/PageHeader'

export default {
  name: 'Veterinary',
  components: {
    PageHeader,
  },
  data() {
    return {
      title: 'Veterinary Compounds & Pet Medications',
      image: 'veterinary-compound.jpg',
      imageFolder: 'compounding/animal-care',
    }
  },
}
</script>

<style lang="scss"></style>
