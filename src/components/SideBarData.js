
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { NavLink } from 'react-router-dom';
export const SideBarData=[
    {
        title:<NavLink to="/homeicon"  className="text-decoration-none text-dark">Home</NavLink>,
        icon:  <HomeIcon/>,                                          
        link:"/homeicon"
    },
    {
        title:<NavLink to="/mailbox" className="text-decoration-none text-dark">Contact Us</NavLink>,
        icon:<EmailIcon/>,
        link:"/mailbox"
    },
    {
        title:<NavLink to="/location" className="text-decoration-none text-dark">Location</NavLink>,
        icon: <AddLocationIcon/> ,
        link:"/addlocation"

    },
    {
        title:<NavLink to="/pay" className="text-decoration-none text-dark">Pay</NavLink>,
        icon:<CreditCardIcon/>,
        link:"/pay"
    },
   
]