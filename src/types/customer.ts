import { IBrigade, IPost } from ".";

export interface ICustomer {
    id: string;
    surname: string;
    name: string;
    patronimic?: string;
    image?: string; // source, object
    post?: IPost | null,
    brigade?: IBrigade | null;
    disabled?: boolean;
}
export interface IFilterCustomer {
    surname?: string;
    name?: string;
    patronimic?: string;
    post?: number,
    brigade?: string;
    disabled?: boolean
}
