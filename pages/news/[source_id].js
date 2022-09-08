import { useRouter } from "next/router";
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import Thumbnail from "../../components/Thumbnail";


export const getStaticProps = async () =>{
  //"https://newsdata.io/api/1/news?apikey=pub_1095460b570e5e13356b6c86771f3903fda8d&q=tesla"
  
  
    const res = await fetch(process.env.NEXT_PUBLIC_BACKEND_API);
    
    const data = await res.json();
    
    return {
      props : {
        news:data.results || null
      }
    }
  }


  export async function getStaticPaths() {
    const res = await fetch(process.env.NEXT_PUBLIC_BACKEND_API);
    
    const data = await res.json();
    const paths = data.results.map((news) => ({
        params: { source_id: news.source_id },
      }))
    
    return { paths, fallback: false }
  }


export default function NewsDetail({news}){

    const {query} = useRouter();
    const temp = news.find(x => x.source_id == query.source_id)
    const {title,description,content,pubDate,source_id,image_url}  = temp
    return(
      <div>
      <Nav />
       <div class="p-40 pt-0 mt-0 ">
          <div class="overflow-hidden text-gray-700 max-h-90"> 
                    
                    <Thumbnail class="p-0 m-o" url={image_url} /> 
          </div>

        <div class="m-5">
          <h1 class="font-black md:font-bold pb-5">{title} &nbsp {pubDate} </h1><hr />
          
          <h2 class="font-semibold md:font-semibold pb-5">{description}</h2>
          <h6 class="font-medium">{content}</h6>

        </div>
       </div>
       <Footer />
      </div>
    );
}