import axios from "axios";
import { useEffect, useState } from "react";

const useMenu = () => {

    const [menu, setMenu] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        axios.get('http://localhost:5000/menu')
        .then(res => {
            const data = res.data           
            setMenu(data)   
            setLoading(false)         
        })
    },[])

    return [menu, loading]
};

export default useMenu;



/**
 * shared state: 
 * 1. context api : access data from anywhere in the project.
 * 2. Redux: state management system.
 * 3. localstorage: device specific data access or data store
 * 4. Database: user can access from anywhere if logged in.
 */