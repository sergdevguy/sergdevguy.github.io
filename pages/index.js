import Head from 'next/head'
import Link from 'next/link'
// Project
import Layout from '../components/layout';
// MUI
import Container from '@material-ui/core/Container';
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
      <Container maxWidth="lg">
        <Typography variant="h5" component="h1" color="primary" textAlign="center" m={{ margin: 20 }}>
          Привет.<br /> Сюда складываю всякое, сделанное на React.
        </Typography>
        <Typography component="p" color="primary" textAlign="center" fontSize="10px">
          (Выглядит не очень, но как говорится "Я не бегун, я бодибилдер" (с) - Я не дизайнер, лучше лишний раз попрогаю)
        </Typography>
        <Typography component="p" color="primary" textAlign="center" fontSize="10px">
          (Хотя.. попозже поправлю дизайн)
        </Typography>
        <Grid container spacing={2} mt={8}>
          <Grid item xs={6} md={3}>
            <Paper elevation={3}>
              <Link href="/todo">
                <a style={{display: 'block', padding: '15px 25px'}}>Задачник</a>
              </Link>
            </Paper>
          </Grid>
          <Grid item xs={6} md={3}>
            <Paper elevation={3}>
              <Link href="/games">
                <a style={{display: 'block', padding: '15px 25px'}}>Игрули</a>
              </Link>
            </Paper>
          </Grid>
          <Grid item xs={6} md={3}>
            <Paper elevation={3}>
              <Link href="/programs">
                <a style={{display: 'block', padding: '15px 25px'}}>Проги всякие</a>
              </Link>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  )
}