import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import type { NextPage } from 'next'
import { useEffect } from 'react'
import { HeroCardContainer } from '../../components/HeroCardContainer'
import { HeroPagination } from '../../components/HeroPagination'
import { InputSearch } from '../../components/InputSearch'
import { Layout } from '../../components/Layout'
import styles from '../../styles/Home.module.css'

interface Location {
  name: string,
  url: string
}

interface ICharacter {
  created: string,
  episode: string[],
  gender: string,
  id: number,
  image: string,
  location: Location,
  name: string,
  origin: Location,
  species: string,
  status: string,
  type: string,
  url: string
} 
interface IInfo {
  count: number,
  next: string,
  pages: number,
  prev: any
}

interface IData {
  data : {
    info: IInfo,
    results: ICharacter[]
  }
}


const Characters: NextPage = ({data , page}: any) => {
  

  useEffect(() => {
    console.log(data)
    console.log(page)
  },[])


  return (
    <div className={styles.container}>
      <Layout>
        <Box textAlign='center' margin='auto'  maxWidth='85%' >
          <Typography color="#424242" fontWeight='bold' variant='h2'>
            <Box display='inline-block' color='#FF452B' >Houm</Box> challenge 
          </Typography>
          <Box display='flex' alignItems='center' justifyContent='space-between' my={3} >
            <InputSearch />
            <Box width={400}>
              <Typography  variant='h3' fontWeight={700} component='p'>Find your favorite character</Typography>
            </Box>
          </Box>

          <HeroCardContainer characters={data?.results} />
        </Box>
        
        <HeroPagination totalPages={data?.info?.pages} />
      </Layout>
      <br />
      <br />
      <br />
      <br />
    </div>
  )
}

export default Characters


export async function getServerSideProps({query: { page = 1 }}) {

  const res = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
  
  const data = await res.json()

  return {
    props: {data, page}
  }
}