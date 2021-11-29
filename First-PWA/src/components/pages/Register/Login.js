import React, { useRef, useState } from 'react'
import image from '../../../images/login.svg';
import './Style.css'
import { Alert, Button, Form, } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from './Context/FormAuthentication'


const Login = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push('/profile')
        } catch {
            setError("Failed to log in")
        }
        setLoading(false)
    }

    return (
        <React.Fragment>
            <div className="container mb-5 ">
                <div className="row  d-flex justify-content-center align-items-center ">
                    <div className="col-md-5 ">
                        <h2 className="h2 my-5">Login</h2>
                        {error && <Alert variant="danger">{error}</Alert>}
                        <Form onSubmit={handleSubmit}>
                            <Form.Group id="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" ref={emailRef} required />
                            </Form.Group>
                            <Form.Group id="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" ref={passwordRef} required />
                            </Form.Group>
                            <Button disabled={loading} className="w-100" style={{ marginTop: "20px", background: "#01bf71", border: "none" }} type="submit">Login</Button>
                        </Form>
                        <div className="w-100 mt-e text-center ">
                            Dont have an account? <Link style={{ color: 'blue', textDecoration: 'underline' }} to="/signup">Sign up</Link>
                        </div>
                    </div>
                    <div className="col-md-6  d-flex justify-content-center align-items-center signImg" style={{ marginTop: "200px" }}>
                        <img alt="" src={image} className="img-fluid w-100 " />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Login
