import { TrainerRepository } from "../../repositories/TrainerRepository"

export class GetTrainerById {
    constructor(
        private trainerRepository: TrainerRepository){
    }

    async execute(id: string){
        const trainer = await this.trainerRepository.getById(id);
        return trainer;
    }
}