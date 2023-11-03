import { TrainerRepository } from "../../repositories/TrainerRepository";

export class GetAllTrainers{
    constructor(
        private trainerRepository: TrainerRepository
    ){}

    async execute(){
        const trainers = await this.trainerRepository.getAll();
        if(!trainers) throw new Error("There is no Trainers cadastred");
        return trainers;
    }
}