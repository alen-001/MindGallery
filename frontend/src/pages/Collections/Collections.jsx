import React from 'react'
import CardArray from '@/components/ui/CardArray'
import { useState } from 'react'
import { ChevronLeft, ChevronRight, Plus, Grid, List ,GalleryHorizontal} from 'lucide-react'
function AddNote(){
    console.log('Add Note');}
function Collections() {
  const [view,setView]=useState('grid');
  return (
    <div className='flex-row items-center justify-center w-full h-full '>
            <button
                className="absolute left-24 top-96 transform -translate-y-1/2 bg-[#121212e2] hover:bg-[#1c1c1c] hover:scale-110 transition duration-200 p-2 rounded-full shadow-md"
                onClick={() => {
                    document.querySelector('.overflow-x-scroll').scrollBy({ left: -200, behavior: 'smooth' });
                }}
            >
                <ChevronLeft className='w-10 h-10' strokeWidth="1.2"/>
            </button>
            <CardArray/>
            <button
                className="absolute right-24 top-96 transform -translate-y-1/2 bg-[#121212e2] hover:bg-[#1c1c1c] hover:scale-110 transition duration-200 p-2 rounded-full shadow-md"
                onClick={() => {
                    document.querySelector('.overflow-x-scroll').scrollBy({ left: 200, behavior: 'smooth' });
                }}
            >
                <ChevronRight className='w-10 h-10' strokeWidth="1.2"/>
            </button>
            {view=="gallery"?<button
                className="absolute right-24 top-40 transform -translate-y-1/2 bg-[#121212e2] hover:bg-[#1c1c1c] hover:scale-110 transition duration-200 p-2 rounded-lg shadow-md"
                onClick={() => {
                    setView('list');
                }}>
                <List className='w-5 h-5' strokeWidth="1.2"/>
                </button>:<button
                className="absolute right-24 top-40 transform -translate-y-1/2 bg-[#121212e2] hover:bg-[#1c1c1c] hover:scale-110 transition duration-200 p-2 rounded-lg shadow-md"
                onClick={() => {
                    setView('gallery');
                }}>
                <GalleryHorizontal className='w-5 h-5' strokeWidth="1.2"/></button>}
            <button title="Add note" className="absolute right-16 bottom-6 opacity-50 transform -translate-y-1/2 bg-[#121212e2] hover:bg-[#1c1c1c] hover:scale-150 hover:-translate-x-4  hover:opacity-75 transition duration-200 p-2 rounded-full shadow-md"
                onClick={AddNote}>
                <Plus className='w-10 h-10' strokeWidth="1"/>
            </button>

    </div>
  )
}

export default Collections
