import { TraineeRepository } from "../../repositories/TraineeRepository";

export class GetAllTrainees{
    constructor(
        private traineeRepository: TraineeRepository
    ){}

    async execute(){
        const trainees = this.traineeRepository.getAll();
        if(!trainees) throw new Error("There is no trainee cadastrated");
        return trainees;
    }
}