import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
import { useState } from 'react'
import { useRouter } from 'next/router'

const HeroPagination = ({totalPages} : any) => {

  const [currentPage, setCurrentPage] = useState(1);

  const router = useRouter()

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value)
    router.push(`/characters/?page=${value}`)
  };

  return (
    <Box display='flex' my={3} justifyContent='center' >
      <Stack spacing={2}>
        <Pagination count={totalPages} page={currentPage} onChange={handleChange} />
      </Stack>
    </Box>
  )
}

export default HeroPagination;