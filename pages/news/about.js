import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Impact from "../../components/Impact";
import { Info } from "../../lib/info";


export default function About(){

    return(
    <div>
      <Nav />
       <div className="pt-10 mt-0">
          <div className="overflow-hidden text-gray-700 "> 

             
          {
            Info.map((item) => (
                <Impact key={item.id} item={item}/> 
            ))
          }       
                    
          </div>

        
       </div>
       <Footer />
      </div>
    );
}