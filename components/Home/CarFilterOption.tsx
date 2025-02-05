import React from 'react';
import { useState ,useEffect} from 'react';




function CarFilterOption({ carsList, setType, setPriceSort }: any) {
    const [typeList, setTypeList] = useState<any>([]);
    const TypeSet = new Set();
  
    useEffect(() => {
      filterCarList();
    }, [carsList]);
  
    const filterCarList = () => {
        TypeSet.add("All");
      carsList.forEach((Element: any) => {
        TypeSet.add(Element.carType);
      });
      setTypeList(Array.from(TypeSet));
    };
  
    return (
      <div className="mt-10 flex items-center justify-between px-4 py-5 rounded-xl bg-blue-400">
        <div>
          <h1 className="text-[30px] font-extrabold text-black">Find Cars</h1>
          <h1 className="text-black">Cars that you should try</h1>
        </div>
        <div className="flex gap-5">
          <select
            className="select select-error w-full max-w-xs"
            defaultValue=""
            onChange={(e) => setPriceSort(e.target.value)}
          >
            <option value="" disabled>
              Sort Price
            </option>
            <option value="high">Max to Min</option>
            <option value="low">Min to Max</option>
          </select>
          <select
            className="select select-error w-full max-w-xs"
            defaultValue="ALL"
            onChange={(e) => setType(e.target.value)}
          >
            <option value="" disabled>
              Sort by car type
            </option>
            {typeList.map((type: any, index: number) => (
              <option key={index}>{type}</option>
            ))}
          </select>
        </div>
      </div>
    );
  }
  
  export default CarFilterOption;
  