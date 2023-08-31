import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function LayoutMain(props) {
    return (
        <div >
            <div className='flex'>
                <Link className={`btn  rounded-none btn-primary text-white flex-1`} to={'/'}>Index Page</Link>
                <Link className={`btn  rounded-none btn-primary text-white flex-1`} to={'/about'}>About Page</Link>
            </div>
            <div className='mt-3 px-1'>
                <Outlet />
            </div>
        </div>
    )
}

export default LayoutMain