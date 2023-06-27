console.log('JS OK', Vue)

// Initialize app
const app = Vue.createApp ({
    data: () => {
        return {
            eMail: [],
            eMailNumber: 10,
            error: ''

        }
    },

    computed: {
        endEmailArray () {
            return this.eMail.length === this.eMailNumber 
        }
    },

    methods: {
        getRandomEmail () {
            for(let i = 0; i < this.eMailNumber; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((res) => {
                        const randomEmail = res.data.response
                        this.eMail.push(randomEmail)
                    })
                    .catch(() => {
                        this.error = 'La pagina non è stata caricata correttamente'
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