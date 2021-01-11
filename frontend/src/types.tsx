export type Product = {
    id:number;
    name: string;
    done: boolean;
}

export type List = {
    id:number;
    name:string;
    owner: string;
    url: string;
    item_set:Product[];
}
