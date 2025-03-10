import Login from '../components/Login'

export default function LoginPage() {
  return (
    <div className='page login'>
      <div className="container flow">
        <img src="./Logo.png" alt="TwitTerrible Welcome Banner" className='banner mx-auto' />
        <Login />
      </div>
    </div>
  )
}
