import React,{useState} from 'react'
import "./style.css"
import Menu from './menuApi';
import MenuCard from "./MenuCard";
import Navbar from './Navbar';

const uniqeList =[
    ...new Set(
        Menu.map((curElm)=>{
            return curElm.category;
        })
    ), "All"
]
console.log(uniqeList);
const Restaurant=() => {
    const [menuData,setMenuData] = useState(Menu);
    const [menuList,setMenuList] = useState(uniqeList);

    const filterItem = (category)=>
    {
        if(category==="All"){
            setMenuData(Menu);
            return;
        }
        const updatedList = Menu.filter((curElm)=>{
            return curElm.category === category;
        })
        setMenuData(updatedList);
    }
    //console.log(menuData);
    return (
        <>
            <Navbar filterItem={filterItem} menuList={menuList}/>
            <MenuCard menuData={menuData}/>
        </>
    );
}

export default Restaurant