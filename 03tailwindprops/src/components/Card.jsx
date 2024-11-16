import React from 'react'

function Card({username,btnText}) {
        console.log({username});

return (
<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-40">
        <a href="#">
                <img className="rounded-t-lg" src="https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </a>
        <div className="p-5">
                <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{username}</h5>
                </a>
                <button class="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
{btnText} 
</button>
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    {/* <path stroke="currentColor" strokelinecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/> */}
                                <path d="M10 10 L90 90" strokeLinecap="round" />
                        </svg>
                
        </div>
</div>
)
}

 export default Card