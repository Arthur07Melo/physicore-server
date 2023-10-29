import { Entity } from "../Entity";
import { validateEmail, validatePassword } from "../validations";
import { WeightSheet } from "../weightSheet/WeightSheet";

export interface TraineeProps {
    name: string;
    email: string;
    password: string;
    sheets: WeightSheet[]
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
    get sheets(){
        return this.props.sheets;
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

    public addSheet(sheet: WeightSheet){
        if(this.props.sheets.length >= 15){
            throw new Error("A trainee cannot have more than 15 sheets");
        }
        this.props.sheets.push(sheet);
    }

    constructor(props: {name:string, email:string, password:string}){
        validateEmail(props.email);
        validatePassword(props.password);
        super();
        this.props = {
            name: props.name,
            email: props.email,
            password: props.password,
            sheets: []
        };
    }
}