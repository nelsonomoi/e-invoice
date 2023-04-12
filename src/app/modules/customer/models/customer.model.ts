export interface Customer {
    customerType: CustomerType,
    customerId: string,
    firstname: string,
    middlename: string,
    lastname: string,
    name: string,
    email: string,
    phone: string,
    status: string
}


enum CustomerType{
    RETAIL,
    CORPORATE,
    SMEs
}