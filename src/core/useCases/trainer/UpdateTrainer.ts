import { TrainerRepository } from "../../repositories/TrainerRepository"

type TrainerProps = {
    name: string,
    email: string,
    password: string
}

export class UpdateTrainer {
    constructor(
        private trainerRepository: TrainerRepository){
    }

    async execute({name, email, password}: TrainerProps){
        const trainer = await this.trainerRepository.getByEmail(email);

        if(!trainer) throw new Error("Trainer is not registred.")
        
        return await this.trainerRepository.update(trainer.id, {name, email, password});
    }
}