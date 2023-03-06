import { Columns, Restrictions } from '../constant/TABLES';
import { IInvoiceItems } from '../interfaces/Tables';
import { Tables } from '../constant/TABLES';
import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../database';
import Invoice from './Invoice';
import IvaType from './IvaType';

type InvoiceItemCreationAttributes = Optional<IInvoiceItems, 'id'>;

class InvoiceItem extends Model<IInvoiceItems, InvoiceItemCreationAttributes> { }

InvoiceItem.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    invoice_id: {
        type: DataTypes.INTEGER,
    },
    detail: {
        type: DataTypes.STRING(250)
    },
    net_amount: {
        type: DataTypes.DOUBLE
    },
    taxes_amount: {
        type: DataTypes.DOUBLE
    },
    discount_amount: {
        type: DataTypes.DOUBLE
    },
    gross_amount: {
        type: DataTypes.DOUBLE
    },
    quantity: {
        type: DataTypes.INTEGER
    },
    iva_id: {
        type: DataTypes.INTEGER
    },
    unity_id: {
        type: DataTypes.INTEGER
    },
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
}, {
    sequelize,
    tableName: Tables.INVOICE_ITEMS,
    timestamps: false
})

InvoiceItem.hasMany(Invoice, {
    foreignKey: Columns.invoices.id,
    sourceKey: Columns.invoiceItems.invoice_id,
    onDelete: Restrictions.CASCADE,
    onUpdate: Restrictions.CASCADE
})

Invoice.belongsTo(InvoiceItem, {
    foreignKey: Columns.invoices.id,
    targetKey: Columns.invoiceItems.invoice_id
})

InvoiceItem.hasMany(IvaType, {
    foreignKey: Columns.ivaTypes.id,
    sourceKey: Columns.invoiceItems.iva_id,
    onDelete: Restrictions.CASCADE,
    onUpdate: Restrictions.CASCADE
})

Invoice.belongsTo(InvoiceItem, {
    foreignKey: Columns.ivaTypes.id,
    targetKey: Columns.invoiceItems.iva_id
})

export = InvoiceItem