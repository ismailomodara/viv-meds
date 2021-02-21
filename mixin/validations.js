export default {
  inputField: [
    {
      required: true,
      message: 'This field is required',
      trigger: 'change',
    },
  ],
  emailField: [
    {
      required: true,
      message: 'This field is required',
      trigger: ['blur', 'change'],
    },
    {
      type: 'email',
      message: 'Email address is not valid',
      trigger: ['blur', 'change'],
    },
  ],
}
