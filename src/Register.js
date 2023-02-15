import { useState } from 'react'
import './forms.css'
import { auth } from './firebase'
import { useNavigate, Link } from 'react-router-dom'
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth'
import { useAuthValue } from './AuthContext'

function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const { setTimeActive } = useAuthValue()

  const validatePassword = () => {
    let isValid = true
    if (password !== '' && confirmPassword !== '') {
      if (password !== confirmPassword) {
        isValid = false
        setError('Passwords do not match')
      }
    }
    return isValid
  }

  const register = e => {
    e.preventDefault()
    setError('')
    if (validatePassword()) {
      // Create a new user with email and password using firebase
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          sendEmailVerification(auth.currentUser)
            .then(() => {
              setTimeActive(true)
              navigate('/verify-email')
            })
            .catch((err) => alert(err.message))
        })
        .catch(err => setError(err.message))
    }
    setEmail('')
    setPassword('')
    setConfirmPassword('')
    setCompanyName('')
  }

  return (
    <div className='center'>
      <div className='auth'>
        <h1>Sign Up</h1>
        {error && <div className='auth__error'>{error}</div>}
        <form onSubmit={register} name='registration_form'>
          <input
            type='email'
            value={email}
            placeholder='Enter your email'
            required
            onChange={e => setEmail(e.target.value)}
          />

          <input
            type='password'
            value={password}
            required
            placeholder='Enter your password'
            onChange={e => setPassword(e.target.value)}
          />

          <input
            type='password'
            value={confirmPassword}
            required
            placeholder='Confirm password'
            onChange={e => setConfirmPassword(e.target.value)}
          />

          <input
            type='text'
            value={companyName}
            required
            placeholder='Enter your company name'
            onChange={e => setCompanyName(e.target.value)}
          />

          <button type='submit'>Sign Up</button>
        </form>
        <span>
          Already have an account?
          <Link to='/login'> Sign in</Link>
        </span>
      </div>
    </div>
  )
}

export default Register