export default {
  methods: {
    getImage(image, folder) {
      if (folder) {
        return require(`@/assets/img/${folder}/${image}`)
      } else {
        return require(`@/assets/img/${image}`)
      }
    },
  },
}
