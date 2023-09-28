import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getToken, removeToken } from '../../services/LocalStorageService'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setUserInfo, unsetUserInfo } from '../../features/userSlice'
import { unSetUserToken } from '../../features/authSlice'




export default function AdminNavbar() {
	const { access_token } = getToken()
	const [data,setData] = useState({})
	const dispatch = useDispatch()
	const navigate = useNavigate()

	useEffect(() => {

	  
		axios
		  .get('http://localhost:8000/api/user/profile/', {
			headers: {
			  Authorization: `Bearer ${access_token}`,
		
			},
		  })
		  .then(response => {
			setData(response.data)
			dispatch(setUserInfo({
				email: data.email,
				name: data.name
			  }))
			  
		
		  })
		  .catch(error => {
		
			console.error('Error fetching data:', error);
		  });
	  }, []);
	  const handleLogout = () => {
		dispatch(unsetUserInfo({ name: "", email: "" }))
		dispatch(unSetUserToken({ access_token: null }))
		removeToken()
		navigate('/Signin')

		
	  }
	
  return (
    <>
        	<div className="sidebar">
		<Link to="/" className="sidebar__logo">
			<img src="../img/church-logo.png" alt=""/>
		</Link>
		
		<div className="sidebar__user">
			<div className="sidebar__user-img">
				<img src="/img/user.svg" alt=""/>
			</div>

			<div className="sidebar__user-title">
				<span>Admin</span>
				<p>{`${data?.first_name} ${data?.last_name}`}</p>
			</div>

			<button className="sidebar__user-btn" type="button" onClick={handleLogout}>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4,12a1,1,0,0,0,1,1h7.59l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l4-4a1,1,0,0,0,.21-.33,1,1,0,0,0,0-.76,1,1,0,0,0-.21-.33l-4-4a1,1,0,1,0-1.42,1.42L12.59,11H5A1,1,0,0,0,4,12ZM17,2H7A3,3,0,0,0,4,5V8A1,1,0,0,0,6,8V5A1,1,0,0,1,7,4H17a1,1,0,0,1,1,1V19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V16a1,1,0,0,0-2,0v3a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V5A3,3,0,0,0,17,2Z"/></svg>
			</button>
		</div>

		<ul className="sidebar__nav">
			<li className="sidebar__nav-item">
				<Link to="/admin" className="sidebar__nav-link sidebar__nav-link--active"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20,8h0L14,2.74a3,3,0,0,0-4,0L4,8a3,3,0,0,0-1,2.26V19a3,3,0,0,0,3,3H18a3,3,0,0,0,3-3V10.25A3,3,0,0,0,20,8ZM14,20H10V15a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1Zm5-1a1,1,0,0,1-1,1H16V15a3,3,0,0,0-3-3H11a3,3,0,0,0-3,3v5H6a1,1,0,0,1-1-1V10.25a1,1,0,0,1,.34-.75l6-5.25a1,1,0,0,1,1.32,0l6,5.25a1,1,0,0,1,.34.75Z"/></svg> <span>Dashboard</span></Link>
			</li>

			<li className="sidebar__nav-item">
				<Link to="/admin/stream-shedule" className="sidebar__nav-link"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10,13H3a1,1,0,0,0-1,1v7a1,1,0,0,0,1,1h7a1,1,0,0,0,1-1V14A1,1,0,0,0,10,13ZM9,20H4V15H9ZM21,2H14a1,1,0,0,0-1,1v7a1,1,0,0,0,1,1h7a1,1,0,0,0,1-1V3A1,1,0,0,0,21,2ZM20,9H15V4h5Zm1,4H14a1,1,0,0,0-1,1v7a1,1,0,0,0,1,1h7a1,1,0,0,0,1-1V14A1,1,0,0,0,21,13Zm-1,7H15V15h5ZM10,2H3A1,1,0,0,0,2,3v7a1,1,0,0,0,1,1h7a1,1,0,0,0,1-1V3A1,1,0,0,0,10,2ZM9,9H4V4H9Z"/></svg> <span>Streaming Schedule</span></Link>
			</li>

			<li className="sidebar__nav-item">
				<a className="sidebar__nav-link" data-toggle="collapse" href="#collapseMenu" role="button" aria-expanded="false" aria-controls="collapseMenu"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,5.5H12.72l-.32-1a3,3,0,0,0-2.84-2H5a3,3,0,0,0-3,3v13a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V8.5A3,3,0,0,0,19,5.5Zm1,13a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V5.5a1,1,0,0,1,1-1H9.56a1,1,0,0,1,.95.68l.54,1.64A1,1,0,0,0,12,7.5h7a1,1,0,0,1,1,1Z"/></svg> <span>Users</span> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z"/></svg></a>

				<ul className="collapse sidebar__menu" id="collapseMenu">
					<li><Link to="/admin/Users">Users Listing</Link></li>
					<li><Link to="/admin/Edit_users">User Edit</Link></li>
				</ul>
			</li>

			<li className="sidebar__nav-item">
				<Link to="/admin/UserList" className="sidebar__nav-link"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8,11a1,1,0,1,0,1,1A1,1,0,0,0,8,11Zm4,0a1,1,0,1,0,1,1A1,1,0,0,0,12,11Zm4,0a1,1,0,1,0,1,1A1,1,0,0,0,16,11ZM12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,.3-.71,1,1,0,0,0-.3-.7A8,8,0,1,1,12,20Z"/></svg> <span>Stream Listing</span></Link>
			</li>
			{/* <li className="sidebar__nav-item">
				<Link href="../" className="sidebar__nav-link"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17,11H9.41l3.3-3.29a1,1,0,1,0-1.42-1.42l-5,5a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l5,5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.41,13H17a1,1,0,0,0,0-2Z"/></svg> <span>Back to Church</span></Link>
			</li> */}
		</ul>
		
		<div className="sidebar__copyright">© Church, 2023. <br/>Developed by <a href="https://theinceptives.com/" target="_blank">The Inceptives</a></div>
	</div>   



    
    </>
  )
}
