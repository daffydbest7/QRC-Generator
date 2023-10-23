import React from 'react';
import {useForm} from "react-hook-form";
import { Link,useNavigate } from 'react-router-dom';
import { useState } from 'react';


const UserInput = () => {

    const [form, setForm] = useState(
        {
          full: '',
          email: '',
          address:'',
          password:""
    
        }
      )
      // set up an onChange function, then copy the function name and add to all the input fields.
  const onChange =(e) => {
    const {value, type, checked, name} = e.target
    setForm((state) => ({

      // get the previous state
      ...state,
      // tenary function
      [name]: type === 'checkbox' ? checked: value
    }))
  }
  const subMit =(e) => {
    e.preventDefault()
    console.log('form', form)
    setForm(form)

    // setting an alert box on submission
    const alert = document.querySelector(".alert")
    alert.innerText="Form submitted successfully"
    //unhide result div
    const result = document.querySelector(".result")
    result.classList.remove("hidden")
  }


  // part 2
        const [name, setName] = useState("")
        const { 
        register,handleSubmit,
        formState: { errors, isValid},
        watch,
    } = useForm({
        defaultValues:{
            name: "",
            email: "",
            password: "",
            confirmpassword: "",
        },
        mode: "onChange",
    })

    const submitHandler = (data)=>{
        const {name, email, password}=data;
        
        //mutate({name, email, password})
    }

    const password = watch('password');
  return (
   
    <section className='container flex flex-row space-x-12 px-5 py-10'>
        <div className='max-w-sm  '>
        <h2 className='text-2xl font-bold text-center text-black mb-8'>
            GENERATE VIRTUAL BUSINESS CARD AND QR CODE
        </h2>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div className='flex flex-col mb-6 w-full'>
            
            <label htmlFor='name' className='text-[#5a7184] font-semibold block'>
                Full Name
            </label>
            <input {...register("name", {
                minLength:{
                    value: 5,
                    message: "FullName must be at least 5 character "
                },
                required:{
                    value: true,
                    message: "Name is required",
                }
            })} type="text" id='name' placeholder='Enter name'
            className={`placeholder:text-[#959ead] text-black mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border  ${errors.name ? "border-red-500" : "border-[#c3cad]"}` }/>
            {errors.name?.message && (
                <p className='text-red-500 text-xs mt-1'> {errors?.name.message}</p>
            ) }
             
            
            <label htmlFor='email' className='text-[#5a7184] mt-3 font-semibold block'>
                Email
            </label>
            <input {...register("email", {
                required:{
                    value: true,
                    message: "Email is required",
                },
                pattern: {
                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: 'Please enter a valid email',
                },
            })}
            onChange={onChange}
            type="email" id='email' placeholder='Enter email'
            className={`placeholder:text-[#959ead] text-black mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border ${errors.email ? "border-red-500" : "border-[#c3cad]"}`}/>
            {errors.email?.message && (
                <p className='text-red-500 text-xs mt-1'> {errors?.email.message}</p>
            ) }

            <label htmlFor='password' className='text-[#5a7184] font-semibold block mt-3'>
                Password
            </label>
            <input {...register("password",{
                required: {
                    value: true,
                    message: "Password is required",
                },
                minLength:{
                    value: 6,
                    message: "Password length must be atleast 6 characters",
                }
            })} type="password" id='password' placeholder='Enter password'
            className={`placeholder:text-[#959ead] text-black mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border ${errors.password ? "border-red-500" : "border-[#c3cad]"}`}/>
            {errors.password?.message && (
                <p className='text-red-500 text-xs mt-1'> {errors?.password.message}</p>
            ) }

            <label htmlFor='confirmpassword' className='text-[#5a7184] font-semibold block mt-3'>
                Confirm Password
            </label>
            <input {...register("confirmpassword", {
                required: {
                    value: true,
                    message: "Confirm password is required",
                },
                validate: (value)=>{
                    if(value !== password){
                        return "passwords do not match";
                    }
                }
            })} type="password" id='confirmpassword' placeholder='Confirm password'
             className={`placeholder:text-[#959ead] text-black mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border ${errors.confirmpassword ? "border-red-500" : "border-[#c3cad]"}`}/>
             {errors.confirmpassword?.message && (
                 <p className='text-red-500 text-xs mt-1'> {errors?.confirmpassword.message}</p>
             ) }
           

            <button  type="submit" disabled={!isValid }
            id='submit' 
            className=' bg-teal-500 text-black mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border border-[#c3cad] my-6 disabled:opacity-70 disabled:cursor-not-allowed'>Register</button>
            <p className='text-black mt-3'>
               Already have an account? {' '}
               <span className='text-teal-500 font-semibold'><Link to='/auth/checkout'>Login now</Link></span> 
            </p>
            </div>
        </form>
        </div>

        <div className='border border-lg border-teal-500 w-[300px]'>
            <div className='text-center font-bold '> PREVIEW</div>
            <p>Name : <span>{name}</span></p> 
            <p>Email :  <span>{form.email}</span></p>
            <p>Phone :  <span></span></p>
            <p>Socials : <span></span></p> 
        </div>
    </section>

    
  )
}

export default UserInput
