import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import  Spinner  from '../components/Spinner'
import { register, reset } from '../features/auth/authSlice'

function Register() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  })
  const {name, email, password, password2} = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector( (state) => state.auth)

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }
    if (isSuccess || user) {
      navigate('/')
    }
    dispatch(reset())
  },[user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if (password !== password2) {
          toast.error('passwords do not match')
        } else {
          const userData = {
            name, email, password
          }
          dispatch(register(userData))
        }
  }

  if (isLoading) {
    return <Spinner/>
  }


  return (
    <>
      <section>
        <h1>
          Register
        </h1>
        <p>Please create a new account</p>
      </section>

      <form onSubmit={onSubmit}>
        <div class='form-group'>
          <input type="text" class='form-control' id='name' name='name' value={name} placeholder='Please enter your name'
          onChange={onChange} />
        </div>

        <div class='form-group'>
          <input type="text" class='form-control' id='email' name='email' value={email} placeholder='Please enter your email'
          onChange={onChange} />
        </div>

        <div class='form-group'>
          <input type="text" class='form-control' id='password' name='password' value={password} placeholder='Please enter your password'
          onChange={onChange} />
        </div>

        <div class='form-group'>
          <input type="text" class='form-control' id='password2' name='password2' value={password2} placeholder='Please confirm your password'
          onChange={onChange} />
        </div>

        <div class='form-group'>
          <button type='submit' class='btn btn-block'>Submit</button>
        </div>
      </form>
    </>
  )
}

export default Register