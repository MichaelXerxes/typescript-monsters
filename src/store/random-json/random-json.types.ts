export enum RANDOM_JSON_TYPES{
    FETCH_RANDOM_JSON_FAILED='json/FETCH_RANDOM_JSON_FAILED',
    FETCH_RANDOM_JSON_START='json/FETCH_RANDOM_JSON_START',
    FETCH_RANDOM_JSON_SUCCESS='json/FETCH_RANDOM_JSON_SUCCESS',
}

// export type RandomJsonType={
//     payload:[];
// }

export type Product={
    discountPercentage?:string;
    discountPrice?:string;
    id:number;
    price?:string;
    quantity?:string;
    title:string;
    total?:string
};
export type CartWithProducts={
    discountTotal?:string;
    id:number;
    products:Product[];
    total?:string;
    totalProducts?:string;
    totalQuantity?:string;
    userId?:number;

}
 
export type DataF={
    carts:CartWithProducts[];
    isLoading:boolean;
    error:Error|null;
    
    
};