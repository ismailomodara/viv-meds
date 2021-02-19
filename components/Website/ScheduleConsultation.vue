<template>
  <div class="vm-schedule">
    <el-container>
      <div class="vm-schedule__info">
        <p>
          To learn more about our {{ type }}, please<br />
          <span>Schedule a Free Consultation</span> with the Pharmacist or
          <br />Call us at <span>940-226-4849</span>
        </p>
      </div>
      <div class="vm-newsletter__action">
        <el-button round class="el-button--secondary"
          >Schedule a Free Consultation</el-button
        >
      </div>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'ScheduleConsultation',
  props: {
    type: {
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

<style lang="scss" scoped>
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
        color: #fdc500;
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

@media (max-width: 400px) {
  .vm-schedule {
    height: auto !important;
    padding: 30px 0;

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
