import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

function Form2() {
  let schema = yup.object().shape({
    userName: yup.string().required().min(3).max(30),
    email: yup.string().required().email(),
    password: yup.string().required().min(6),
    gender: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),

  });

  const onSubmit = (data) => console.log(data);
   

// useEffect(() => {

//     const fetchApiData =() =>  {
//         console.log("---------->api")
//         const res = {
//             userName: "sagar",
//             email:"sagar@gmail.com",
//             password: "12345678",
//             gender: "male"
//         }
//         reset(res)
//         // setValue('userName', 'sagar')
//         // setValue('email', 'sagar@gmail.com')
//         // setValue('password', '123456')
//         // setValue('gender','female')
//     }
//     setTimeout(() => {
//         // console.log("after 2 sec")
//         // console.log(fetchApiData);
//         fetchApiData()
      
//     },2000)
//       // fetchApiData()
      
//   },[]);
  


 
   
  return (
    <div className="Form">
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <h2>Create an account</h2>
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
          placeholder="Email"
        />{" "}
       
        <p style={{ color: "red" }}>{errors.email?.message}</p>
        <input {...register("password", {})} placeholder="Password" />
       
        <p style={{ color: "red" }}>{errors.password?.message}</p>
        <select {...register("gender", {})}>
          <option value="">Select Gender</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="other">Other</option>
        </select>{" "}
        
        <p style={{ color: "red" }}>{errors.gender?.message}</p>
        <input   type="Submit" />
        
      </form>
    </div>
  );
}

export default Form2;
