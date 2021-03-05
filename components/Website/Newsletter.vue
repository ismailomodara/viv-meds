<template>
  <div class="vm-newsletter">
    <el-container>
      <div class="vm-newsletter__info">
        <h2>Subscribe to our Newsletter</h2>
        <p>
          Sign up today for free and be the first to receive notifications on
          new updates.
        </p>
      </div>
      <div class="vm-newsletter__form">
        <el-form ref="subscribeForm" :model="form" label-position="top">
          <el-form-item label="Email" prop="email" :rules="rules">
            <div class="is-flex">
              <el-input
                v-model="form.email"
                placeholder="you@mail.com"
              ></el-input>
              <el-button
                round
                class="el-button--secondary ml-2"
                :loading="subscribing"
                @click="submit"
                >Submit</el-button
              >
            </div>
          </el-form-item>
        </el-form>
      </div>
    </el-container>
  </div>
</template>

<script>
import request from '@/controller/request'

export default {
  name: 'Newsletter',
  data() {
    return {
      form: {
        email: '',
      },
      rules: [
        {
          required: true,
          message: 'Please enter your email',
          trigger: 'blur',
        },
        {
          type: 'email',
          message: 'Email address is not valid',
          trigger: ['blur', 'change'],
        },
      ],
      subscribing: false,
    }
  },
  methods: {
    submit() {
      this.$refs.subscribeForm.validate((valid) => {
        if (!valid) {
          return false
        }
        this.subscribing = true
        request
          .newsletter(this.form)
          .then((response) => {
            if (response.data.success) {
              this.$message.success(
                'You have successfully subscribed to our newsletter.'
              )
              this.subscribing = false
              this.$refs.contactForm.resetFields()
            } else {
              this.$message.error(response.data.message)
              this.subscribing = false
            }
          })
          .catch(() => {
            this.subscribing = false
            this.$message.error('An error occurred, please again')
          })
        return true
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.vm-newsletter {
  height: 400px;
  background: #6a8b2c;
  padding: 0 20px;
  width: 100%;
  position: relative;
  display: flex;

  .el-container {
    flex-direction: column;
    justify-content: center;

    > * {
      width: 50%;
      margin: 0 auto;
    }
  }

  &__info {
    margin-bottom: 40px !important;
    text-align: center;

    h2 {
      color: #fff;
      margin-bottom: 10px;
    }

    p {
      color: #fff;
      font-size: 1.125rem;
    }
  }

  &__form {
    h3,
    p {
      color: #fff;
    }
  }
}

@media (max-width: 1200px) {
  .el-container > * {
    width: 75% !important;
  }
}

@media (max-width: 992px) {
  .el-container > * {
    width: 90% !important;
  }
}

@media (max-width: 400px) {
  .vm-newsletter {
    height: auto !important;
    padding: 30px 0;

    .el-container > * {
      width: 100% !important;
    }

    &__info {
      margin-bottom: 20px !important;

      p {
        font-size: 1rem;
      }
    }

    &__form .is-flex {
      flex-direction: column;
      align-items: center;

      .el-button {
        margin-top: 10px;
      }
    }
  }
}
</style>
