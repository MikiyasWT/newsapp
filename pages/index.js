import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NewsGallery from '../components/NewsGallery'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import News from '../components/News'


export const getStaticProps = async () =>{
  const res = await fetch("https://newsdata.io/api/1/news?apikey=pub_1095460b570e5e13356b6c86771f3903fda8d&q=tesla");
  
  const data = await res.json();
  //await res.json()
  
  console.log(data.results)
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
