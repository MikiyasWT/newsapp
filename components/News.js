import Thumnail from './Thumbnail'
import ShortPreview from './ShortPreview';
import Link from "next/link"

export default function News({news}){
   
    const {title,description,source_id,image_url}  = news
    
    return(
        <div class="overflow-hidden max-h-100">
            
            <Link href={`/news/${source_id}`}>
                <div class="overflow-hidden text-gray-700 "> 
                
                  <Thumnail url={image_url} /> 
                </div>
            </Link>
            <div class="bg-slate-100 max-h-40 center">
                <h1>{title}</h1>
                <h3>{description?.toString().substring(0,50)}</h3>
                
            </div>
            <div>
            <Link  href={`/news/${source_id}`}>
                <h4 class="no-underline hover:underline text-blue-600  hover:text-red-600">Read More</h4>
            </Link>
            </div>
        </div>
    );
}

