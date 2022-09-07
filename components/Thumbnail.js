

export default function Thumbnail({url}){
    
    return(
      <div class="w-full p-1 md:p-2 max-h-50">
        <img src={url?url:'/smartphone.jpg'} alt="gallery" class="block object-cover object-center w-full max-h-45 rounded-lg" />
      </div>
    );
}


