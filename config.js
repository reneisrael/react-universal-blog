// config.js
export default {
  site: {
    title: 'Noticias'
  },
  bucket: {
    slug: process.env.COSMIC_BUCKET || 'noticias',
    media_url: 'https://cosmicjs.com/uploads'
  }
}
