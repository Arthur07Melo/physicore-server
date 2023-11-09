import { TraineeRepository } from "../../repositories/TraineeRepository"

type TraineeProps = {
    name: string,
    email: string,
    password: string
}

export class UpdateTrainer {
    constructor(
        private traineeRepository: TraineeRepository){
    }

    async execute({name, email, password}: TraineeProps){
        const trainee = await this.traineeRepository.getByEmail(email);

        if(!trainee) throw new Error("Trainee is not registred.")
        
        return await this.traineeRepository.update(trainee.id, {name, email, password});
    }
}