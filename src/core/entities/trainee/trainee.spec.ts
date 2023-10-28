import { Trainee } from "./Trainee";

test("Create trainee sucessfully", ()=>{
    const trainee = new Trainee({
        name: "John Doe",
        email: "JohnDoe@hotmail.com",
        password: "doe1234"
    });

    expect(trainee).toBeTruthy();
})

test("Cannot create trainee with invalid email without '@'", ()=>{
    expect(()=>{
        return new Trainee({
            name: "John Doe",
            email: "JohnDoehotmail.com",
            password: "doe1234"
        });
    }).toThrow()
})

test("Cannot create trainee with invalid email without '.'", ()=>{
    expect(()=>{
        return new Trainee({
            name: "John Doe",
            email: "JohnDoe@hotmailcom",
            password: "doe1234"
        });
    }).toThrow()
})

test("Cannot create trainee with invalid password (lesser then 4 digits)", ()=>{
    expect(()=>{
        return new Trainee({
            name: "John Doe",
            email: "JohnDoe@hotmail.com",
            password: "123"
        });
    }).toThrow()
})

test("Cannot create trainee with invalid password (greater then 25 digits)", ()=>{
    expect(()=>{
        return new Trainee({
            name: "John Doe",
            email: "JohnDoe@hotmail.com",
            password: "doe1234john12435345234556234632634532"
        });
    }).toThrow()
})