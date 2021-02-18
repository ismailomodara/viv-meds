<template>
  <div>
    <div :class="['vm-navbar', { 'hide-strip': hideNavbarStrip }]">
      <div class="vm-navbar__strip">
        <el-container>
          <nuxt-link to="/"
            ><div class="vm-navbar__logo">
              <img :src="getImage('vivmeds-logo.svg')" alt="VivMeds" /></div
          ></nuxt-link>
          <div class="vm-navbar__strip-content hidden-md-and-down">
            <h6>
              Free Delivery on <br />
              all Prescriptions!
            </h6>
          </div>
          <div>
            <div class="vm-navbar__strip-content">
              <span><i class="el-icon-time"></i> Mon - Fri:</span>
              <p>9AM - 6PM</p>
            </div>
            <div class="vm-navbar__strip-content">
              <span><i class="el-icon-time"></i> Saturdays:</span>
              <p>10AM - 2PM</p>
            </div>
          </div>
          <div>
            <div class="vm-navbar__strip-content">
              <span><i class="el-icon-map-location"></i></span>
              <p>3303 Unicorn Lake Blvd Suite 280 Denton TX 76210</p>
            </div>
            <div class="is-flex is-align-center is-justify-between">
              <div class="vm-navbar__strip-content">
                <span><i class="el-icon-phone-outline"></i></span>
                <p>940-2264-849</p>
              </div>
              <div class="vm-navbar__strip-content">
                <span><i class="el-icon-message"></i> </span>
                <p>pharmacy@vivmeds.com</p>
              </div>
            </div>
          </div>
        </el-container>
      </div>
      <div class="vm-navbar__main">
        <el-container>
          <nuxt-link to="/"
            ><div :class="['vm-navbar__logo', { show: hideNavbarStrip }]">
              <img :src="getImage('vivmeds-logo-white.svg')" alt="" /></div
          ></nuxt-link>
          <div class="vm-navbar__menu-toggler" @click="toggleNav">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </div>
          <ul class="vm-navbar__links">
            <li
              v-for="(link, i) in navLinks"
              :key="i"
              :class="{ active: page === link.url }"
            >
              <nuxt-link :to="link.url">{{ link.label }}</nuxt-link>
            </li>
          </ul>
        </el-container>
      </div>
    </div>
    <div class="vm-navbar-mobile">
      <transition name="backdrop-fade" mode="out-in">
        <div
          v-if="showMobileNav"
          class="vm-navbar-mobile__backdrop"
          @click="toggleNav"
        ></div>
      </transition>
      <div :class="['vm-navbar-mobile__drawer', { open: showMobileNav }]">
        <div class="vm-navbar-mobile__drawer-header">
          <div @click="toggleNav">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#6A8B2C"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </div>
        </div>
        <div class="vm-navbar-mobile__drawer-body">
          <ul class="vm-mobile--menu__links">
            <li
              v-for="(link, i) in navLinks"
              :key="i"
              :class="['nav-item', { active: page === link.url }]"
            >
              <nuxt-link :to="link.url" class="nav-item">{{
                link.label
              }}</nuxt-link>
            </li>
          </ul>
        </div>
        <div class="vm-navbar-mobile__drawer-footer"></div>
      </div>
    </div>
  </div>
</template>

<script>
import image from '@/mixin/image'

export default {
  name: 'Navigation',
  mixins: [image],
  data() {
    return {
      hideNavbarStrip: false,
      navLinks: [
        {
          label: 'Home',
          url: '/',
        },
        {
          label: 'Compounding Services',
          url: '/compounding-services',
        },
        {
          label: 'Integrative Medicine',
          url: '/integrative-medicine',
        },
        {
          label: 'Our Services',
          url: '/our-services',
        },
        {
          label: 'Blog',
          url: '/blog',
        },
        {
          label: 'Covid-19',
          url: '/covid-19',
        },
        {
          label: 'Contact',
          url: '/contact',
        },
      ],
      showMobileNav: false,
      page: '/',
    }
  },
  watch: {
    $route() {
      this.page = this.$route.path
      this.showMobileNav = false
      document.body.style.setProperty('overflow', 'visible', 'important')
    },
  },
  mounted() {
    this.page = this.$route.path
    window.addEventListener('scroll', () => {
      this.hideNavbarStrip = window.pageYOffset > 100
    })
  },
  methods: {
    toggleNav() {
      this.showMobileNav = !this.showMobileNav
      this.showMobileNav
        ? document.body.style.setProperty('overflow', 'hidden', 'important')
        : document.body.style.setProperty('overflow', 'visible', 'important')
    },
  },
}
</script>

<style scoped lang="scss">
@import '../assets/css/components/_navbar';
</style>
