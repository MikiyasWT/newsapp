
import News from './News'

export default function NewsGallery({news}){
    
    return(
        <div class="grid grid-cols-1 gap-4 ml-12 mr-12 grow-0 md:grid-cols-2 lg:grid-cols-3 m-10">
          
            { news != null &&
                news.map((newi) =>
                  <News  news={newi}/>
                  )
             }
               
        </div>

    );
}