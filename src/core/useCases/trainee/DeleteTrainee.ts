import { uuid } from "../../entities/Entity";
import { TraineeRepository } from "../../repositories/TraineeRepository"

export class DeleteTrainee {
    constructor(
        private traineeRepository: TraineeRepository){
    }

    async execute(id: uuid){
        const trainee = this.traineeRepository.getById(id);

        if(!trainee){
            throw new Error("Trainee does not exists.");
        }

        return await this.traineeRepository.delete(id);
    }
}