export default {
  methods: {
    getImage(image, folder) {
      if (image.includes('http')) {
        return image
      } else if (folder) {
        return require(`@/assets/img/${folder}/${image}`)
      } else {
        return require(`@/assets/img/${image}`)
      }
    },
  },
}
