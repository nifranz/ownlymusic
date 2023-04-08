// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    app: {
        head: {
            script: [
                {
                    src: "https://kit.fontawesome.com/180cb78dc2.js"
                }
            ],
            meta: [
            ]
        }
    }

})
