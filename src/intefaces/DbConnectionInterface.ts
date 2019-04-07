import * as Sequelize from "sequelize";
import { ModelsInterface } from "./ModelsInteface";

export interface DbConnection extends ModelsInterface {

    sequelize: Sequelize.Sequelize;

}