import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import { HeroCardContainer } from '../../components/HeroCardContainer'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import { Typography } from '@mui/material'

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


const SearchPage: any = (data: any) => {

  useEffect(() => {
    console.log(data)
  },[])

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      {
        data.results ? 
        <main className={styles.main}>
          <Typography variant='h6' >Resultados</Typography>
          <Link href='/characters'>
            <a>Go Back</a>
          </Link>
          <Typography>Se encontraron {data.results.length} resultados</Typography>
          <HeroCardContainer characters={data?.results} />

        </main>  :

        <main className={styles.main} >
          <h3>No se encontraron resultados</h3>
          <Link href='/characters'>
            <a>Go Back</a>
          </Link>
        </main>

      }


      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default SearchPage


export async function getServerSideProps({ query: {term ,name ,status} }) {

    const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}&gender=${term}&status=${status}`)

    const data = await res.json()
  
    return {
      props: data
    }
  }