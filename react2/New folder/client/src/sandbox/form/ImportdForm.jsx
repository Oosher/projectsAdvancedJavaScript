



import React from 'react'
import useForm from '../../forms/hooks/useForm'

export default function ImportdForm() {

    const{value,...rest} = useForm(INITIAL_FORM,scheme,handleSubmit)

    const INITIAL_FORM= {

        email:"",
        password:"",
    }

    const handleSubmit = (data)=>{console.log("disnu");}

    const scheme = {email:Joi.string().regex(/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/
),password:Joi.string().regex(/((?=.*\d{1})(?=.*[A-Z]{1})(?=.*[a-z]{1})(?=.*[!@#$%^&*-.]{1}).{7,20})/
)}

  return (
    <div>ImportdForm</div>
  )
}
