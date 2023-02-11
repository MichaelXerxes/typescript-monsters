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
    
};

interface HttpResponse<T> extends Response{
    parseBody?:T;
}
export async function FetchData<T>(request:RequestInfo):Promise<HttpResponse<T>>{
    const response:HttpResponse<T>=await fetch(request);
     response.parseBody=await response.json();
    console.log('Response !!',response);
    console.log('Response parse Body!!',response.parseBody);
    return response;
};

