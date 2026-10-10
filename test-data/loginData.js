const loginData = [
    {
        scenario: "valid username and password",
        username: "standard_user",
        password: "secret_sauce",
        expectedStatus: "Success"
    },
   
    {
        scenario: "invalid username and password",
        username: "invalid_user",
        password: "wrong_password",
        expectedStatus: "invalid username or password"
    },
      {
        scenario: "Valid username with an invalid password",
        username: "standard_user",
        password: "wrongPass",
        expectedStatus: "password is required"
    },
    {
        scenario: "Empty credentials",
        username: "",
        password: "",
        expectedStatus: "username is required"
    }
];

module.exports = loginData;