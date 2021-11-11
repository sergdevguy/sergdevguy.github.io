// Next.js
import Head from 'next/head';
// MUI
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';

export default function Layout({ children }) {
  return (
    <Box>
      <CssBaseline />
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        {children}
      </div>
    </Box>
  )
}