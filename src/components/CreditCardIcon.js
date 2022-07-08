import React from 'react'
import CreditCardIcon from '@mui/icons-material/CreditCard';
import StripeCheckout from 'react-stripe-checkout';
function Pay()  {
  
  const onToken=(token)=>{
      console.log(token);
  }
  
    return (
//     <div className="container "  >
//     <div className="row d-flex justify-content-center align-items-center">
//         <div className="col-xs-12 col-md-4 col-md-offset-4">
//             <div className="panel panel-default" style={{border:"2px solid black", alignItems:"center"}}>
//                 <div className="panel-heading">
//                     <div className="row "  >
//                         <h3 className="text-center">Payment Details</h3>
//                         <img className="img-responsive cc-img"  alt="" src="http://www.prepbootstrap.com/Content/images/shared/misc/creditcardicons.png"  style={{margin:"auto"}}/>
//                     </div>
//                 </div>
//                 <div className="panel-body">
//                     <form >
//                         <div className="row">
//                             <div className="col-xs-12">
//                                 <div className="form-group">
//                                     <label>CARD NUMBER</label>
//                                     <div className="input-group">
//                                         <input type="tel" className="form-control" placeholder="Valid Card Number" />
//                                         <span className="input-group-addon"><CreditCardIcon/></span>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="row">
//                             <div className="col-xs-7 col-md-7">
//                                 <div className="form-group">
//                                     <label><span className="visible-xs-inline">EXP</span> DATE</label>
//                                     <input type="tel" className="form-control" placeholder="MM / YY" />
//                                 </div>
//                             </div>
//                             <div className="col-xs-5 col-md-5 pull-right">
//                                 <div className="form-group">
//                                     <label>CV CODE</label>
//                                     <input type="tel" className="form-control" placeholder="CVC" />
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="row">
//                             <div className="col-xs-12">
//                                 <div className="form-group">
//                                     <label>CARD OWNER</label>
//                                     <input type="text" className="form-control" placeholder="Card Owner Names" />
//                                 </div>
//                             </div>
//                         </div>
//                     </form>
//                 </div><br/>
//                 <div className="panel-footer">
//                     <div className="row">
//                         <div className="col-xs-12 ">
//                             <button className="btn btn-warning btn-lg btn-block" style={{width:"100%"}}>Process payment</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>   
// </div>
    
<StripeCheckout
 
token={onToken}
stripeKey="pk_test_51LBbl2SBiPKS1PeQHgrMGI3OcqUUX16JAbUvPgKtcpJwI7zUjpJUYCaE4O7MWFRQa6MO02ZQpofShjNIvWcONIB700QdrnbRtz"
/>


  )
}

export default Pay;