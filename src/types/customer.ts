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
    //createDate: Date; //время добавление, удобнее было бы сортировать по этому полю 
}
export interface IFilterCustomer {
    surname?: string;
    name?: string;
    patronimic?: string;
    post?: number,
    brigade?: string;
    disabled?: boolean
}
