
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import  Router  from './Routing';
import Footer from './components/Footer'; 
import { Helmet } from 'react-helmet';
 
function App() {
  return (
  <>
   
   <Header />
   <Helmet>
     <title>FoodCart</title>
     <meta name="description" content="Get info for all your favorite Food"></meta>  
     <meta name="keywords" content="Food,Resturants and locations"></meta> 
      </Helmet>
   <SideBar/>
 
   <Router/>
    <br/>
   
   <Footer />
  </>
  );
}

export default App;
