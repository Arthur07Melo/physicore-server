import { uuid } from "../../entities/Entity";
import { TraineeRepository } from "../../repositories/TraineeRepository";

export class GetTraineeById {
    constructor(
        private traineeRepository: TraineeRepository
    ){}

    async execute(id: uuid){
        const trainee = this.traineeRepository.getById(id);
        if(!trainee) throw new Error("This trainee is not cadastred");
        return trainee;
    }
}