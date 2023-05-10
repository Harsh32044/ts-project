class User {
    public email: string //Public is optional
    public name: string
    private token: string = ""
    readonly city: string = "Varanasi" //Not taking in constructor,hence not important to specify while creating object
    constructor(email: string, name: string) {
        this.email = email
        this.name = name
    }
}

//How modern devs write TS classes, compact way

class Usr {

    private _courseCount = 1
    readonly city: string = "Varanasi"
    constructor(
        public email: string,
        public name: string,
        private token: string
    ) {
    }

    //Getter
    get getAppleEmail(): string {
        return `apple${this.email}`
    }

    get getCourseCount(): number {
        return this._courseCount
    }

    set setCourseCount(courseNum: number){
        this._courseCount = courseNum
    }

    private deleteToken() {
        console.log("Token Deleted")
    }

}

const harsh = new User ("h@s.com", "Harsh")
console.log(`${harsh.name}   ${harsh.city}  ${harsh.email}`)