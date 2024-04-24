import Search from './Search.jsx'
import Brand from "./Brand.jsx";
import MainContext from "../MainContext.jsx";
import {useContext} from "react";
import LazyLoad from 'react-lazyload';
import Download from "./Download.jsx";


const Content = () => {

 const{brands,selectedBrands} = useContext(MainContext)

    return (
        <main className="content">
            <header className="header">
                <Search/>
                {selectedBrands.length !== 0 && <Download/>}
            </header>
            <section className="brands">
                {brands.map(brand=>(
                    <LazyLoad once={true} overflow={true} placeholder="Loading..." >
                        <Brand brand ={brand}/>
                    </LazyLoad>

                ))}
            </section>
        </main>
    );
}
export default Content;