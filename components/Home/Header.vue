<template>
  <div class="vm-hero">
    <el-container>
      <template v-for="(slide, index) in slider">
        <div
          v-if="slide.image"
          :key="index"
          :class="[
            'vm-hero__container',
            {
              active: index === activeImage,
              fadeInLeft: index === activeImage,
              prev: index === activeImage - 1,
              next: index === activeImage + 1,
            },
          ]"
          @click="setActive(index)"
        >
          <div class="overlay"></div>
          <img :src="getImage(`${slide.image}.jpg`, 'services')" alt="" />
          <div
            :class="[
              'vm-hero__container-content',
              { fadeInUp: activeImage === index },
            ]"
          >
            <h1>{{ slide.title }}</h1>
            <p>{{ slide.description }}</p>
          </div>
          <div v-if="activeImage === 1" class="vm-hero__container-intro">
            <h1>
              Welcome <br />
              To Vivmeds <br />
              Pharmacy
            </h1>
            <p>We are passionate about your wellness.</p>
            <div class="socials">
              <a href="#">
                <svg
                  width="12"
                  height="24"
                  viewBox="0 0 12 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.98071 24V12.7385H0.00292969V8.68382H2.98071V5.2206C2.98071 2.49917 4.73969 0 8.79276 0C10.4338 0 11.6472 0.15732 11.6472 0.15732L11.5516 3.9437C11.5516 3.9437 10.3141 3.93166 8.96364 3.93166C7.50204 3.93166 7.26787 4.60522 7.26787 5.72316V8.68382H11.6678L11.4764 12.7385H7.26787V24H2.98071Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a href="#">
                <svg
                  width="23"
                  height="22"
                  viewBox="0 0 23 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.13492 0.066C8.30792 0.012 8.68192 0 11.6699 0C14.6579 0 15.0319 0.013 16.2039 0.066C17.3759 0.119 18.1759 0.306 18.8759 0.577C19.6089 0.854 20.2739 1.287 20.8239 1.847C21.3839 2.396 21.8159 3.06 22.0919 3.794C22.3639 4.494 22.5499 5.294 22.6039 6.464C22.6579 7.639 22.6699 8.013 22.6699 11C22.6699 13.988 22.6569 14.362 22.6039 15.535C22.5509 16.705 22.3639 17.505 22.0919 18.205C21.8159 18.9391 21.3832 19.6042 20.8239 20.154C20.2739 20.714 19.6089 21.146 18.8759 21.422C18.1759 21.694 17.3759 21.88 16.2059 21.934C15.0319 21.988 14.6579 22 11.6699 22C8.68192 22 8.30792 21.987 7.13492 21.934C5.96492 21.881 5.16492 21.694 4.46492 21.422C3.73084 21.146 3.06574 20.7133 2.51592 20.154C1.9563 19.6047 1.52324 18.9399 1.24692 18.206C0.975922 17.506 0.789922 16.706 0.735922 15.536C0.681922 14.361 0.669922 13.987 0.669922 11C0.669922 8.012 0.682922 7.638 0.735922 6.466C0.788922 5.294 0.975922 4.494 1.24692 3.794C1.52364 3.06008 1.95704 2.39531 2.51692 1.846C3.06596 1.2865 3.73039 0.853443 4.46392 0.577C5.16392 0.306 5.96392 0.12 7.13392 0.066H7.13492ZM16.1149 2.046C14.9549 1.993 14.6069 1.982 11.6699 1.982C8.73292 1.982 8.38492 1.993 7.22492 2.046C6.15192 2.095 5.56992 2.274 5.18192 2.425C4.66892 2.625 4.30192 2.862 3.91692 3.247C3.55197 3.60205 3.2711 4.03428 3.09492 4.512C2.94392 4.9 2.76492 5.482 2.71592 6.555C2.66292 7.715 2.65192 8.063 2.65192 11C2.65192 13.937 2.66292 14.285 2.71592 15.445C2.76492 16.518 2.94392 17.1 3.09492 17.488C3.27092 17.965 3.55192 18.398 3.91692 18.753C4.27192 19.118 4.70492 19.399 5.18192 19.575C5.56992 19.726 6.15192 19.905 7.22492 19.954C8.38492 20.007 8.73192 20.018 11.6699 20.018C14.6079 20.018 14.9549 20.007 16.1149 19.954C17.1879 19.905 17.7699 19.726 18.1579 19.575C18.6709 19.375 19.0379 19.138 19.4229 18.753C19.7879 18.398 20.0689 17.965 20.2449 17.488C20.3959 17.1 20.5749 16.518 20.6239 15.445C20.6769 14.285 20.6879 13.937 20.6879 11C20.6879 8.063 20.6769 7.715 20.6239 6.555C20.5749 5.482 20.3959 4.9 20.2449 4.512C20.0449 3.999 19.8079 3.632 19.4229 3.247C19.0678 2.88207 18.6356 2.60121 18.1579 2.425C17.7699 2.274 17.1879 2.095 16.1149 2.046ZM10.2649 14.391C11.0496 14.7176 11.9233 14.7617 12.7369 14.5157C13.5504 14.2697 14.2533 13.7489 14.7255 13.0422C15.1977 12.3356 15.41 11.4869 15.326 10.6411C15.242 9.79534 14.8669 9.00497 14.2649 8.405C13.8812 8.02148 13.4171 7.72781 12.9063 7.54515C12.3954 7.36248 11.8504 7.29536 11.3104 7.34862C10.7705 7.40187 10.2491 7.57418 9.78373 7.85313C9.31838 8.13208 8.92067 8.51074 8.61922 8.96185C8.31778 9.41296 8.12011 9.92529 8.04044 10.462C7.96076 10.9986 8.00107 11.5463 8.15846 12.0655C8.31585 12.5847 8.5864 13.0626 8.95064 13.4647C9.31488 13.8668 9.76375 14.1832 10.2649 14.391ZM7.67192 7.002C8.19695 6.47697 8.82024 6.0605 9.50622 5.77636C10.1922 5.49222 10.9274 5.34597 11.6699 5.34597C12.4124 5.34597 13.1476 5.49222 13.8336 5.77636C14.5196 6.0605 15.1429 6.47697 15.6679 7.002C16.1929 7.52702 16.6094 8.15032 16.8936 8.8363C17.1777 9.52228 17.3239 10.2575 17.3239 11C17.3239 11.7425 17.1777 12.4777 16.8936 13.1637C16.6094 13.8497 16.1929 14.473 15.6679 14.998C14.6076 16.0583 13.1695 16.654 11.6699 16.654C10.1704 16.654 8.73226 16.0583 7.67192 14.998C6.61159 13.9377 6.0159 12.4995 6.0159 11C6.0159 9.50046 6.61159 8.06234 7.67192 7.002ZM18.5779 6.188C18.708 6.06527 18.8122 5.91768 18.8842 5.75397C18.9563 5.59027 18.9947 5.41377 18.9973 5.23493C18.9999 5.05609 18.9666 4.87855 18.8994 4.71281C18.8322 4.54707 18.7324 4.39651 18.6059 4.27004C18.4794 4.14357 18.3288 4.04376 18.1631 3.97652C17.9974 3.90928 17.8198 3.87598 17.641 3.87858C17.4622 3.88119 17.2857 3.91965 17.1219 3.9917C16.9582 4.06374 16.8107 4.1679 16.6879 4.298C16.4492 4.55103 16.3186 4.88712 16.3236 5.23493C16.3287 5.58274 16.4691 5.91488 16.7151 6.16084C16.961 6.40681 17.2932 6.54723 17.641 6.5523C17.9888 6.55737 18.3249 6.42669 18.5779 6.188Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a href="#">
                <svg
                  width="24"
                  height="20"
                  viewBox="0 0 24 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.3124 2.93561C22.4774 3.30561 21.5804 3.55561 20.6374 3.66861C21.6104 3.0864 22.3384 2.17008 22.6854 1.09061C21.7713 1.6336 20.7708 2.01581 19.7274 2.22061C19.0258 1.47148 18.0965 0.974938 17.0838 0.808086C16.071 0.641234 15.0315 0.813404 14.1267 1.29786C13.2218 1.78233 12.5022 2.55197 12.0796 3.48732C11.657 4.42266 11.555 5.47136 11.7894 6.47061C9.93713 6.37761 8.12507 5.89616 6.47087 5.05752C4.81667 4.21887 3.35729 3.04177 2.18745 1.60261C1.78745 2.29261 1.55745 3.09261 1.55745 3.94461C1.557 4.71161 1.74588 5.46685 2.10732 6.14334C2.46877 6.81983 2.99161 7.39665 3.62945 7.82261C2.88972 7.79907 2.16632 7.5992 1.51945 7.23961V7.29961C1.51937 8.37535 1.89148 9.41799 2.57263 10.2506C3.25378 11.0832 4.20202 11.6545 5.25645 11.8676C4.57023 12.0533 3.85078 12.0807 3.15245 11.9476C3.44994 12.8732 4.02944 13.6826 4.80981 14.2625C5.59018 14.8424 6.53236 15.1638 7.50445 15.1816C5.85428 16.477 3.81633 17.1797 1.71845 17.1766C1.34683 17.1767 0.975522 17.155 0.606445 17.1116C2.73592 18.4808 5.21479 19.2074 7.74645 19.2046C16.3164 19.2046 21.0014 12.1066 21.0014 5.95061C21.0014 5.75061 20.9964 5.54861 20.9874 5.34861C21.8987 4.68959 22.6854 3.87351 23.3104 2.93861L23.3124 2.93561Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </template>
      <div
        v-if="activeImage === 7"
        class="vm-hero__container next"
        @click="activeImage = 1"
      >
        <img :src="getImage(`${slider[1].image}.jpg`, 'services')" alt="" />
      </div>
      <div class="vm-hero__dots">
        <span
          v-for="i in slider.length - 1"
          :key="i"
          :class="{ active: activeImage === i }"
          @click="setActive(i)"
        ></span>
      </div>
    </el-container>
  </div>
</template>

<script>
import image from '@/mixin/image'

export default {
  name: 'Header',
  mixins: [image],
  data() {
    return {
      activeImage: 0,
      slider: [
        {
          title: '',
          description: '',
          image: '',
        },
        {
          title: '',
          description: '',
          image: 'pharmacy',
        },
        {
          title: 'Medication Therapy Management',
          description:
            'At Vivmeds Pharmacy , we work directly with you to determine where there may be medication-related problems or concerns. Medication management will ensure that all of your medications are consistent with each other and with you.',
          image: 'medication-therapy',
        },
        {
          title: 'Diabetes Management',
          description:
            'We have expanded diabetes care services to improve the health of the community by providing ancillary services such as diabetes self-management education/training (DSME/T) programs.',
          image: 'diabetes',
        },
        {
          title: 'Immunization',
          description:
            'We have the CDC-recommended vaccines you need, administered by an immunization-trained pharmacist.',
          image: 'immunization',
        },
        {
          title: 'Integrative Medicine',
          description:
            'We combine both functional and integrative approaches to help you get to the root cause of disease to optimize wellness in your life.\n' +
            'Our integrative approach to care at Vivmeds Pharmacy starts with advanced prevention.',
          image: 'integrative-medicine',
        },
        {
          title: 'Point-of-Care Services',
          description:
            'As a wellness community pharmacy practice, our point of care testing service  will not only help reduce the overall cost incurred by a patient or third-party payer for a health care encounter, it also introduces the possibility to provide the patient with the most cost-effective service.',
          image: 'point-of-care',
        },
        {
          title: 'Animal Care',
          description:
            'We provide the best Animal care services for your pets at an affordable cost.',
          image: 'animal-care',
        },
      ],
    }
  },
  mounted() {
    this.autoSlide()
  },
  methods: {
    setActive(index) {
      this.activeImage = index
    },
    autoSlide() {
      this.activeImage =
        this.activeImage + 1 >= this.slider.length ? 1 : this.activeImage + 1
      setTimeout(() => {
        this.autoSlide()
      }, 4000)
    },
  },
}
</script>

<style scoped lang="scss">
@import '../../assets/css/components/header';
</style>
