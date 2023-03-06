import { IUnities } from './../interfaces/Tables';
import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../database';
import { Tables } from '../constant/TABLES';

type UnitiesCreationAttributes = Optional<IUnities, 'id'>;

class Unity extends Model<IUnities, UnitiesCreationAttributes> { }

Unity.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: false,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING(20)
    },
    unity: {
        type: DataTypes.BOOLEAN
    }
}, {
    sequelize,
    tableName: Tables.UNITIES,
    timestamps: false
})

export = Unity