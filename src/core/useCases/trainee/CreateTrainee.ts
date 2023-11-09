import { TraineeRepository } from "../../repositories/TraineeRepository"

type TraineeProps = {
    name: string,
    email: string,
    password: string
}

export class CreateTrainee {
    constructor(
        private traineeRepository: TraineeRepository){
    }

    async execute({name, email, password}: TraineeProps){
        const trainee = await this.traineeRepository.getByEmail(email);

        if(trainee){
            throw new Error("This email is already cadastred.");
        }
        
        return await this.traineeRepository.create({name, email, password});
    }
}