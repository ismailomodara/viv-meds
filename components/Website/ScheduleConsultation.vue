<template>
  <div class="vm-schedule">
    <el-container>
      <div class="vm-schedule__info">
        <p><slot /></p>
      </div>
      <div class="vm-newsletter__action">
        <el-button round class="el-button--secondary">{{
          buttonText || 'Schedule a Free Consultation'
        }}</el-button>
      </div>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'ScheduleConsultation',
  props: {
    buttonText: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: '',
    },
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss">
.vm-schedule {
  height: 200px;
  background: #6a8b2c;
  padding: 0 20px;
  width: 100%;
  position: relative;

  .el-container {
    width: 70%;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
  }

  &__info {
    p {
      color: #fff;
      font-size: 1.125rem;
      font-weight: 600;

      span {
        color: #fdc500 !important;
        text-decoration: underline;
      }
    }
  }
}

@media (max-width: 1024px) {
  .vm-schedule {
    .el-container {
      width: 100%;
    }
  }
}

@media (max-width: 600px) {
  .vm-schedule {
    height: auto !important;
    padding: 30px 15px;

    .el-container {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    &__info {
      margin-bottom: 20px !important;

      p {
        font-size: 1rem;
      }
    }
  }
}
</style>
