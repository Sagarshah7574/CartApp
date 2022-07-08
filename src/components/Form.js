
// import React from 'react';
// import { useForm } from 'react-hook-form';

// function Form() {
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const onSubmit = data => console.log(data);
//   console.log(errors);
  
//   return (


//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input type="text" placeholder="First name" {...register("First name", {required: true, maxLength: 80})}/><br/><br/>

//       <input type="text" placeholder="Last name" {...register("Last name", {required: true, maxLength: 100})} /><br/><br/>

//       <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} /> <br/><br/>
//       <input type="tel" placeholder="Mobile number" {...register("Mobile number", {required: true, minLength: 6, maxLength: 12})} /> <br/><br/>
//       <select {...register("Title", { required: true })}>
//         <option value="Mr">Mr</option>
//         <option value="Mrs">Mrs</option>
//         <option value="Miss">Miss</option>
//         <option value="Dr">Dr</option>
//       </select><br/><br/>

//       <input {...register("Developer", { required: true })} type="radio" value="Yes" />
//       <input {...register("Developer", { required: true })} type="radio" value="No" />
//       <br/><br/>

//       <input type="submit" />
//     </form>
//   );
// }

// export default Form;

import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
  });

  const onSubmit = (data) => console.log(data);

  // console.log(errors);

  // useEffect(()=>{

  //  const fetchApiData=()=>{
       
  //   const res={
  //          userName:"shah",
  //          email:"shah@gmail.com",
  //          password:123456789,
  //          gender:"other"
  //   }
  //      reset(res)
  //  }
   
  //   fetchApiData()
   
  
  // },[])

  return (
    <div className="Form">
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <h2>Create an account</h2>
        <Helmet>
       <title>NewAccount</title>
       <meta name="description" content="create your account"></meta> 
       
      </Helmet> 
       
        <input
          {...register("userName", {
            required: "Username is Required...",
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
        />

        <p style={{color:"red"}}>{errors.userName?.message}</p>
        <input
          {...register("email", {
            required: "Email is Required...",
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Email must be valid",
            },
          })}
          placeholder="Email"
        />
        <p style={{color:"red"}}>{errors.email?.message}</p>
        <input
          {...register("password", {
            required: "Password is Required...",
            pattern: {
              value:
                /^(?=.*[0-9])(?=.*[!@#$%^&*.,])[a-zA-Z0-9!@#$%^&*.,]{6,16}$/,
              message:
                "Password Must Contain Atleast 6 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character",
            },
          })}
          placeholder="Password"
        />
        <p style={{color:"red"}}>{errors.password?.message}</p>
        <select
          {...register("gender", {
            required: "Gender is Required...",
          })}
        >
          <option value="">Select Gender</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="other">Other</option>
        </select>
        <p  style={{color:"red"}}>{errors.gender?.message} </p>
        <input type="Submit" />
      </form>
    </div>
  );
}

export default Form;