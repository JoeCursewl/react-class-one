export const nkgLogin = (email, password, setError, setLoading) => {
    try {
        if (!email || !password) {
                throw new Error('El correo electrónico y el nombre de usuario son obligatorios!')
        }

        setLoading(true)
        if (email === 'zerpaanthony.wx@breadriuss.store' && password === '12345') {

            setTimeout(() => {
                setLoading(false)
            }, 800);
            
            setError(null)
            return { result: true }
        }

        if (email !== 'zerpaanthony.wx@breadriuss.store' || password !== '12345') {

            setTimeout(() => {
                setLoading(false)
            }, 800);
            
            setError('Credenciales incorrectas!')
            return { error: 'Credenciales incorrectas!', result: false }
        }
    } catch (error) {
        setLoading(false)
        setError(error.message)
        return { error: error.message }
    }
}