import React from 'react'

function Loading() {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="relative w-16 h-16">
                <div className="absolute inset-0 border-4 border-transparent border-t-blue-500 rounded-full animate-spin-slow animate-scale"></div>
                <div className="absolute inset-1 border-4 border-transparent border-r-purple-500 rounded-full animate-spin-medium animate-fade"></div>
                <div className="absolute inset-2 border-4 border-transparent border-b-pink-500 rounded-full animate-spin-fast animate-shrink"></div>
                <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-yellow-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse animate-fade-in-out"></div>
            </div>
        </div>
    );
}

export default Loading