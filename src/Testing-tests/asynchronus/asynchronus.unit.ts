

interface HttpResponse<T> extends Response{
    parseBody?:T;
}
export async function FetchData<T>(request:RequestInfo):Promise<HttpResponse<T>>{
    const response:HttpResponse<T>=await fetch(request)
    .then(res=>res.json());
    //.then(data=>);
   //  response.parseBody=await response.json();
    console.log('Response !!',response);
    console.log('Response parse Body!!',response.parseBody);
    return response;
};

