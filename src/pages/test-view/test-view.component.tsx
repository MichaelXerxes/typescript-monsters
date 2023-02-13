import {  FetchData } from "../../Testing-tests/asynchronus/asynchronus.unit";
import './test-view.styles.scss';
import { DataF } from "../../store/random-json/random-json.types";
import { getData } from "../../utils/data.utils";

const TestView=()=>{
    const data=FetchData<Array<DataF>>('https://dummyjson.com/carts') ;
    const data2=getData('https://dummyjson.com/carts');
    return (
        <div className="body__test-view">
           {
            
           }
        </div>
    );
};



export default TestView;