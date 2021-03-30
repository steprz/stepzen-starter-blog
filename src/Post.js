import React from 'react';

const Post = () => {
const imgURL = 'https://images.unsplash.com/photo-1572451479139-6a308211d8be?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fGN1cGNha2V8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    return (
        //hero
        <div className="full-width h-auto lg:flex justify-between py-20 px-10 bg-indigo-100 text-indigo-100">
             {/* left */}
                <div className="w-full mb-10 md:mb-0">
                <h2 className="text-2xl md:text-4xl lg:text-6xl text-indigo-900 mb-6 shadow-2xs">Welcome to your post</h2>    
                <div className="w-1/2 mb-10 md:mb-0">
                    <img 
                    src={imgURL}
                    alt="image of woman showing a man a laptop"
                    className="w-full rounded shadow-2xl"/>
                </div>
                <p className="mb-6 text-yellow-600 mt-6">You can customize it how you like using <a href="https://tailwindcss.com/docs" className="text-yellow-500">Tailwind</a>.</p>  
                <h1 className="text-4xl text-indigo-600">Lorem Ipsum</h1>
                <p className="text-2md text-indigo-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                       It has survived not only five centuries, but also the leap into electronic typesetting, 
                       remaining essentially unchanged. It was popularised in the 1960s with the release 
                       of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                        publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <h2 className="text-indigo-600 mb-6">Lorem Ipsum</h2>    
                <p className="text-2md text-indigo-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                       It has survived not only five centuries, but also the leap into electronic typesetting, 
                       remaining essentially unchanged. It was popularised in the 1960s with the release 
                       of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                        publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                
             {/* right */}

        </div>
    )
}

export default Post;