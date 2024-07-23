import { createContext, useState ,useContext} from 'react';
import Datas from '../Datas';

export const DataContext = createContext();

export const useGlobalData=()=>{
    const items=useContext(DataContext);
    return items;
}

export const DataProvider=(props)=>{
    const [items,setItems]=useState(Datas);
    return <DataContext.Provider value={{items,setItems}}>{props.children}</DataContext.Provider>
}