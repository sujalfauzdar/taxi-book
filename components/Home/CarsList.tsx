import React from 'react';
import CarCard from './CarCard';
import BookingModal from '../carBooking/BookingModal';


function CarsList(props: any) {

const [selectedCar, setSelectedCar] = React.useState<any>(null);


    return (
        <div className=" bg-slate-100 rounded-xl flex flex-wrap gap-x-0 gap-y-3 justify-between ">
            {props.carsList.map((car: any, index: number) => (
                <div key={car.id || index} className="w-[calc(33.3%-16px)] min-[400px]"
                 onClick={() => {(window as any).my_modal_4.showModal();
                    setSelectedCar(car);}
                }>
                    <CarCard car={car} />
                </div>
            ))}

     

            <dialog id="my_modal_4" className="modal">
                <BookingModal car = {selectedCar}/>
            </dialog>
        </div>




    )
};

export default CarsList;