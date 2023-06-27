console.log('JS OK', Vue)

// Initialize app
const app = Vue.createApp ({
    data: () => {
        return {
            eMail: [],
            eMailNumber: 10,
            endGetEmail: false
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
                        alert('Errore')
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