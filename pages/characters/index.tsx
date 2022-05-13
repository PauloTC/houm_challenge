import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { HeroCardContainer } from '@/components/HeroCardContainer'
import { HeroPagination } from '@/components/HeroPagination'
import { SearchForm } from '@/components/SearchForm'
import { Layout } from '@/components/Layout'
import styles from '../../styles/Home.module.css'
import { IData } from '../../types'

const Characters = ({data}: IData) => {
  
  return (
    <div className={styles.container}>
      <Layout title='Characters Page' >
          <Box display='flex' my={4} px={4} alignItems='center' justifyContent='space-between'>
            <Box textAlign='right' width={500}>
              <Typography  variant='h3' fontWeight={700} component='p'>Find your favorite <Box color='#FF452B'component='span' >character</Box> </Typography>
            </Box>
            <SearchForm />
          </Box>

          <HeroCardContainer characters={data?.results} />

        <HeroPagination totalPages={data?.info?.pages} />
      </Layout>
    </div>
  )
}

export default Characters


export async function getServerSideProps({query: { page = 1 }}) {

  const res = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
  
  const data = await res.json()

  return {
    props: {data}
  }
}