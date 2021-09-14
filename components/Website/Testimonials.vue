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
            <img
              :src="getImage(testimonial.image, 'services')"
              alt=""
              loading="lazy"
            />
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
          image: 'pharmacy_t3gl5c.jpg',
          customer: 'RM Kulkarni',
          rating: 5,
          time: 'a day ago',
          message:
            'We used VivMed for Covid vaccinations. Their service is very professional, systematic and caring. The staff is very friendly, caring and respected our time. The premises are spic and span. We recommend VivMeds to every one for all their pharmaceutical needs',
        },
        {
          image: 'pharmacy_t3gl5c.jpg',
          customer: 'Linda Hanley',
          rating: 5,
          time: 'a day ago',
          message:
            'Love my pharmacy!! Nicest and most helpful people ever! And have given me the BEST prices ever on my drugs!!\n' +
            'Customer service is over the top with these sweet owners! They will go above and beyond to make sure you are taken care of. They braved through the winter storm and delivered my drugs to my doorstep at my home in Ponder in order to make sure I had my blood pressure medication. That meant the world to me!!\n' +
            'Thank you VivMed Pharmacy for taking such good care of me, your personal touch, and for loving me so much! You are truly appreciated!!',
        },
        {
          image: 'pharmacy_t3gl5c.jpg',
          customer: 'Yesi Hernandez',
          rating: 5,
          time: 'a day ago',
          message:
            'I have the privilege of working at this outstanding establishment. The owners have made me feel at home while staying professional and welcoming. I’ve worked at major chains where the pharmacists don’t have personal ties to the customers but at Vivmeds the owners know every customer by their first name! I’m continually amazed at how much love and passion they put into their work each and every day. I’ve worked at many pharmacies and I think Vivmeds Pharmacy takes the trophy for the best one ever!',
        },
        {
          image: 'pharmacy_t3gl5c.jpg',
          customer: 'Aditya A. Joshi',
          rating: 5,
          time: '2 days ago',
          message:
            'Got the Moderna vaccine today! Excellent and safe service. Did all the paperwork in our car - the owner went around to all the cars in the parking lot handling out paperwork and keeping us updated on status an timing. Very caring folks.',
        },
        {
          image: 'pharmacy_t3gl5c.jpg',
          customer: 'LaHoussine Yassini',
          rating: 5,
          time: '3 days ago',
          message:
            'Great experience, and outstanding customer service. Keep up the good work.',
        },
        {
          image: 'pharmacy_t3gl5c.jpg',
          customer: 'Matt Moore',
          rating: 5,
          time: '2 days ago',
          message:
            'Outstanding customer service and the staff there are very knowledgeable and welcoming! They truly care about their customers and their health and well-being. They weill even do all of the work for you to have your prescriptions transferred. An added bonus, they deliver within a certain radius. If you are looking for a top notch pharmacy, look no further, VivMed Pharmacy is the complete package.',
        },
        {
          image: 'pharmacy_t3gl5c.jpg',
          customer: 'Patrica Arps',
          rating: 5,
          time: '5 months ago',
          message:
            "Dr. Maria Dominic, the Pharmacist at VivMeds, continues to amaze us with the quality of  customer service, hands-on-care, and the knowledge possessed regarding homeopathic remedies. Dr Dominic provides follow-up care and has even called after hours on occasion to ensure new medication use is followed. This is hte kind of pharmaceutical, hands-on experience that you cannot get at your typical competitors, and they are constantly available during store hours. I am so glad we found them! We highly recommend VivMes. It's the most personalble pharmcy care that you will ever experience",
        },
        {
          image: 'pharmacy_t3gl5c.jpg',
          customer: 'Adriene Renae',
          rating: 5,
          time: 'a month ago',
          message:
            'Great family owned business! Love supporting this local family!',
        },
        {
          image: 'pharmacy_t3gl5c.jpg',
          customer: 'Anne Linda',
          rating: 5,
          time: '5 month ago',
          message:
            'I have been getting my wellness supplements for over a month now and the results have been amazing. I have been having sleeping difficulties for so long, but my sleep has improved and I am feeling more energetic',
        },
        {
          image: 'pharmacy_t3gl5c.jpg',
          customer: 'PJ Rasmussen',
          rating: 5,
          time: 'a month ago',
          message:
            "Best pharmacy and care I've ever received by a mile! I just moved here from out of state and they were able to get me my meds while my insurance changes were being figured out, and at the same price as my old plan. I recently was sick with Covid, and they delivered meds to my door for free. They also called and texted to check in, which was much appreciated!",
        },
        {
          image: 'pharmacy_t3gl5c.jpg',
          customer: 'Robert SO',
          rating: 5,
          time: '4 months ago',
          message:
            'Vivmeds Pharmacy has proven exceptional in the way they deliver my medications. They are quite effective and on time. The pharmacy had made things better since I switched from CVS pharmacy in my area to Vivmeds Pharmacy.',
        },
        {
          image: 'pharmacy_t3gl5c.jpg',
          customer: 'Rosella Elice',
          rating: 5,
          time: '4 months ago',
          message:
            'I have been having some leaky gut issues that made me constipated and bloat terribly for a while, and recently I had the opportunity to consult with the pharmacist at Vivmeds Pharmacy. She recommended some integrative and holistic management of the symptoms using professional grades dietary supplements. To my surprise, I have experienced a significant improvement in my symptoms. I really appreciate the professionalism and th attentiveness of the Pharmacist. I will definitely recommend this Pharmacy to anyone seeking alternative approach to treatment or a general wellness help. ',
        },
        {
          image: 'pharmacy_t3gl5c.jpg',
          customer: 'Angela G',
          rating: 5,
          time: 'A week ago',
          message:
            'The owners are amazing. First class customer service with delivery. Always friendly and helpful.',
        },
        {
          image: 'pharmacy_t3gl5c.jpg',
          customer: 'Dan Rose',
          rating: 5,
          time: '5 months ago',
          message:
            'My experience with VivMeds pharmacy is just so easy, my former pharmacy would have me going in between my insurer and the hospital to resolve issues. VivMeds assists me often times when there are issues with my health insurance.',
        },
        {
          image: 'pharmacy_t3gl5c.jpg',
          customer: 'Thomas Faden',
          rating: 5,
          time: '5 months ago',
          message:
            'The team at VivMeds are so dependable. They are one of th best when it comes to health related issues. Cant think of a better pharmacy to sor tout my medical needs.',
        },
        {
          image: 'pharmacy_t3gl5c.jpg',
          customer: 'Tina Medeiros',
          rating: 5,
          time: '5 months ago',
          message: 'Great service and follow up. A very satisfying experience.',
        },
        {
          image: 'pharmacy_t3gl5c.jpg',
          customer: 'Adefolarinwale Adebiyi',
          rating: 5,
          time: '5 months ago',
          message:
            'Great pharmacy & wonderful customer service. The pharmacists are knowledgeable, while they are very helpful. Hands down my favourite pharmacy.',
        },
        {
          image: 'pharmacy_t3gl5c.jpg',
          customer: 'Femi Aborisade',
          rating: 5,
          time: '5 month ago',
          message:
            'Great service! Thanks for your professionalism and for getting the medications across to me within a short period of time.',
        },
        {
          image: 'pharmacy_t3gl5c.jpg',
          customer: 'Anthonia Kadiri',
          rating: 5,
          time: '5 months ago',
          message:
            'Nice Pharmacy! The staff are very professional and kind. My doctor sent my prescription here and they had it delivered to my home next day!',
        },

        {
          image: 'pharmacy_t3gl5c.jpg',
          customer: 'Eshioramhe Kadiri',
          rating: 5,
          time: '5 months ago',
          message:
            'Great place for your pharmacy supplies! Courteous staff and clean environment. No hassle!',
        },
        {
          image: 'pharmacy_t3gl5c.jpg',
          customer: 'Tunde Afilaka',
          rating: 5,
          time: '5 months ago',
          message:
            'Had a very nice experience. Everyone was very professional and service was excellent. They answered all my questions and filled my prescription promptly and correctly.',
        },
        {
          image: 'pharmacy_t3gl5c.jpg',
          customer: 'Adewale Salami',
          rating: 5,
          time: '5 months ago',
          message:
            'VivMeds is simply the best one-stop shop for excellent pharmacy experience i the DFW area. Femi, Maria and their team made me feel welcomed and were extremely courteous',
        },
        {
          image: 'pharmacy_t3gl5c.jpg',
          customer: '13 Databridge',
          rating: 5,
          time: '5 months ago',
          message:
            "Awesome experience, very experienced pharmacists and team members. Two word's I'd use. Empathy, Professional! I will highly recommend this pharmacy",
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
  border: none !important;
  width: 800px !important;
  height: 420px !important;
  background: transparent !important;
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
    height: 80px !important;
    width: 80px !important;
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

@media (max-width: 1024px) {
  .carousel-3d-container {
    height: 620px !important;
  }

  .carousel-3d-slide {
    width: 100% !important;
    height: 100% !important;
  }

  .carousel-3d-slider {
    height: 100% !important;
  }

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
