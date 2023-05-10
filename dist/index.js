class User {
    email; //Public is optional
    name;
    token = "";
    city = "Varanasi"; //Not taking in constructor,hence not important to specify while creating object
    constructor(email, name) {
        this.email = email;
        this.name = name;
    }
}
//How modern devs write TS classes, compact way
class Usr {
    email;
    name;
    token;
    _courseCount = 1;
    city = "Varanasi";
    constructor(email, name, token) {
        this.email = email;
        this.name = name;
        this.token = token;
    }
    //Getter
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get getCourseCount() {
        return this._courseCount;
    }
    set setCourseCount(courseNum) {
        this._courseCount = courseNum;
    }
    deleteToken() {
        console.log("Token Deleted");
    }
}
const harsh = new User("h@s.com", "Harsh");
console.log(`${harsh.name}   ${harsh.city}  ${harsh.email}`);
