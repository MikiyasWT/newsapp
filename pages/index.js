import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NewsGallery from '../components/NewsGallery'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import News from '../components/News'


export const getStaticProps = async () =>{
  const res = await fetch(process.env.NEXT_PUBLIC_BACKEND_API);
  
  const data = await res.json();
  
  return {
    props : {
      news:data.results || null
    }
  }
}


export default function Home({news}) {
  console.log(news)
  return (
    <div>
      <Nav />
      <NewsGallery news={news}/> 
      <Footer />
    </div>
  )
}
