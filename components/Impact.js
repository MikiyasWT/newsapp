
export default function Impact({item}){
    const {title,image_url,id,note} = item;
    let evenorodd = id%2;
   console.log(id)
return(

  
    evenorodd == 0? (
      <div className="flex flex-row max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-5xl max-h-100 p-10 m-10">
      <div className="md:flex">
          <div className="md:shrink-0 ">  
           <img className="h-55 w-full object-cover md:h-full md:w-48 max-h-60 rounded-full" src={image_url}  />
      </div>
  
      <div className="p-8 ml-40 justify-end">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{title}</div>
        <p className="mt-2 text-slate-500">{note}</p>
      </div>
  
    </div>
  </div>):<div className="flex  max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-5xl max-h-100 p-10 m-10">
      <div className="flex-row-reverse space-x-4 space-x-reverse md:flex">
          <div className="md:shrink-0 ">  
           <img className="h-55 w-full object-cover md:h-full md:w-48 max-h-60 rounded-full" src={image_url}  />
      </div>
  
      <div className="p-8 ml-40 justify-end">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{title}</div>
        <p className="mt-2 text-slate-500">{note}</p>
      </div>
  
    </div>
  </div>
    
        
    );
}






