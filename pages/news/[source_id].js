import { useRouter } from "next/router";
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import Thumbnail from "../../components/Thumbnail";


export const getStaticProps = async () =>{
  
  
  
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
       <div className="p-40 pt-0 mt-0 ">
          <div className="overflow-hidden text-gray-700 max-h-90"> 
                    
                    <Thumbnail className="p-0 m-o" url={image_url} /> 
          </div>

        <div className="m-5">
          <h1 className="font-black md:font-bold pb-5">{title} &nbsp {pubDate} </h1><hr />
          
          <h2 className="font-semibold md:font-semibold pb-5">{description}</h2>
          <h6 className="font-medium">{content}</h6>

        </div>
       </div>
       <Footer />
      </div>
    );
}