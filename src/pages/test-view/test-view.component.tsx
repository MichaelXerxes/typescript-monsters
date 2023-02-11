import { DataF, FetchData } from "../../Testing-tests/asynchronus/asynchronus.unit";
import './test-view.styles.scss';

const TestView=()=>{
    const data=FetchData<Array<DataF>>('https://dummyjson.com/carts') ;

    return (
        <div className="body__test-view">
           {
            //data.
           }
        </div>
    );
};



export default TestView;