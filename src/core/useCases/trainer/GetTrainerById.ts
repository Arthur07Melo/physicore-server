import { uuid } from "../../entities/Entity";
import { TrainerRepository } from "../../repositories/TrainerRepository"

export class GetTrainerById {
    constructor(
        private trainerRepository: TrainerRepository){
    }

    async execute(id: uuid){
        const trainer = await this.trainerRepository.getById(id);
        if(!trainer) throw new Error("This trainer is not cadastred");
        return trainer;
    }
}