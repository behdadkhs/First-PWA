import React, { useRef, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import image from '../../../images/image-3.svg';
import './Style.css'
import { Alert, Button, Form, } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from './Context/FormAuthentication'

const SignUp = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signUp } = useAuth()
    const [error, setError] = useState()
    const [loading, setLoading] = useState(false)
    const history = useHistory()


    async function handleSubmit(e) {
        e.preventDefault()
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Password Does not match")
        }
        try {
            setError('')
            setLoading(true)
            await signUp(emailRef.current.value, passwordRef.current.value)
            history.push('/login')

        } catch {
            setError('Failed to create an account')
        }
        setLoading(false)
    }

    return (
        <React.Fragment>
            <div className="container mb-5">
                <div className="row  d-flex justify-content-center align-items-center">
                    <div className="col-md-5">
                        <h2 className="h2 my-5">Sign Up</h2>
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
                            <Form.Group id="passwordConfirm" className="mb-3">
                                <Form.Label>Password Confirmation</Form.Label>
                                <Form.Control type="password" ref={passwordConfirmRef} required />
                            </Form.Group>
                            <Button disabled={loading} className="w-100 " type="submit" style={{ background: "#01bf71", border: "none" }}>Sign Up</Button>
                        </Form>
                        <div className="w-100 mt-e text-center">
                            Already have an account? <Link to="/login" style={{ color: 'blue', textDecoration: 'underline' }}>Log In</Link>
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

export default SignUp
