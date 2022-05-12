import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Head from 'next/head'

const Layout = ({children}: any) => {

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;800&display=swap" rel="stylesheet" />
      </Head>
      <Box my={5} >
        { children }
      </Box>
    </>
  )
}

export default Layout;