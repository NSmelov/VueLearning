Vue.createApp({
    data() {
        return {
            score: 0,
            inputValue: '',
            style: 'text-align: left; font-size: 30px',
            items: [],
        }
    },
    created() {
        console.log('App has been started with Vue3')
    },
    methods: {
        addItem() {
            if (this.inputValue.length == 0) {
                this.inputValue = 'Enter your element'
                setTimeout(() => {
                    this.inputValue = ''
                }, 1000)
            } else {
                this.items.push(this.inputValue)
                this.inputValue = ''
            }
        },
        removeItem() {
            this.items.pop()
        },
        addAndRemove(event) {
            event.preventDefault()
            console.log(event.key)

            if (event.key == 'Enter') {
                if (this.inputValue.length == 0) {
                    this.inputValue = 'Enter your element'
                    setTimeout(() => {
                        this.inputValue = ''
                    }, 1000)
                } else {
                    this.items.push(this.inputValue)
                    this.inputValue = ''
                }
            } else if (event.key == 'Del') {
                this.items.pop()
            }
        },
    },
    computed: {},
}).mount('#app')
