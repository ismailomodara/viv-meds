const PROXY = 'https://cors-anywhere.herokuapp.com/'

const BASE_URL = 'http://vivmeds.000webhostapp.com/api'
const URL = PROXY + BASE_URL

export const _POST = (url, payload) => {
  return fetch(`${URL}/${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
}

export default {
  newsletter(payload) {
    return _POST('news-letter', payload)
  },

  covid(payload) {
    return _POST('covid19-vaccine-signup', payload)
  },

  create_patient_information(payload) {
    return _POST('create_patient_information', payload)
  },

  automatic_refill_request(payload) {
    return _POST('automatic-refill-request', payload)
  },

  schedule_wellness_consultation(payload) {
    return _POST('schedule-wellness-consultation', payload)
  },

  prescription_refill(payload) {
    return _POST('prescription-refill', payload)
  },

  contact(payload) {
    return _POST('contact-us', payload)
  },
}
