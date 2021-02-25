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
      <carousel-3d
        :display="2"
        :space="900"
        :clickable="false"
        :autoplay="true"
        :autoplay-timeout="5000"
        :controls-visible="false"
      >
        <slide v-for="(testimonial, i) in testimonials" :key="i" :index="i">
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
        </slide>
      </carousel-3d>
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
          customer: 'Patrica Arps',
          rating: 5,
          time: '5 months ago',
          message:
            "Dr. Maria Dominic, the Pharmacist at VivMeds, continues to amaze us with the quality of  customer service, hands-on-care, and the knowledge possessed regarding homeopathic remedies. Dr Dominic provides follow-up care and has even called after hours on occasion to ensure new medication use is followed. This is hte kind of pharmaceutical, hands-on experience that you cannot get at your typical competitors, and they are constantly available during store hours. I am so glad we found them! We highly recommend VivMes. It's the most personalble pharmcy care that you will ever experience",
        },
        {
          image: 'pharmacy.jpg',
          customer: 'Adefolarinwale Adebiyi',
          rating: 5,
          time: '5 months ago',
          message:
            'Great pharmacy & wonderful customer service. The pharmacists are knowledgeable, while they are very helpful. Hands down my favourite pharmacy.',
        },
        {
          image: 'pharmacy.jpg',
          customer: 'Adriene Renae',
          rating: 5,
          time: 'a month ago',
          message:
            'Great family owned business! Love supporting this local family!',
        },
        {
          image: 'pharmacy.jpg',
          customer: 'Anne Linda',
          rating: 5,
          time: '5 month ago',
          message:
            'I have been getting my wellness supplements for over a month now and the results have been amazing. I have been having sleeping difficulties for so long, but my sleep has improved and I am feeling more energetic',
        },
        {
          image: 'pharmacy.jpg',
          customer: 'Femi Aborisade',
          rating: 5,
          time: '5 month ago',
          message:
            'Great service! Thanks for your professionalism and for getting the medications across to me within a short period of time.',
        },
        {
          image: 'pharmacy.jpg',
          customer: 'PJ Rasmussen',
          rating: 5,
          time: 'a month ago',
          message:
            "Best pharmacy and care I've ever received by a mile! I just moved here from out of state and they were able to get me my meds while my insurance changes were being figured out, and at the same price as my old plan. I recently was sick with Covid, and they delivered meds to my door for free. They also called and texted to check in, which was much appreciated!",
        },
        {
          image: 'pharmacy.jpg',
          customer: 'Robert SO',
          rating: 5,
          time: '4 months ago',
          message:
            'Vivmeds Pharmacy has proven exceptional in the way they deliver my medications. They are quite effective and on time. The pharmacy had made things better since I switched from CVS pharmacy in my area to Vivmeds Pharmacy.',
        },
        {
          image: 'pharmacy.jpg',
          customer: 'Rosella Elice',
          rating: 5,
          time: '4 months ago',
          message:
            'I have been having some leaky gut issues that made me constipated and bloat terribly for a while, and recently I had the opportunity to consult with the pharmacist at Vivmeds Pharmacy. She recommended some integrative and holistic management of the symptoms using professional grades dietary supplements. To my surprise, I have experienced a significant improvement in my symptoms. I really appreciate the professionalism and th attentiveness of the Pharmacist. I will definitely recommend this Pharmacy to anyone seeking alternative approach to treatment or a general wellness help. ',
        },
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
          customer: 'Anthonia Kadiri',
          rating: 5,
          time: '5 months ago',
          message:
            'Nice Pharmacy! The staff are very professional and kind. My doctor sent my prescription here and they had it delivered to my home next day!',
        },
        {
          image: 'pharmacy.jpg',
          customer: 'Dan Rose',
          rating: 5,
          time: '5 months ago',
          message:
            'My experience with VivMeds pharmacy is just so easy, my former pharmacy would have me going in between my insurer and the hospital to resolve issues. VivMeds assists me often times when there are issues with my health insurance.',
        },
        {
          image: 'pharmacy.jpg',
          customer: 'Thomas Faden',
          rating: 5,
          time: '5 months ago',
          message:
            'The team at VivMeds are so dependable. They are one of th best when it comes to health related issues. Cant think of a better pharmacy to sor tout my medical needs.',
        },
        {
          image: 'pharmacy.jpg',
          customer: 'Eshioramhe Kadiri',
          rating: 5,
          time: '5 months ago',
          message:
            'Great place for your pharmacy supplies! Courteous staff and clean environment. No hassle!',
        },
        {
          image: 'pharmacy.jpg',
          customer: 'Tunde Afilaka',
          rating: 5,
          time: '5 months ago',
          message:
            'Had a very nice experience. Everyone was very professional and service was excellent. They answered all my questions and filled my prescription promptly and correctly.',
        },
        {
          image: 'pharmacy.jpg',
          customer: 'Adewale Salami',
          rating: 5,
          time: '5 months ago',
          message:
            'VivMeds is simply the best one-stop shop for excellent pharmacy experience i the DFW area. Femi, Maria and their team made me feel welcomed and were extremely courteous',
        },
        {
          image: 'pharmacy.jpg',
          customer: 'Tomiwa Adegbola',
          rating: 5,
          time: '5 months ago',
          message:
            'I love VivMeds! I have had nothing but the best services from their team and its nice to know they actually car about my health.',
        },
        {
          image: 'pharmacy.jpg',
          customer: '13 databridge',
          rating: 5,
          time: '5 months ago',
          message:
            "Awesome experience, very experienced pharmacists and team members. Two word's I'd use. Empathy, Professional! I will highly recommend this pharmacy",
        },
        {
          image: 'pharmacy.jpg',
          customer: 'Tina Medeiros',
          rating: 5,
          time: '5 months ago',
          message: 'Great service and follow up. A very satisfying experience.',
        },
        {
          image: 'pharmacy.jpg',
          customer: 'Adebayo Adeleke',
          rating: 4,
          time: '5 months ago',
          message:
            "So my family and I switched to Vivmeds Pharmacy few weeks back. It has been nothing but exceptional in service. It doesn't matter where you live in Dallas Metroplex, they will get your medications to you, fast and easy. Thank you for this type of service expecially during this trying times. You guys are the best. Thank you!!!",
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.carousel-3d-container {
  height: 420px !important;
}

.carousel-3d-slide {
  border: none;
  width: 800px !important;
  height: 420px !important;
  background: transparent;
}

.vm-testimonial {
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
