const checkoutData = {
    validCustomer: {
        firstName: "Fizer",
        lastName: "Khan",
        postalCode: "600001"
    },
        emptyCustomer: {
            firstName: "",
              lastName: "",
             postalCode: ""
        },

missingFirstName: {
     firstName: "",
    lastName: "Jothiram",
    postalCode: "600001"
},

    missingLastName: {
        firstName: "Selvam",
         lastName: "",
        postalCode: "600001"
    },

       missingPostalCode: {
           firstName: "Ubais",
           lastName: "Ahamed",
        postalCode: ""
    }
};

module.exports = checkoutData;
