<template>
  <el-container class="vm-section">
    <div class="vm-section__heading">
      <h2>Testimonials</h2>
      <p>
        We appreciate our customers taking the time to share their thoughts
        about the pharmacy.<br />
        What Our Patients Like Most About Our Pharmacy.
      </p>
    </div>
    <el-row type="flex" :gutter="30" class="flex-wrap">
      <el-col
        v-for="(testimonial, i) in testimonials"
        :key="i"
        :md="24"
        :lg="12"
      >
        <div class="vm-testimonial">
          <img :src="getImage(testimonial.image, 'services')" alt="" />
          <div class="vm-testimonial__content">
            <h5>{{ testimonial.customer }}</h5>
            <div class="rating">
              <el-rate v-model="testimonial.rating" disabled />
              <span>{{ testimonial.time }}</span>
            </div>
            <p class="message">{{ testimonial.message }}</p>
          </div>
        </div>
      </el-col>
    </el-row>
  </el-container>
</template>

<script>
import image from '@/mixin/image'

export default {
  name: 'Testimonials',
  mixins: [image],
  data() {
    return {
      testimonials: [
        {
          image: 'pharmacy.jpg',
          customer: 'Angela G',
          rating: 5,
          time: 'A week ago',
          message:
            'The owners are amazing. First class customer service with delivery. Always friendly and helpful.',
        },
        {
          image: 'pharmacy.jpg',
          customer: 'Adefolarinwale Adebiyi',
          rating: 4,
          time: '5 months ago',
          message:
            'Great pharmacy & wonderful customer service. The pharmacists are knowledgeable, while they are very helpful. Hands down my favourite pharmacy.',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.vm-testimonial {
  min-height: 260px;
  width: 100%;
  padding: 40px 50px;
  background: #ffffff;
  border: 1px solid #6a8b2c;
  border-radius: 8px;
  margin-bottom: 30px;
  display: flex;
  align-items: flex-start;

  img {
    height: 80px;
    width: 80px;
    border-radius: 1000px;
    object-fit: cover;
    margin-right: 20px;
  }

  &__content {
    h5 {
      text-transform: uppercase;
      color: #000000;
      margin-bottom: 15px;
    }

    .rating {
      display: flex;
      align-items: center;
      margin-bottom: 20px;

      > span {
        margin-left: 10px;
        opacity: 0.74;
        color: #292222;
      }
    }

    p {
      font-size: 1rem;
      color: #292222;
      line-height: 1.8;
    }
  }
}

@media (max-width: 400px) {
  .vm-testimonial {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 40px 20px;

    img {
      margin: 0 0 15px !important;
    }

    &__content {
      .rating {
        justify-content: center;
      }
    }
  }
}
</style>
