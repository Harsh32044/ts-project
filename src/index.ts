class User {
    email: string
    name: string
    readonly city: string = "Varanasi"
    constructor(email: string, name: string) {
        this.email = email
        this.name = name
    }
}

const harsh = new User ("h@s.com", "Harsh")
console.log(`${harsh.name}   ${harsh.city}  ${harsh.email}`)