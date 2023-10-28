import { Entity } from "../Entity";
import { validateEmail, validatePassword } from "../validations";

export interface TraineeProps {
    name: string;
    email: string;
    password: string;
}

export class Trainee extends Entity {
    private props: TraineeProps;

    get name(){
        return this.props.name;    
    }
    get email(){
        return this.props.email;
    }
    get password(){
        return this.props.password
    }

    set name(name: string){
        this.name = name;
    }

    set email(email: string){
        validateEmail(email);
        this.email = email;
    }

    set password(pwd: string){
        validatePassword(pwd);
        this.props.password = pwd;
    }

    constructor(props: TraineeProps){
        validateEmail(props.email);
        validatePassword(props.password);
        super();
        this.props = props;
    }
}