const generator = require ("generate-password");

function generatePassword () {
    const pass = generator.generate({
        length : 12,
        numbers : true,
        symbols : true,
        uppercase : true,
        lowercase : true
    });

    console.log("generate-password", pass)
}
generatePassword ();