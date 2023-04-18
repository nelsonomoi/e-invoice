import { Customer } from "../../customer/models/customer.model";

export interface InvoiceDataTable{
    data: Customer[];
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
}