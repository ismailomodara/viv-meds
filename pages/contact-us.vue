<template>
  <div>
    <PageHeader title="Contact Us" />
    <GetDirections :show-title="false" :height="600" class="p-0" />
    <el-container class="vm-section">
      <div class="vm-contact">
        <div class="vm-contact__bg"></div>
        <div class="vm-contact__content">
          <h4>Contact Us</h4>
          <div class="vm-contact__content-section">
            <p>
              <span class="label">Phone</span>
              <span>940-226-4849</span>
            </p>
            <p>
              <span class="label">Email</span>
              <span>pharmacy@vivmeds.com</span>
            </p>
            <p>
              <span class="label">Address</span>
              <span>3303 Unicorn Lake Blvd Suite 280 Denton TX 76210</span>
            </p>
          </div>
          <div class="vm-contact__content-section">
            <h5>Pharmacy Hours</h5>
            <p>
              <span class="label">Mon - Fri</span>
              <span>9AM - 6PM</span>
            </p>
            <p>
              <span class="label">Saturday</span>
              <span>10AM - 2PM</span>
            </p>
            <p>
              <span class="label">Sunday</span>
              <span>10AM - 2PM</span>
            </p>
          </div>
        </div>
      </div>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'ContactUs',
  data() {
    return {
      title: 'Contact Us',
    }
  },
}
</script>

<style lang="scss" scoped>
.vm-contact {
  width: 100%;
  position: relative;
  padding-bottom: 100px;

  &__bg {
    background: #e1ffa8;
    height: 400px;
    width: 90%;
    position: absolute;
  }

  &__content {
    position: relative;
    top: 100px;
    left: 100px;
    background: #fff;
    padding: 40px;
    width: calc(100% - 100px);
    box-shadow: 2px 7px 33px rgba(196, 196, 196, 0.5);

    h4 {
      color: #6a8b2c;
      margin-bottom: 30px;
    }

    &-section {
      margin: 0 40px 40px;

      h5 {
        margin-bottom: 20px;
      }

      a {
        color: #292222;
        display: block;
        margin-bottom: 15px;
      }

      p {
        font-size: 1rem;
        color: #292222;
        font-weight: 600;
        display: flex;
        align-items: center;

        &:not(:last-child) {
          margin-bottom: 15px;
        }

        .label {
          min-width: 120px;
          display: block;
        }
      }
    }
  }
}

@media (max-width: 600px) {
  .vm-contact {
    padding-bottom: 50px;

    &__bg {
      display: none;
    }

    &__content {
      top: 0;
      left: 0;
      width: 100%;
      padding: 20px;

      &-section {
        margin: 0 0 20px;

        p {
          flex-direction: column;
          align-items: flex-start;
        }
      }
    }
  }
}
</style>
