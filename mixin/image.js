const CLOUDINARY_URL =
  'https://res.cloudinary.com/vivmeds-pharmacy-corporations/image/upload/f_auto,q_auto/v1631595702/website'

export default {
  methods: {
    getLogo(type) {
      return type === 'white'
        ? `${CLOUDINARY_URL}/vivmeds-logo-white_zg7jws.svg`
        : `${CLOUDINARY_URL}/vivmeds-logo_vskuwv.svg`
    },
    getImage(image, folder) {
      if (folder) {
        return `${CLOUDINARY_URL}/${folder}/${image}`
      }
      return `${CLOUDINARY_URL}/${image}`
    },
    getBlogImage(image) {
      return image
    },
  },
}
