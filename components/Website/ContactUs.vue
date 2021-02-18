<template>
  <el-container class="vm-section">
    <div class="vm-section__heading">
      <h2 class="text-black text-regular">Contact Us</h2>
    </div>
    <div class="vm-contact">
      <div class="vm-contact__info">
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
      <div class="vm-contact__action">
        <el-button round class="el-button--secondary">Contact</el-button>
      </div>
    </div>
  </el-container>
</template>

<script>
export default {
  name: 'ContactUs',
  data() {
    return {}
  },
}
</script>

<style lang="scss">
.vm-contact {
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__info {
    p {
      font-size: 1.3rem;
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

@media (max-width: 1024px) {
  .vm-contact {
    width: 90%;
  }
}

@media (max-width: 600px) {
  .vm-contact {
    flex-direction: column;
    width: 100%;

    &__info {
      margin-bottom: 40px;
      p {
        font-size: 1rem;
        align-items: flex-start;

        &:not(:last-child) {
          margin-bottom: 15px;
        }

        .label {
          min-width: 80px;
          display: block;
        }
      }
    }
  }
}
</style>
