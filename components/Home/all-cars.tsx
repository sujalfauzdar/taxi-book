"use client"; // Ensure this is a client component
import { useEffect, useState } from "react";
import { getCarsList } from "@/services";
import CarsList from "@/components/Home/CarsList";

export default function AllCars() {
  const [carsList, setCarsList] = useState<any>([]);

  useEffect(() => {
    getCarsList_();
  }, []);

  const getCarsList_ = async () => {
    const result: any = await getCarsList();
    setCarsList(result.carLists);
  };

  return (
    <div className="bg-white p-5 sm:px-10 md:px-20">
      <h1 className="text-3xl font-bold mb-6">All Cars</h1>
      {carsList.length > 0 && <CarsList carsList={carsList} />}
    </div>
  );
}