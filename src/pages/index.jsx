import Head from 'next/head';

import { HomeBanner } from '../components/HomeBanner';
import { postsBanner } from '../services/contentful';

export default function Home({ data }) {  
   return (
      <>
         <Head>
            <title>Universo Tutorias</title>
            <meta description="Todos os tutorias e dicas sobre tudo." />
         </Head>

         <HomeBanner items={data.items}/>

         <main>
         </main>
      </>
   )
}

export async function getServerSideProps(){
   const data = await postsBanner()
   return { props: { data } }
}