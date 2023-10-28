import { TrainerRepository } from "../../repositories/TrainerRepository"

type TrainerProps = {
    name: string,
    email: string,
    password: string
}

export class CreateTrainer {
    constructor(
        private trainerRepository: TrainerRepository){
    }

    async execute({name, email, password}: TrainerProps){
        const trainer = await this.trainerRepository.getByEmail(email);

        if(trainer){
            throw new Error("This email is already cadastred.");
        }
        
        return await this.trainerRepository.create({name, email, password});
    }
}