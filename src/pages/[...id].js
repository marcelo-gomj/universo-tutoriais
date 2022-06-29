import Head from 'next/head';

import { Article } from "../components/Article";
import { SideBarPost } from "../components/SideBarPost";

export default function Content() {
   return (
      <>
         <Head>
            <title>Universo Tutorias</title>
            <meta description="Todos os tutorias e dicas sobre tudo." />
         </Head>
         <div style={{ display: "flex"}}>
            <main style={{ width: "100%"}}>
               <Article />
            </main>
            <SideBarPost />
         </div>
      </>
   )
}