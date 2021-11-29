import React, { useState } from 'react'
import { useHistory, NavLink } from 'react-router-dom'
import { useAuth } from './Register/Context/FormAuthentication'
import Icon from '@material-tailwind/react/Icon';
import '../../assets/styles/tailwind.css';
import Chart from './Register/Chart';
import Chart2 from './Register/Chart2';
import Chart3 from './Register/Chart3';


const Profile = () => {
    const [error, setError] = useState('')
    const { currentUser, logOut } = useAuth()
    const { history } = useHistory()

    async function handleLogOut() {
        setError('')
        try {
            await logOut()
            history.push("/login")
        } catch {
            setError('Failed to log out')
        }
    }
    return (
        <div className="d-flex  flex-column overflow-hidden">
            <div className="row">
                <div className="col-3">
                    <div
                        className={`h-screen fixed top-0 md:-0 overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl bg-white w-64 z-10 py-4 px-6 transition-all duration-300`}
                    >
                        <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative">
                            <a
                                href="https://material-tailwind.com?ref=mtd"
                                target="_blank"
                                rel="noreferrer"
                                className="mt-2 text-center w-full inline-block"
                            >
                                <h5 color="gray">Material Tailwind</h5>
                            </a>
                            <div className="flex flex-col">
                                <hr className="my-4 min-w-full" />

                                <ul className="flex-col min-w-full flex list-none">
                                    <li className="rounded-lg mb-4">
                                        <NavLink
                                            to="/"
                                            exact
                                            className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                            activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                        >
                                            <Icon name="dashboard" size="2xl" />
                                            Dashboard
                                        </NavLink>
                                    </li>
                                    <li className="rounded-lg mb-2">
                                        <NavLink
                                            to="/settings"
                                            className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                            activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                        >
                                            <Icon name="settings" size="2xl" />
                                            Settings
                                        </NavLink>
                                    </li>
                                    <li className="rounded-lg mb-2 ">
                                        <NavLink
                                            to="/tables"
                                            className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                            activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                        >
                                            <Icon name="toc" size="2xl" />
                                            Tables
                                        </NavLink>
                                    </li>
                                    <li className="rounded-lg mb-2 text-gray-700">
                                        <NavLink
                                            to="/maps"
                                            className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                            activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                        >
                                            <Icon name="map" size="2xl" />
                                            Maps
                                        </NavLink>
                                    </li>
                                    <li className="px-4 rounded-lg mb-2 text-gray-700">
                                        <a
                                            href="https://demos.creative-tim.com/material-tailwind-kit-react/#/login"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex items-center gap-4 text-sm font-light py-3"
                                        >
                                            <Icon name="fingerprint" size="2xl" />
                                            Login
                                        </a>
                                    </li>
                                    <li className="px-4 rounded-lg mb-2 text-gray-700">
                                        <a
                                            href="https://demos.creative-tim.com/material-tailwind-kit-react/#/register"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex items-center gap-4 text-sm font-light py-3"
                                        >
                                            <Icon name="list_alt" size="2xl" />
                                            Register
                                        </a>
                                    </li>
                                    <li className="px-4 rounded-lg mb-2 text-gray-700">
                                        <a
                                            href="https://demos.creative-tim.com/material-tailwind-kit-react/#/landing"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex items-center gap-4 text-sm font-light py-3"
                                        >
                                            <Icon name="web" size="2xl" />
                                            Landing Page
                                        </a>
                                    </li>
                                    <li className="px-4 rounded-lg mb-2 text-gray-700">
                                        <a
                                            href="https://demos.creative-tim.com/material-tailwind-kit-react/#/profile"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex items-center gap-4 text-sm font-light py-3"
                                        >
                                            <Icon name="account_circle" size="2xl" />
                                            Profile Page
                                        </a>
                                    </li>
                                </ul>

                                <ul className="flex-col min-w-full flex list-none absolute bottom-0">
                                    <li className="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 px-4 rounded-lg text-white mb-2">
                                        <a
                                            href="https://material-tailwind.com/documentation/quick-start"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex items-center gap-4 text-sm font-light py-3"
                                        >
                                            <Icon name="description" size="2xl" />
                                            Documentation
                                        </a>
                                    </li>
                                    <li className="bg-gradient-to-tr from-purple-500 to-purple-700 px-4 rounded-lg text-white" style={{ cursor: "pointer" }}>
                                        <buttom style={{ cursor: "pointer" }}

                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex items-center justify-center gap-4 text-sm font-light py-3"
                                            onClick={handleLogOut}
                                        >
                                            Log Out
                                        </buttom>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-9 d-flex flex-column ">
                    <div className=" pt-3  welcome">
                        <span>Welcome<p className="h2" >{currentUser.email}</p></span>
                    </div>
                    <div className="chart ">
                        <Chart />
                    </div>
                    <div className="chart ">
                        <Chart2 />
                    </div>
                    <div className="chart ">
                        <Chart3 />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Profile
