import { ModelsInterface } from "./ModelsInteface";

export interface BaseModelInterface {

    prototype?;
    associate?(models: ModelsInterface): void;

}