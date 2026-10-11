const loginData = [
    {
        scenario: "should login successfully with valid credentials",
        username: "standard_user",
        password: "secret_sauce",
        expectedStatus: "Success"
    },
    
    {
        scenario: "should display an error for invalid credentials",
        username: "invalid_user",
        password: "wrong_password",
        expectedStatus: "invalid username or password"
    },
    {
        scenario: "should display an error when the password is incorrect",
        username: "standard_user",
        password: "wrong_password",
        expectedStatus: "invalid username or password"
    },
    {
        scenario: "should display an error when the password is empty",
        username: "standard_user",
        password: "",
        expectedStatus: "password is required"
    },
    {
        scenario: "should display an error when both credentials are empty",
        username: "",
        password: "",
        expectedStatus: "username is required"
    }
];

module.exports = loginData;