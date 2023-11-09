import { uuid } from "../entities/Entity";
import { WeightSheet } from "../entities/weightSheet/WeightSheet";

type WeightSheetProps = {
    title: String,
    sheet: Record<string, number>
}

export interface WeightSheetRepository {
    getAllByTrainer(trainerId: uuid): Promise<WeightSheet[] | null>;
    getSpecificById(trainerId: uuid, id: uuid): Promise<WeightSheet>;
    create(trainerId: uuid, props: WeightSheetProps): Promise<WeightSheet>;
    update(trainerId: uuid, props: WeightSheetProps): Promise<WeightSheet>;
    delete(sheetId: uuid): Promise<null>;
}