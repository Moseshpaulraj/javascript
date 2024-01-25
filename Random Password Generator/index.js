function passwordgenerate(length, includeuppercase, includelowercase, includenumbers, includesymbols) {

    const uppercasechars = "ABCDEFGHIKLMNOPQRSTUVWXYZ";
    const lowercasechars = "abcdefghijklmnopqrstuvwxyz";
    const numberchars = "0123456789";
    const symbolchars = "!@#$%&*_+=?";

    let allowedchars = "";
    let password = "";

    allowedchars += includeuppercase ? uppercasechars : "";
    allowedchars += includelowercase ? lowercasechars : "";
    allowedchars += includenumbers ? numberchars : "";
    allowedchars += includesymbols ? symbolchars : "";

    console.log(allowedchars);

    if (length <= 8) {
        return "password must be above 8 characters :";
    }
    if (allowedchars.length === 0) {
        return "atlest one set of character need to be selested";

    }
    for (let i = 0; i < length; i++) {
        const randomindex = Math.floor(Math.random() * allowedchars.length);
        password += allowedchars[randomindex];
    }

    return password;


}
const passwordlength = 10;
const includeuppercase = true;
const includelowercase = true;
const includenumbers = true;
const includesymbols = true;
const password = passwordgenerate(passwordlength, includeuppercase, includelowercase, includenumbers, includesymbols);
console.log(`generated password : ${password}`);

