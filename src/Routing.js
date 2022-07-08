
import {Routes,Route}  from "react-router-dom";
import Cards from "./components/Cards";
import CardsDetails from "./components/CardsDetails";
import Mailbox from "./components/EmailIcon";
import Form2 from "./components/Form2";
import Form from "./components/Form";
import HomeIcon from "./components/HomeIcon";
import Location from './components/AddLocationIcon';
import Pay from "./components/CreditCardIcon";

  
 function Routers(){
     return(
        <Routes>

<Route path='/' element={<Cards />} />
<Route path='/cart/:id' element={<CardsDetails/>}></Route> 
<Route path='/form' element={<Form/>}></Route>
<Route path='/form2' element={<Form2/>}></Route>
<Route path='/homeicon' element={<HomeIcon/>}></Route>
<Route path='/mailbox' element={<Mailbox/>}></Route>
<Route path='/location' element={<Location/>}></Route>
<Route path='/pay' element={<Pay/>}></Route>

</Routes>
     )
 }


 export default Routers;

