import React from 'react'

function Card({title, content, tag,color}) {
return (
    <div
      className="flex flex-col hover:bg-[#252525] rounded-2xl shadow-lg p-6 m-6 hover:shadow-2xl transition duration-300 ease-in-out opacity-70 hover:opacity-100 bg-[#171717] hover:scale-110"
      style={{ width: '270px', height: '400px' }}
    >
      <div className="text-4xl font-bold text-white text-left w-full mb-4 break-words ">
        {title}
      </div>

      {/* Content Section */}
      <div className="text-grey-100 opacity-70 text-left h-full break-words pt-4 overflow-hidden text-ellipsis">
        {content}
      </div>

      {/* Tag Section */}
      <div
        className="w-12 h-6 rounded-xl mt-4 text-white text-center text-sm self-end "
        style={{ backgroundColor: `${color}`,fontSize:'10px' }}
      >{tag}</div>
    </div>
)
}

export default Card
