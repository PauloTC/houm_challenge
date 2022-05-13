import { HeroCardContainer } from '../../components/HeroCardContainer'
import Link from 'next/link'
import { IconButton, Typography } from '@mui/material'
import { Layout } from '../../components/Layout'
import Box from '@mui/material/Box'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { IData } from 'types'

const SearchPage: any = ({data}: IData) => {

  return (
    <Layout title='Search Page' >
      <Typography variant='h3' fontWeight={700} >Results</Typography>
      <Box display='flex' width='100%' alignItems='center' px={2} my={3} justifyContent='space-between' >
        <Link href='/characters'>
          <a>
            <IconButton aria-label="delete" size="large">
              <ArrowBackIcon fontSize="inherit" />
            </IconButton>
            <Typography fontWeight={700} component='span' variant='h6' >Back</Typography>
          </a>
        </Link>
        {
          data.results && 
            <Typography fontWeight={700} component='span' variant='h6'>{ data.results.length } results</Typography>
        }
      </Box>
      {
        data?.results ? 
          <HeroCardContainer characters={data?.results} /> :
          <h3>No se encontraron resultados</h3>
      }

    </Layout>
  )
}

export default SearchPage


export async function getServerSideProps({ query: {
    term = '',
    name = '',
    status = ''} }) {

    const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}&gender=${term}&status=${status}`)

    const data = await res.json()
  
    return {
      props: {data}
    }
  }