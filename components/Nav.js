

export default function Nav(){

    return(
      
        <div class="mb-20 text-center sm:text-left">
           <nav class=" bg-gray-800">
  <div class="mx-auto max-w-7x1 px-2 sm:px-6 lg:px-8">
    <div class=" flex h-16 items-center justify-between">
      
      <div class="flex flex-1 items-center justify-center  sm:justify-start">
        
        <div class="hidden sm:ml-6 sm:block lg:justify-center">
          <div class="flex space-x-4">
            
            <a href="/" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">M.A.D News</a>

            <a href="https://github.com/mikiyaswt" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Github</a>

            <a href="https://www.linkedin.com/in/mikiyas-wendmneh/" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">LinkedIn</a>

            <a href="https://mikiyaswt.netlify.app/" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">My Portfolio</a>
          </div>
        </div>
      </div>
        <div>
        <div class="flex space-x-4">
        <a href={`/news/about`} class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About me</a>
        </div>
        </div>
      </div>
    </div>
  </nav> 
    </div>
   
    );
}