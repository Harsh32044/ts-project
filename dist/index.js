class User {
    email;
    name;
    city = "Varanasi"; //Not taking in constructor,
    constructor(email, name) {
        this.email = email;
        this.name = name;
    }
}
const harsh = new User("h@s.com", "Harsh");
console.log(`${harsh.name}   ${harsh.city}  ${harsh.email}`);
