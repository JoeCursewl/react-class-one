export const ngRegister = (name, last_name, email, date, terms, password, password2, setError, setLoading) => {
    setLoading(true)
    try {
        if (!name || !last_name || !email || !date || !terms || !password || !password2) {
            throw new Error('Todos los campos son obligatorios!')
        }

        if (password !== password2) {
            throw new Error('Las contraseñas no coinciden!')
        }

        if (password.length < 6) {
            throw new Error('La contraseña debe tener al menos 6 caracteres!')
        }

        if (terms !== true) {
            throw new Error('Debes aceptar los terminos y condiciones!')
        }

        setError(null)
        setLoading(false)
        return { result: true, info: `Usuario ${name} con éxito!` }
    } catch (error) {
        setLoading(false)
        setError(error.message)
        return { error: error.message }
    }
}