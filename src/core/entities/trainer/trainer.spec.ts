import { Trainer } from "./Trainer";


test("Create trainer sucessfully", ()=>{
    const trainer = new Trainer({
        name: "John Doe",
        email: "JohnDoe@hotmail.com",
        password: "doe1234"
    });

    expect(trainer).toBeTruthy();
})

test("Cannot create trainer with invalid email without '@'", ()=>{
    expect(()=>{
        return new Trainer({
            name: "John Doe",
            email: "JohnDoehotmail.com",
            password: "doe1234"
        });
    }).toThrow()
})

test("Cannot create trainer with invalid email without '.'", ()=>{
    expect(()=>{
        return new Trainer({
            name: "John Doe",
            email: "JohnDoe@hotmailcom",
            password: "doe1234"
        });
    }).toThrow()
})

test("Cannot create trainer with invalid password (lesser then 4 digits)", ()=>{
    expect(()=>{
        return new Trainer({
            name: "John Doe",
            email: "JohnDoe@hotmail.com",
            password: "123"
        });
    }).toThrow()
})

test("Cannot create trainee with invalid password (greater then 25 digits)", ()=>{
    expect(()=>{
        return new Trainer({
            name: "John Doe",
            email: "JohnDoe@hotmail.com",
            password: "doe1234john12435345234556234632634532"
        });
    }).toThrow()
})

test("Valid Trainee properly added")