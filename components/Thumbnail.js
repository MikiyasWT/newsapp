import Image from "next/image";

export default function Thumbnail({url}){
    
    return(
      <div className="w-full p-1 md:p-2 max-h-50">
        <img src={url?url:'/smartphone.jpg'} alt="gallery" className="block object-cover object-center w-full max-h-45 rounded-lg" />
      </div>
    );
}


