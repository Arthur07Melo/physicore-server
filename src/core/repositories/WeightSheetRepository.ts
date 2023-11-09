import { uuid } from "../entities/Entity";
import { WeightSheet } from "../entities/weightSheet/WeightSheet";

type WeightSheetProps = {
    title: String,
    sheet: Record<string, number>
}

export interface WeightSheetRepository {
    getAllByTrainer(id: uuid): Promise<WeightSheet[] | null>;
    createWeightSheet(trainerId: uuid, props: WeightSheetProps): Promise<WeightSheet>;
    updateWeightSheet(trainerId: uuid, props: WeightSheetProps): Promise<WeightSheet>;
    deleteWeightSheet(sheetId: uuid): Promise<null>;
}