import './login.css'
import { Link, useNavigate } from 'react-router-dom'
import { nkgLogin } from '../../../services/auth/nkgLogin'
import { useState } from 'react'

export default function Login() {
    // Estados globales del login 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const navigate = useNavigate()

    const handleSumbit = (e) => {
        e.preventDefault()

        const result = nkgLogin(email, password, setError, setLoading)

        if (result?.error) {
            console.log(`Ha ocurrido un error: ${result.error}`)
        }

        if (result?.result) {
            navigate("/")
            console.log('Login exitoso ', result)
        }
    }

    return (
        <section className='en-login-section'>
            <div className='en-login-info'>

                <form className='en-login-form' onSubmit={e => handleSumbit(e)}>
                    <div className='en-login-logo'>
                        <img src="/logo-enjoyit.svg" alt="" />
                    </div>

                    <div className='en-login-inputs'>
                        <div className='en-login-info-input'>
                            <img src="/svgs/email-img.svg" alt="" />
                            <label>Correo Electrónico</label>
                        </div>
                        <input type="email" onChange={e => setEmail(e.target.value)}/>
                    </div>

                    <div className='en-login-inputs'>
                        <div className='en-login-info-input'>
                            <img src="/svgs/password-img.svg" alt="" />
                            <label>Contraseña</label>
                        </div>
                        <input type="password" onChange={e => setPassword(e.target.value)}/>
                    </div>

                    <div className='en-login-button'>
                        {
                            loading ? <div className='loader'></div> :
                            <button>Iniciar Sesion</button>
                        }
                    </div>

                    <div className='en-not-account'>
                        <p>¿No tienes cuenta? crea una <Link to={'/register'}>aquí</Link></p>
                    </div>
                </form>

                {error !== null ? <p className='en-login-error'>{error}</p> : null}

            </div>
        </section>
    )
}