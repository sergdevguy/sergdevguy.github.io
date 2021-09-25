// Next.js
import Head from 'next/head';
import Nav from './nav/Nav';
// MUI
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';

export default function Layout({ children }) {
  return (
    <Box sx={{ minHeight: '100vh' }}>
      <CssBaseline />
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box sx={{ bgcolor: 'primary.dark' }}>
        <Container maxWidth="lg">
          <Nav />
        </Container>
      </Box>
      <Container maxWidth="lg" color="primary">
        {children}
      </Container>
    </Box>
  )
}