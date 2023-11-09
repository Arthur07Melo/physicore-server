import { uuid } from "../entities/Entity";
import { Trainee } from "../entities/trainee/Trainee"

type TraineeProps = {
    name: string,
    email: string,
    password: string
}

export interface TraineeRepository{
    getAll(): Promise<Trainee[] | null>
    getById(id: uuid): Promise<Trainee | null>;
    getByEmail(email: string): Promise<Trainee | null>;

    create({name, email, password}: TraineeProps): Promise<Trainee>;

    update(id: string, {name, email, password}: TraineeProps): Promise<Trainee>;

    delete(id: string): Promise<null>;
}