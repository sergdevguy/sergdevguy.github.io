import Head from 'next/head'
import Link from 'next/link'
// Project
import Layout from '../components/layout'
// MUI
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Главная</title>
        <meta
          name="Личный сайт"
          content="Собрал всякое новое, интересное (не очень)"
        />
      </Head>
      <section>
        <Typography variant="h4" component="h1" color="primary" textAlign="center" m={{ margin: 20 }}>
          Привет.<br /> Это мой сайт.
        </Typography>
        <Typography component="p" color="primary" textAlign="center" fontSize="10px" m={{ margin: 20 }}>
          Он выглядит плохо не просто так. Собран на Next.js и MUI. Изучаю новые технологии :)
        </Typography>
        <Grid container spacing={2} mt={8}>
          <Grid item xs={6} md={3}>
            <Paper elevation={3} sx={{ padding: '15px 25px' }}>
              <Link href="/todo">
                <a>Задачник</a>
              </Link>
            </Paper>
          </Grid>
          <Grid item xs={6} md={3}>
            <Paper elevation={3} sx={{ padding: '15px 25px' }}>
              <Link href="/games">
                <a>Игрули</a>
              </Link>
            </Paper>
          </Grid>
        </Grid>
      </section>
    </Layout>
  )
}