import React, { useState, useContext} from 'react'

const Login = ({handlelogin}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        handlelogin(email,password)
        setEmail('')
        setPassword('')
    }
    return (
        <div className='w-screen h-screen flex justify-center items-center'>
            <div className='w-[20%] max-sm:w-[80%] max-md:w-[60%] max-lg:w-[60%] max-xl:w-2/6  max-sm:p-7 flex flex-col gap-10 p-10 border rounded-xl border-teal-500'>
                <h1 className='text-4xl font-bold'>Login 👋</h1>
                <form onSubmit={(e) => {
                    submitHandler(e);
                }} className='flex gap-4 flex-col' action="">
                    <input value={email} onChange={(e) => {
                        setEmail(e.target.value)
                    }} required className='p-2 rounded-lg bg-transparent border' type="email" placeholder='Email' />
                    <input value={password} onChange={(e) => {
                        setPassword(e.target.value)
                    }} required className='p-2 rounded-lg bg-transparent border' type="password" placeholder='Password' />
                    <div className='flex justify-between p-2 items-center'>
                        <div className='flex gap-2 w-full'>
                            <input className='text-nowrap' type="checkbox" />
                            <p className=' max-sm:text-sm text-nowrap'>Remember me</p>
                        </div>
                        <a href='#' className='font-light underline text-sm'>Forgot Password ?</a>
                    </div>
                    <button className='bg-teal-500 hover:bg-teal-700 p-2 rounded-full text-white font-bold'>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login
