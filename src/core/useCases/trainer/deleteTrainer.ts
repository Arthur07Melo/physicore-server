import { TrainerRepository } from "../../repositories/TrainerRepository"

export class DeleteTrainer {
    constructor(
        private trainerRepository: TrainerRepository){
    }

    async execute(id: string){
        const trainer = this.trainerRepository.getById(id);

        if(!trainer){
            throw new Error("Trainer does not exists.");
        }

        return await this.trainerRepository.delete(id);
    }
}