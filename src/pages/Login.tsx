import { useAuth0 } from '@auth0/auth0-react'

export default function Login() {
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0()

  if (isAuthenticated) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '80vh',
        backgroundColor: '#f5f5f5',
      }}>
        <div style={{
          backgroundColor: 'white',
          padding: '40px',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          textAlign: 'center',
          maxWidth: '400px',
          width: '100%',
        }}>
          <p style={{ fontSize: '18px', marginBottom: '8px' }}>Welcome!</p>
          <p style={{ color: '#666', marginBottom: '24px' }}>{user?.email}</p>
          <button
            onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
            style={{
              width: '100%',
              padding: '12px',
              backgroundColor: '#f44336',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              fontSize: '16px',
              cursor: 'pointer',
            }}
          >
            Logout
          </button>
        </div>
      </div>
    )
  }

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '80vh',
      backgroundColor: '#f5f5f5',
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '40px',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        width: '100%',
        maxWidth: '400px',
        textAlign: 'center',
      }}>
        <h1 style={{ marginBottom: '8px' }}>Welcome Back</h1>
        <p style={{ color: '#666', marginBottom: '24px' }}>Sign in to manage your tasks</p>
        <button
          onClick={() => loginWithRedirect()}
          style={{
            width: '100%',
            padding: '12px',
            backgroundColor: '#1a1a2e',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            fontSize: '16px',
            cursor: 'pointer',
          }}
        >
          Login with Auth0
        </button>
      </div>
    </div>
  )
}