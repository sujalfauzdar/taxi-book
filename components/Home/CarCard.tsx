import React, { useState } from "react";
import Image from "next/image";
import { FaGasPump } from "@react-icons/all-files/fa/FaGasPump";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { MdDirectionsCar } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";



function CarCard(props: any) {
  const [car, setCar] = useState<any>(props.car);
  if (!car) {
    return <div className="text-center text-gray-500">Loading...</div>; 
  }

  return (
    <div className=" flex-item-center justify-center mt-3 
    group bg-gray-100 p-4 rounded-xl shadow-md cursor-pointer border border-stone-300 flex flex-col relative w-[430px] overflow-hidden hover:border-cyan-500">
      
      

      {/* Image Section */}
      <div className="w-full h-52 relative">
        {car.image?.length > 0 && (
          <Image
            src={car.image[0].url}
            alt={car.name}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        )}
      </div>

      
      <div className="w-full text-center mt-3 group-hover:text-white relative">
        <h2 className="inline-block bg-cyan-400 px-4 py-1 rounded-full font-extrabold text-[24px] text-gray-800 group-hover:bg-transparent group-hover:border group-hover:border-cyan-400">
          {car.name}
        </h2>

       
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-blue-600 font-bold text-black px-4 py-2 rounded-full inline-flex items-center gap-2 w-[250px] h-[50px] text-xl 
          group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:from-10% group-hover:via-sky-500 group-hover:via-30% group-hover:to-emerald-500 group-hover:to-90%">
            Book Now <FaArrowRight className="ml-20 text-black " />
          </button>
        </div>
      </div>

    <div className="flex items-center justify-center gap-2 mt-3">
      <h2 className="text-lg font-bold text-blue-600 text-center mt-2">
        ₹{car.price} <span className="text-sm text-gray-500">/K.M</span>
      </h2>
      <div className="text-lg font-bold text-blue-600 text-center mt-2">
        {car.carAvg} <span className="text-sm text-gray-500">Kmpl</span>
      </div>
     </div>
     
      <div className="w-full flex flex-wrap justify-center gap-3 mt-3">

      {(Array.isArray(car.seat) ? car.seat : [car.seat]).map((seatType: string, index: number) => (
    <div key={index} className="flex items-center bg-gray-600 px-3 py-1 rounded-full text-sm">
      <MdAirlineSeatReclineNormal className="text-blue-600 mr-1" />
      {seatType} Seater
    </div>
  ))}

        {Array.isArray(car.fuelType) &&
  car.fuelType.map((fuel: string, index: number) => (
    <div key={index} className="flex items-center bg-green-200 text-green-700 px-3 py-1 rounded-full text-sm">
      <FaGasPump className="mr-1" />
      {fuel}
    </div>
))}


{Array.isArray(car.gearType) &&
  car.gearType.map((gear: string, index: number) => (
    <div key={index} className="flex items-center bg-red-200 text-red-700 px-3 py-1 rounded-full text-sm">
      <MdDirectionsCar className="mr-1" />
      {gear}
    </div>
        ))}
      </div>
      
      
    </div>
  );
}

export default CarCard;
