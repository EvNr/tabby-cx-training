import { useState } from 'react'
import { Box, Button, TextField, Typography, Paper, Alert, CircularProgress } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { loginWithUsername } from '../api/auth'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleLogin = async () => {
    setLoading(true)
    setError('')
    try {
      const res = await loginWithUsername(username, password)
      if (res.ok) {
        navigate('/trainee')
      } else {
        setError(res.error || 'Login failed')
      }
    } catch {
      setError('Connection error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#f2f5f7' }}>
      <Paper elevation={3} sx={{ p: 5, width: 420, borderRadius: 3 }}>
        <Typography variant="h4" fontWeight={800} textAlign="center" mb={1}>
          tabby
        </Typography>
        <Typography variant="h6" color="primary" textAlign="center" mb={4}>
          CX Training Platform
        </Typography>

        {error && <Alert severity="error" sx={{ mb: 3 }}>{error}</Alert>}

        <Typography variant="subtitle2" color="text.secondary" mb={1}>FOR TRAINEES</Typography>
        <TextField
          fullWidth
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          sx={{ mb: 2 }}
          autoComplete="username"
        />
        <TextField
          fullWidth
          type="password"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ mb: 3 }}
          autoComplete="current-password"
          onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
        />
        <Button
          fullWidth
          variant="contained"
          size="large"
          onClick={handleLogin}
          disabled={loading || !username || !password}
          sx={{ mb: 2 }}
        >
          {loading ? <CircularProgress size={24} color="inherit" /> : 'Login as Trainee'}
        </Button>

        <Box sx={{ my: 2, textAlign: 'center', color: 'text.secondary' }}>or</Box>

        <Button
          fullWidth
          variant="outlined"
          size="large"
          onClick={() => window.location.href = '/api/?api=google_auth'}
        >
          Login as Trainer / Staff (Google)
        </Button>

        <Typography variant="caption" color="text.secondary" sx={{ mt: 4, display: 'block', textAlign: 'center' }}>
          Internal Training Platform · Tabby © {new Date().getFullYear()}
        </Typography>
      </Paper>
    </Box>
  )
}