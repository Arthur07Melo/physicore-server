import { WeightSheet } from "../weightSheet/WeightSheet";
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

test("Sheet is being properly added to a trainee", ()=>{
    const trainee = new Trainee({
        name: "John Doe",
        email: "JohnDoe@hotmail.com",
        password: "doe1234"
    });

    const weightSheet = new WeightSheet({
        owner: trainee.id,
        title: "Treino de Peito"
    });

    trainee.addSheet(weightSheet);

    expect(trainee.sheets[0]).toEqual(weightSheet);
})

test("Cannot add more than 15 sheets for a single trainee", ()=>{
    const trainee = new Trainee({
        name: "John Doe",
        email: "JohnDoe@hotmail.com",
        password: "doe1234"
    });

    expect(()=>{
        for(let i = 0; i<16; i++){
            trainee.addSheet(new WeightSheet({
                owner: trainee.id,
                title: `sheet ${i}`
            }));
        }
    }).toThrow();
})