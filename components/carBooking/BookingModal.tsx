import React, { useRef, useEffect } from 'react';
import CarCard from '../Home/CarCard';
import Form from './Form';

function BookingModal({ car }: any) {
    const dialogRef = useRef<HTMLDialogElement>(null); // Reference to the modal dialog

    useEffect(() => {
        if (car && dialogRef.current) {
            dialogRef.current.showModal(); // Show the modal when car is available
        }
    }, [car]);

    const closeModal = () => {
        if (dialogRef.current) {
            dialogRef.current.close(); // Close the modal on save or close
        }
    };

    if (!car) {
        return null;
    }

    return (
        <dialog ref={dialogRef} className="modal-box w-11/12 max-w-5xl p-6">
            {/* Modal Header with Gradient Text */}
            <div className="border-b-[1px] pb-2">
                <h3 className="text-[30px] font-light bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 bg-clip-text text-transparent">
                    Rent a {car.name} on ₹{car.price} Per K.M
                </h3>
            </div>

            {/* Grid Layout: Car Details + Booking Form */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                {/* Left Column: Car Details */}
                <div>
                    <CarCard car={car} />
                </div>

                {/* Right Column: Booking Form */}
                <div>
                    <Form car={car} closeModal={closeModal} /> {/* Pass close function */}
                </div>
            </div>
        </dialog>
    );
}

export default BookingModal;
