import React from "react"
import ImagesData from "../data"

export const GetDataComponent = () => {
  return (
    <div className="grid grid-cols-4 container mx-auto gap-10 my-12">
      {ImagesData.map((img, i) => (
        <div
          key={i}
          className="p-1 bg-white rounded flex-colo border border-blue-400"
        >
          <img
            className="w-full h-64 object-cover"
            src={img.image}
            alt={img.title}
          />

          <h1 className="font-semibold text-blue-800 italic my-4 leading-8">
            {img.title}
          </h1>
        </div>
      ))}
    </div>
  )
}
