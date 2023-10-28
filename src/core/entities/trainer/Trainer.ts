import { Entity } from "../Entity";
import { Trainee } from "../trainee/Trainee";
import { validateEmail, validatePassword } from "../validations";

export interface TrainerProps {
    name: string,
    email: string,
    password: string,
    trainees: string[]
}

export interface TrainerConstructorProps {
    name: string,
    email: string,
    password: string,
}

export class Trainer extends Entity {
    private props: TrainerProps;

    get name(){
        return this.props.name;
    }
    get email(){
        return this.props.email;
    }
    get password(){
        return this.props.password;
    }
    get trainees(){
        return this.props.trainees;
    }

    set name(name: string){
        this.name = name;
    }
    set email(email: string){
        validateEmail(email);
        this.email = email;
    }
    set password(password: string){
        validatePassword(password);
        this.password = password;
    }
    
    addTrainee(trainee: Trainee){
        this.props.trainees.push(trainee.id);
    }
    removeTrainee(trainee: Trainee){
        const idIndex = this.props.trainees.indexOf(trainee.id);
        if(idIndex < 0) throw new Error("Trainee is not associated to this trainer");
        this.props.trainees.splice(idIndex, 1);
    }

    constructor({name, email, password}: TrainerConstructorProps){
        validateEmail(email);
        validatePassword(password);
        super();
        this.props = {
            name: name, 
            email: email, 
            password:password, 
            trainees: [] 
        };
    }
}