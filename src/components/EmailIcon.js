import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Mailbox = () => {
 
    let schema = yup.object().shape({
        userName: yup.string().required().min(3).max(30),
        email: yup.string().required().email(),
        textarea: yup.string().required().min(6),
     
      });
    
      const {
        register,
        handleSubmit,
    
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema),
    
      });
    
      const onSubmit = (data) => console.log(data);

      return(   
        <div className="text-center "  >
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" style={{backgroundColor:"black"}}>
          <h2 style={{color:"white"}}>Contact Us</h2>
          <input
            {...register("userName", {
              minLength: {
                value: 3,
                message: "Username must be atleast 3 characters long...",
              },
              maxLength: {
                value: 30,
                message: "Username must be atmost 30 characters long...",
              },
            })}
            placeholder="Username"
          />{" "}
         
          <p style={{ color: "red" }}>{errors.userName?.message}</p>
          <input
            {...register("email", {
              message: "Email must be valid",   
            })}
            placeholder=" Your Email"
          />{" "}
         
          <p style={{ color: "red" }}>{errors.email?.message}</p>
          <textarea id="w3review" name="w3review" rows="4" cols="24"     {...register("textarea" 
                 
                )}placeholder="Your question">
            
          </textarea>
         
          <p style={{ color: "red" }}>{errors.textarea?.message}</p>
        
          
          <button>Send Message</button>
          
        </form>
      </div>

  )
}

export default Mailbox;