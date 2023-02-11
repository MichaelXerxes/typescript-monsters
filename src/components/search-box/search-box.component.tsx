import { ChangeEventHandler, ChangeEvent } from "react";
import { Monster } from "../../pages/monsters/monsters.component";
import './search-box.styles.scss';
interface ISearchBoxProps extends IChangeHandlerProps{
    className:string;
    placeholder?:string;
};
interface IChangeHandlerProps{
    onChangeHandler:(e:object)=>void
};

type SearchBoxProps={
    className:string;
    placeholder:string;
    //onChangeHandler:ChangeEventHandler<HTMLInputElement>;
    onChangeHandler:(event:ChangeEvent<HTMLInputElement>)=>void;
    //func:ChangeEventHandler;
    //monster:Monster;
    
};
const SearchBox=({className,placeholder,onChangeHandler}:SearchBoxProps)=>{
    return (
    <input 
        className={`search-box ${className}`}
        type='search'
        placeholder={placeholder}
        onChange={onChangeHandler}
    />);
};



export default SearchBox;


