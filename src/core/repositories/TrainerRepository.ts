import { Trainer } from "../entities/trainer/Trainer"

type TrainerProps = {
    name: string,
    email: string,
    password: string
}

export interface TrainerRepository{
    getAll(): Promise<Trainer[] | null>
    getById(id: string): Promise<Trainer | null>;
    getByEmail(email: string): Promise<Trainer | null>;

    create({name, email, password}: TrainerProps): Promise<Trainer | null>;

    update(id: string, {name, email, password}: TrainerProps): Promise<Trainer | null>;

    delete(id: string): Promise<null>;
}