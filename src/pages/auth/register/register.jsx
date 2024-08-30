import './register.css'
import { Link, useNavigate } from 'react-router-dom'
import { nkgLogin } from '../../../services/auth/nkgLogin'
import { useState } from 'react'
import { ngRegister } from '../../../services/auth/nkgRegister'

export default function Register() {
    // Estados globales del login 
    const [name, setName] = useState('')
    const [last_name, setLastName] = useState('')
    const [fecha, setFecha] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [confirm, setConfirm] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const [success, setSuccess] = useState(null)

    const navigate = useNavigate()

    const handleSumbit = (e) => {
        e.preventDefault()
        const { info, result, error} = ngRegister(name, last_name, email, fecha, confirm, password, password2, setError, setLoading);

        if (error) {
            console.log(`Ha ocurrido un error: ${error}`)
            setSuccess(null)
        }

        if (result) {
            setSuccess(info)

            setTimeout(() => {
                navigate("/")
            }, 2000);
            console.log('Registrado', info)
        }
    }

    return (
        <section className='en-login-section'>
            <div className='en-login-info'>

                <form className='en-register-form' onSubmit={e => handleSumbit(e)}>
                    <div className='en-login-logo'>
                        <img src="/logo-enjoyit.svg" alt="" />
                    </div>

                    <div className='en-login-inputs'>
                        <div className='en-login-info-input'>
                            <img src="/svgs/info-img.svg" alt="" />
                            <label>Nombres</label>
                        </div>
                        <input type="text" onChange={e => setName(e.target.value)}/>
                    </div>

                    <div className='en-login-inputs'>
                        <div className='en-login-info-input'>
                            <img src="/svgs/info-img.svg" alt="" />
                            <label>Apellidos</label>
                        </div>
                        <input type="text" onChange={e => setLastName(e.target.value)}/>
                    </div>

                    <div className='en-login-inputs'>
                        <div className='en-login-info-input'>
                            <img src="/svgs/date-img.svg" alt="" />
                            <label>Fecha de Nacimiento</label>
                        </div>
                        <input type="date" onChange={e => setFecha(e.target.value)}/>
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

                    <div className='en-login-inputs'>
                        <div className='en-login-info-input'>
                            <img src="/svgs/password-img.svg" alt="" />
                            <label>Repita su Contraseña</label>
                        </div>
                        <input type="password" onChange={e => setPassword2(e.target.value)}/>
                    </div>

                    <div className='en-login-inputs'>
                        <input type="checkbox" onChange={e => setConfirm(e.target.checked)}/>
                        <label>Aceptas los Términos y condiciones.</label>
                    </div>


                    <div className='en-login-button'>
                        {
                            loading ? <div className='loader'></div> :
                            <button>Registrar</button>
                        }
                    </div>
                    

                    <div className='en-not-account'>
                        <p>¿Ya tienes una cuenta? Ingresa <Link to={'/login'}>aquí</Link></p>
                    </div>
                </form>

                    {error !== null ? <p className='en-login-error'>{error}</p> : null}

                    {success !== null ? <p className='en-login-success'>{success}</p> : null}

            </div>
        </section>
    )
}