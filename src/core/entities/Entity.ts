import crypto from "crypto";

export class Entity {
    public readonly idAtribbute: string;

    get id(){
        return this.idAtribbute;
    }

    constructor(){
        this.idAtribbute = crypto.randomUUID();
    }
}