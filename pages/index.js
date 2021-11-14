import Head from 'next/head';
// components
import CardsSection from '../components/main-page/CardsSection';
import MainInfoSection from '../components/main-page/MainInfoSection';

export default function Home() {
  return (
    <>
      <Head>
        <title>Харчеко Сергей</title>
        <meta
          name="Личный сайт"
          content="Собрал всякое новое, интересное (не очень)"
        />
      </Head>
      <MainInfoSection />
      <CardsSection />
    </>
  )
}