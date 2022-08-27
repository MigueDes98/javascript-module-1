function getUsername (userName, usertype) {
    if ((userName.length > 5 && userName.length < 10 
        && userName.charAt(0) === userName.charAt(0).toUpperCase())
        || (usertype === "admin" || usertype === "manager")){
        return "Username valid";
    }
    else {
        return "Username invalid"
    }
}
console.log(getUsername("alibaba", "manager"));
console.log(getUsername ("Juan", "user"));
console.log(getUsername("Miguel", "user"));
console.log(getUsername("Miguel", "admin"));