import { FetchData } from "../../Testing-tests/asynchronus/asynchronus.unit";
import './test-view.styles.scss';

const TestView=()=>{
    const data=FetchData('https://dummyjson.com/carts');

    return (
        <div className="body__test-view">
            Hello View
        </div>
    );
};



export default TestView;