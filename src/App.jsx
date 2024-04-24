import MainContext from "./MainContext.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Content from "./components/Content.jsx";
import BrandsData from "./brands.json";
import Copied from './components/Copied.jsx'
import {useEffect, useState} from "react";


function App() {

    const brandsArray = []
    for (const brand in BrandsData) {
        brandsArray.push(BrandsData[brand])
    }
    const [brands, setBrands] = useState(brandsArray)
    const [selectedBrands, setSelectedBrands] = useState([])
    const [copied, setCopied] = useState(false)
    const [search,setSearch] = useState('')

    useEffect(()=>{
        console.log(selectedBrands)
    },[selectedBrands])

    useEffect(() => {
        if(copied){
            setTimeout(()=>{
                setCopied(false)
            },500)
        }
    }, [copied]);

    useEffect(() => {
        setBrands(brandsArray.filter(brand=>brand.title.toLowerCase().includes(search)))
    }, [search]);

    const data ={
        brands,
        selectedBrands,
        setSelectedBrands,
        setCopied,
        search,
        setSearch
    }

    return (
        <>
            <MainContext.Provider value={data}>
                {copied && <Copied color={copied}/>}
                <Sidebar/>
                           <Content/>
            </MainContext.Provider>
        </>
    )
}

export default App
