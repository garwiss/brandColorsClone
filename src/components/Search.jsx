import { FaSearch } from "react-icons/fa";
import MainContext from "../MainContext.jsx";
import {useContext} from "react";

function Search(){

    const {search,setSearch} = useContext(MainContext);
    return(
        <div className="search">
            <div className="icon">
                <FaSearch size={20}/>
            </div>
            <input
                type="text"
                placeholder="Search Brands"
                onChange={(e)=>setSearch(e.target.value)}
            />
        </div>
    );
}
export default Search;