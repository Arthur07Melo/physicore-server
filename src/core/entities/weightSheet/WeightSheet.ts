import { Entity, uuid } from "../Entity";

interface WeightSheetProps {
    owner: uuid,  //owner ID
    title: string,
    sheet: Record<string, number>
}


export class WeightSheet extends Entity {
    private props: WeightSheetProps;

    get owner(){
        return this.props.owner;
    }
    get title(){
        return this.props.title;
    }
    get sheet(){
        return this.props.sheet;
    }

    set title(title: string){
        this.props.title = title;
    }
    
    public addExercise(exercise: string, weight: number){
        this.sheet[exercise] = weight;
    }
    public removeExercise(exercise: string){
        delete this.sheet[exercise];
    }

    constructor({owner, title}:{owner: uuid, title: string}){
        super();
        this.props = {
            owner: owner,
            title: title,
            sheet: {}
        };
    }
}