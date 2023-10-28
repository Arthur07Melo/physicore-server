export function validatePassword(pwd: string){
    if(pwd.length < 4) throw new Error("Password size must be greater than 4");
    else if(pwd.length > 25) throw new Error("Password size must be lesser than 25");
}

export function validateEmail(email: string){
    if(!email.includes("@")) throw new Error("Email format invalid");
    else if(!email.includes(".")) throw new Error("Email format invalid");
}