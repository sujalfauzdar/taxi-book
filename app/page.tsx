"use client"
import Image from "next/image";
import { getCarsList } from "@/services";
import { useEffect,useState } from "react";
import Hero from "../components/Home/Hero";
import SearchInput from "@/components/Home/SearchInput";
import CarFilterOption from "@/components/Home/CarFilterOption";
import { use } from "react";
import CarsList from "@/components/Home/CarsList";



export default function Home() {
  const [carsList, setCarsList] = useState<any>([]);
  const [carsOrgList, setCarsOrgList] = useState<any>([]);
  const [filteredCars, setFilteredCars] = useState<any>([]);
  const [selectedType, setSelectedType] = useState<string>("All");
  const [priceSort, setPriceSort] = useState<string>("");

  useEffect(() => {
    getCarsList_();
  }, []);

  const getCarsList_ = async () => {
    const result: any = await getCarsList();
    setCarsList(result.carLists);
    setCarsOrgList(result.carLists);
    setFilteredCars(result.carLists);
  };

  const filterCarList = (type: string) => {
    setSelectedType(type);
    if (type === "All") {
      setFilteredCars(carsOrgList);
      applyPriceSort(carsOrgList, priceSort);
    } else {
      const filteredList = carsOrgList.filter((car: any) => car.carType === type);
      setFilteredCars(filteredList);
      applyPriceSort(filteredList, priceSort);
    }
  };

  const applyPriceSort = (list: any[], sortType: string) => {
    if (sortType === "high") {
      list.sort((a, b) => b.price - a.price);
    } else if (sortType === "low") {
      list.sort((a, b) => a.price - b.price);
    }
    setCarsList([...list]);
  };

  useEffect(() => {
    applyPriceSort(filteredCars, priceSort);
  }, [priceSort]);

  return (
    <div>
      <div className="p-5 sm:px-10 md:px-20">
        <Hero />
        <SearchInput />
      </div>
      <div className="bg-white p-5 sm:px-10 md:px-20">
        <CarFilterOption
          carsList={carsOrgList}
          setType={(value: any) => filterCarList(value)}
          setPriceSort={(value: any) => setPriceSort(value)}
        />
        <CarsList carsList={carsList} />
      </div>
    </div>
  );
}
