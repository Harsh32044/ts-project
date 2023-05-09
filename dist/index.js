var User = /** @class */ (function () {
    function User(email, name) {
        this.city = "Varanasi";
        this.email = email;
        this.name = name;
    }
    return User;
}());
var harsh = new User("h@s.com", "Harsh");
console.log("".concat(harsh.name, "   ").concat(harsh.city, "  ").concat(harsh.email));
