import Box from '@mui/material/Box';
import { useState } from 'react'
import { useRouter } from 'next/router'
import { FormControl } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const InputSearch = () => {

  const router = useRouter()

  const [gender, setGender] = useState('');
  const [name, setName] = useState('')
  const [status, setStatus] = useState('')

  const handleSubmit = (e : any) => {
    e.preventDefault()
    router.push(`/characters/search?name=${name}&term=${gender}&status=${status}`)
  }

  return (
    <Box width={400} py={3} px={5} sx={{ border: '1px solid #B0BEC5' }} borderRadius={4} display='flex' flexDirection='column' border={2}  gap={3} >
      <Box sx={{ minWidth: 120 }}>
        <FormControl variant="standard" fullWidth>
          <TextField value={name} onChange={(e) => setName(e.target.value)} id="standard-basic" label="Name" variant="standard" />
        </FormControl>
      </Box>
      <Box sx={{ minWidth: 120 }}>
        <FormControl variant="standard" fullWidth>
          <InputLabel id="demo-simple-select-standard-label">Gender</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            label="Gender"
          >
            <MenuItem value='male'>Male</MenuItem>
            <MenuItem value='female'>Female</MenuItem>
            <MenuItem value='genderless'>Genderless</MenuItem>
            <MenuItem value='unknown'>Unknown</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ minWidth: 120 }}>
        <FormControl variant="standard" fullWidth>
          <InputLabel id="demo-simple-select-standard-label">status</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            label="Status"
          >
            <MenuItem value='alive'>alive</MenuItem>
            <MenuItem value='dead'>dead</MenuItem>
            <MenuItem value='unknown'>unknown</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box mt={1} px={3} >
        <Button disabled={!name && !gender && !status} fullWidth sx={{ background: '#FF452B' }} onClick={handleSubmit} variant="contained">Search</Button>
      </Box>
    </Box>
  )
}

export default InputSearch;