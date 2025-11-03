// create login tracker
function createLoginTracker(userInfo) {
  username = userInfo.username;
  password = userInfo.password;

    let attemptCount = 0; 

    const loginAttempt = (passwordAttempt) => {
        attemptCount++; 

        if (attemptCount > 3) {
            return "Account locked due to too many failed login attempts";
        }

        if (passwordAttempt === userInfo.password) {
            return "Login successful";
        } else {
            return `Attempt ${attemptCount}: Login failed`;
        }
    };
    return loginAttempt; 
}
// test to make sure it works
const user = { username: "user1", password: "password123" };
const login = createLoginTracker(user);

console.log(login("wrong"));      // Attempt 1: Login failed
console.log(login("wrong2"));     // Attempt 2: Login failed
console.log(login("password123"));    // Login successful
console.log(login("anotherWrong"));   // Attempt 4 → Account locked
console.log(login("password123"));    // Still locked

module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};