import { Trainee } from "../trainee/Trainee"
import { WeightSheet } from "./WeightSheet"

let trainee: Trainee;

beforeEach(()=>{
    trainee = new Trainee({
        name: "Joseph Doe",
        email: "JosephDoe@hotmail.com",
        password: "Jdoe1234"
    });
})

test("Sheet created properly", ()=>{
    const weightSheet = new WeightSheet({
        owner: trainee.id,
        title: "Treino de Peito"
    });

    expect(weightSheet).toBeTruthy();
})

test("Exercise is properly added to the sheet", ()=>{
    const weightSheet = new WeightSheet({
        owner: trainee.id,
        title: "Treino de Peito"
    });

    weightSheet.addExercise("supino reto", 60.5);
    expect(weightSheet.sheet["supino reto"]).toEqual(60.5);
})

test("Exercise is properly removed to the sheet", ()=>{
    const weightSheet = new WeightSheet({
        owner: trainee.id,
        title: "Treino de Peito"
    });

    weightSheet.addExercise("supino reto", 60.5);
    weightSheet.addExercise("voador", 70);
    weightSheet.addExercise("supino inclinado", 30);

    weightSheet.removeExercise("voador");

    expect(weightSheet.sheet).toEqual({
        "supino reto": 60.5,
        "supino inclinado": 30
    });
})