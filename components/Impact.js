

export default function Impact({item}){
    const {title,image_url,id,note} = item;
   console.log(id)
return(
<div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-5xl max-h-100 p-10 m-10">
    <div class="md:flex">
        <div class="md:shrink-0 ">  
         <img class="h-55 w-full object-cover md:h-full md:w-48 max-h-60 rounded-full" src={image_url}  />
    </div>

    <div class="p-8 ml-40 justify-end">
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{title}</div>
      <p class="mt-2 text-slate-500">{note}</p>
    </div>

  </div>
</div>
        
    );
}

