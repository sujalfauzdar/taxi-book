import { createBooking } from '@/services';
import React, { useEffect, useState } from 'react';
import { getStoreLocations } from '@/services';

function Form({ car, closeModal }: any) {
    const [storeLocation, setStoreLocation] = useState<any>([]);
    const [formValue, setFormValue] = useState({
        username: "",
        email: "",
        location: "",
        pickupDate: "",
        dropOffDate: "",
        pickupTime: "",
        dropOffTime: "",
        contactNumber: "",
        carId: { connect: { id: "" } }
    });

    useEffect(() => {
        getStoreLocation_();
    }, []);

    useEffect(() => {
        if (car) {
            setFormValue((prev) => ({
                ...prev,
                carId: { connect: { id: car.id } }
            }));
        }
    }, [car]);

    const getStoreLocation_ = async () => {
        const resp: any = await getStoreLocations();
        setStoreLocation(resp?.storesLocations);
    };

    const handleChange = (event: any) => {
        setFormValue((prev) => ({
            ...prev,
            [event.target.name]: event.target.value
        }));
    };

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        if (!formValue.contactNumber.trim()) {
            alert("⚠️ Contact Number is required!");
            return;
        }

        try {
            const response = await createBooking(formValue);
            if (response) {
                alert("🎉 Booking submitted successfully!");

                setFormValue({
                    username: "",
                    email: "",
                    location: "",
                    pickupDate: "",
                    dropOffDate: "",
                    pickupTime: "",
                    dropOffTime: "",
                    contactNumber: "",
                    carId: { connect: { id: car?.id || "" } }
                });

                closeModal(); // ✅ Close modal after successful save
            } else {
                alert("❌ Failed to submit booking. Please try again.");
            }
        } catch (error) {
            alert("⚠️ An error occurred while submitting the form.");
        }
    };

    return (
        <div className="bg-white p-5 rounded-lg shadow-md w-full max-w-2xl mx-auto">
            {/* Form Fields Here... */}
            <div className="mb-4">
                <label className="form-control w-full">
                    <div className="label"><span className="label-text font-semibold">Full Name</span></div>
                    <input type="text" placeholder="Enter store username" className="input input-bordered w-full" name="username" value={formValue.username} onChange={handleChange} />
                </label>
            </div>

            <div className="mb-4">
                <label className="form-control w-full">
                    <div className="label"><span className="label-text font-semibold">Email</span></div>
                    <input type="email" placeholder="Enter email" className="input input-bordered w-full" name="email" value={formValue.email} onChange={handleChange} />
                </label>
            </div>

            <div className="w-full">
                <label className="form-control w-full">
                    <div className="label"><span className="label-text font-semibold">PickUp Location</span></div>
                    <select className="select select-info w-full" name="location" value={formValue.location} onChange={handleChange}>
                        <option value="">PickUp Location</option>
                        {storeLocation?.map((loc: any, index: number) => (
                            <option key={index} value={loc?.address}>{loc?.address}</option>
                        ))}
                    </select>
                </label>
            </div>

            <div className="flex flex-col md:flex-row md:gap-4 mt-4">
                <div className="w-full">
                    <label className="form-control w-full">
                        <div className="label"><span className="label-text font-semibold">PickUp Date</span></div>
                        <input type="date" className="input input-bordered w-full" name="pickupDate" value={formValue.pickupDate} onChange={handleChange} />
                    </label>
                </div>

                <div className="w-full">
                    <label className="form-control w-full">
                        <div className="label"><span className="label-text font-semibold">Drop-off Date</span></div>
                        <input type="date" className="input input-bordered w-full" name="dropOffDate" value={formValue.dropOffDate} onChange={handleChange} />
                    </label>
                </div>
            </div>

            <div className="flex flex-col md:flex-row md:gap-4 mt-4">
                <div className="w-full">
                    <label className="form-control w-full">
                        <div className="label"><span className="label-text font-semibold">PickUp Time</span></div>
                        <input type="time" className="input input-bordered w-full" name="pickupTime" value={formValue.pickupTime} onChange={handleChange} />
                    </label>
                </div>

                <div className="w-full">
                    <label className="form-control w-full">
                        <div className="label"><span className="label-text font-semibold">Drop-off Time</span></div>
                        <input type="time" className="input input-bordered w-full" name="dropOffTime" value={formValue.dropOffTime} onChange={handleChange} />
                    </label>
                </div>
            </div>

            <div className="mt-4">
                <label className="form-control w-full">
                    <div className="label"><span className="label-text font-semibold">Contact No.</span></div>
                    <input type="tel" placeholder="Enter Contact Number" className="input input-bordered w-full" name="contactNumber" value={formValue.contactNumber} onChange={handleChange} required />
                </label>
            </div>

            <div className="modal-action">
                <button type="button" className="btn mr-1" onClick={closeModal}>Close</button>

                <button className="font-bold text-white px-4 py-2 rounded-[6px] inline-flex items-center gap-2 w-[80px] h-[45px] text-lg  
                    bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  
                    hover:from-indigo-600 hover:via-sky-400 hover:to-emerald-700 transition-all duration-300"
                    onClick={handleSubmit}>
                    Save
                </button>
            </div>
        </div>
    );
}

export default Form;
