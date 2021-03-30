import React from 'react';

const Home = () => {
const imgURL = 'https://images.unsplash.com/photo-1611095564985-89765398121e?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80'
    return (
        //hero
        <div className="h-screen lg:flex justify-between py-20 px-10 bg-indigo-100 text-indigo-100">
             {/* left */}
                <div className="md:w-1/2 mb-10 md:mb-0">
                <h2 className="text-2xl md:text-4xl lg:text-6xl text-indigo-900 mb-6 shadow-2xs">Welcome to your blog</h2>    
                <p className="mb-6 text-yellow-600">You can customize it how you like using <a href="https://tailwindcss.com/docs" className="text-yellow-500">Tailwind</a>.</p>  
                <a href="#" className="inline-block py-3 px-6 text-lg bg-gray-100 text-gray-800 rounded mr-2 hover:bg-gray-300">About You</a>
                <a href="#" className="inline-block py-3 px-6 text-lg bg-yellow-400 text-yellow-800 hover:bg-yellow-300 md:mb-3">Your Posts</a>
                </div>
             {/* right */}
                <div className="md:w-1/2 mb-10 md:mb-0">
                    <img 
                    src={imgURL}
                    alt="image of woman showing a man a laptop"
                    className="w-full rounded shadow-2xl"/>
                </div>
        </div>
    )
}

export default Home;