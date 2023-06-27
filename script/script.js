console.log('JS OK', Vue)

// Initialize app
const app = Vue.createApp ({
    data: () => {
        return {
            eMail: [],
            eMailNumber: 10
        }
    },

    methods: {
        getRandomEmail () {
            for(let i = 0; i < 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((res) => {
                        const randomEmail = res.data.response
                        this.eMail.push(randomEmail)
                    })
            }
        }
    },

    created () {
        this.getRandomEmail()
    }
})


// Mount App
app.mount('#root')