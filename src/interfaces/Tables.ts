export interface IAuth {
    id?: number,
    user: string,
    pass?: string,
    prov: number,
    admin_id: number
}
export interface IUser {
    id?: number,
    name: string,
    lastname: string
    email: string,
    user: string,
    phone: string,
    admin: boolean
}
export interface IUserPermission {
    id?: number,
    id_user: number,
    id_permission: number
}

export interface IPermission {
    id?: number,
    module_name: string
}

export interface IActivity {
    id?: number,
    date?: Date,
    user_id: number,
    activity_description: string
}

export interface IInvoice {
    id?: number,
    canceled_id?: number,
    date: Date,
    number: number,
    cae_number: string,
    cae_expiration: Date,
    observations: string,
    type_id: number, //Invoice / Receipt
    fiscal_type_id: number, //Responsable Inscripto, Exento, etc
    client_id: number,
    user_id: number,
    sale_point_id: number
}

export interface IInvoiceItems {
    id?: number,
    invoice_id: number,
    detail: string,
    net_amount: number,
    taxes_amount: number,
    discount_amount: number,
    gross_amount: number,
    quantity: number,
    iva_id: number,
    unity_id: number,
    product_id: number | null
}

export interface ISalePoints {
    id?: number,
    business_number: string,
    business_name: string,
    sale_point_number: number,
    iva_condition_id: number,
    logo_name: string,
    activities_start: Date,
    email: string,
    address: string
}

export interface IClients {
    id?: number,
    document_type: number,
    document_number: string,
    business_name: string,
    fantasie_name: string,
    email: string,
    iva_condition_id: number
}

export interface IIvaConditions {
    id?: number,
    description: string
}

export interface IInvoiceTypes {
    id?: number,
    description: string,
    letter: string
}

export interface IIvaTypes {
    id?: number,
    name: string,
    percentage: number
}

export interface IUnities {
    id?: number,
    name: string,
    unity: boolean
}

export interface IProducts {
    id?: number,

}