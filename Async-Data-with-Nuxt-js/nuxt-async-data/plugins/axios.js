export default function ({$axios}) {
  $axios.setHeader('AUTHORIZATION', 'Bearer ln123ncoimokmsdfoi')
  $axios.onRequest(config => {
    console.log('Making request to ' + config.url)
  })
}
