class User {
    email: string
    name: string
    readonly city: string = "Varanasi" //Not taking in constructor,hence not important to specify while creating object
    constructor(email: string, name: string) {
        this.email = email
        this.name = name
    }
}

const harsh = new User ("h@s.com", "Harsh")
console.log(`${harsh.name}   ${harsh.city}  ${harsh.email}`)