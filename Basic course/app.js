const App = {
    data() {
        return {
            title: "Note's list",
            placeholder: 'Enter your note',
            inputValue: '',
            notes: [],
        }
    },
    methods: {
        inputChangeHandler(event) {
            this.inputValue = event.target.value
        },
        addNewNote() {
            if (this.inputValue == '') {
                window.alert('Please, write your note')
            } else {
                this.notes.push(this.inputValue)
                setTimeout(() => {
                    this.inputValue = ''
                }, 100)
            }
        },
        toUpperCase(item) {
            return item.toUpperCase()
        },
        inputKeyPress(event) {
            if (event.key == 'Enter') {
                if (this.inputValue == '') {
                    this.placeholder = 'NoNoNoNo'
                    setTimeout(() => {
                        this.placeholder = 'Enter your node'
                    }, 1500)
                } else {
                    this.addNewNote()
                }
            }
        },
        removeNote(idx, $event) {
            this.notes.splice(idx, 1)
        },
    },
    computed: {
        doubled() {
            console.log('toDoubled')
            return this.notes.length * 2
        },
    },
    watch: {
        inputValue(value) {
            if (value.length > 20) {
                this.inputValue = ''
            }
        },
    },
}

Vue.createApp(App).mount('#app')
