// create login tracker
function createLoginTracker(userInfo) {
  username = userInfo.username;
  password = userInfo.password;

    let attemptCount = 0; 
// track login attempts
    const loginAttempt = (passwordAttempt) => {
        attemptCount++; 
// lock account after 3 failed attempts
        if (attemptCount > 3) {
            return "Account locked due to too many failed login attempts";
        }
// check password
        if (passwordAttempt === userInfo.password) {
            return "Login successful";
        } else {
            return `Attempt ${attemptCount}: Login failed`;
        }
    };
    return loginAttempt; 
}
// tests to make sure it works
const user = { username: "user1", password: "password123" };
const login = createLoginTracker(user);

console.log(login("wrong"));
console.log(login("wrong2"));
console.log(login("password123"));
console.log(login("anotherWrong")); 
console.log(login("password123"));    

module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};