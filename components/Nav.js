import Link from "next/link"

export default function Nav(){

    return(
      
        <div className="sticky top-0 z-50 mb-20 text-center sm:text-left">
           <nav className=" bg-gray-800">
  <div className="mx-auto max-w-7x1 px-2 sm:px-6 lg:px-8">
    <div className=" flex h-16 items-center justify-between">
      
      <div className="flex flex-1 items-center justify-center  sm:justify-start">
        
        <div className=" sm:ml-6 sm:block lg:justify-center">
          <div className="flex space-x-4">
            
            <a href="/" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">M.A.D News</a>

            <a href="https://github.com/mikiyaswt" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Github</a>

            <a href="https://www.linkedin.com/in/mikiyas-wendmneh/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">LinkedIn</a>

            <a href="https://mikiyaswt.netlify.app/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">My Portfolio</a>
            
          </div>
        </div>
      </div>
        <div>
        <div className="flex space-x-4">
        <a href={`/news/about`} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About me</a>
        </div>
        </div>
      </div>
    </div>
  </nav> 
    </div>
   
    );
}



