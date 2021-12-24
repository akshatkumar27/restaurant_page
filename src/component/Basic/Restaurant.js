import React from 'react'
import Menu from './menuApi';
import { useState } from 'react';
import MenuCard from './MenuCard'
import Navbar from './Navbar';
const uniqueList = [
    ...new Set(
        Menu.map((curr) => {
            return curr.category;
        })
    ),
    "All",
];


const Restaurant = () => {

    const [menuData, setMenuData] = useState(Menu); //satae variable
    const [menuList,setmenuList]=useState(uniqueList);
    
    const filterItem = (category) => {

        if(category==="All"){
            setMenuData(Menu);
            return;
        }
        const updateList = Menu.filter((curElem) => {
            return curElem.category === category;
        });
        setMenuData(updateList);
    };

    return (
        // react fragment
        <>
            <Navbar  filterItem={filterItem} menuList={menuList}/>
            <MenuCard menuData={menuData} />
        </>
    )
}

export default Restaurant
