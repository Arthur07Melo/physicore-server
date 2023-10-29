import crypto from "crypto";

export type uuid = `${string}-${string}-${string}-${string}-${string}`

export class Entity {
    public readonly idAtribbute: uuid;

    get id(){
        return this.idAtribbute;
    }

    constructor(){
        this.idAtribbute = crypto.randomUUID();
    }
}