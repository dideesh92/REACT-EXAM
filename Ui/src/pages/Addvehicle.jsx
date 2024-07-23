import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Addvehicle = () => {
    const[servicenumber,setServiceNumber]=useState('')
    const [vehiclenumber, setVehicleNumber] = useState('');
    const [vehicletype, setVehicleType] = useState('');
    const [servicegivendate , setServiceGivenDate] = useState('');
    const [estimatedtimeofcompletion, seteEstimatedTimeofCompletion] = useState('');
    const [vehicleownername, setVehicleOwnername] = useState('');
    const [servicedetails, setServiceDetails] = useState('');
    
    const navigate = useNavigate();

    const addvehicle = async (newVehicle) => {
        const res = await fetch('api/addvehicles', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newVehicle),
        });
        return res;
    };

    const submitForm = async (e) => {
        e.preventDefault();
        const newVehicle = {servicenumber, vehiclenumber, vehicletype,servicegivendate,estimatedtimeofcompletion,vehicleownername,servicedetails};
        const res = await addvehicle(newVehicle);
        if (res.ok) {
            toast.success('New vehicle  details are added');
            navigate('/home');
        } else {
            toast.error('Failed to add details');
        }
    };

    return (
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md mx-auto mt-[10%]">
            <h2 className="text-2xl font-bold mb-6">Add Vehicle Details</h2>
            <form onSubmit={submitForm}>
                
                <div className="mb-4">
                    <label htmlFor="recipe_id" className="block text-gray-700 text-sm font-bold mb-2">Service Number</label>
                    <input type="text" id="recipe_id" name="vehiclenumber" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required value={servicenumber} onChange={(e) => setServiceNumber(e.target.value)} />
                </div>
                <div className="mb-4">
                    <label htmlFor="recipe_id" className="block text-gray-700 text-sm font-bold mb-2">Vehicle Number</label>
                    <input type="text" id="recipe_id" name="vehiclenumber" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required value={vehiclenumber} onChange={(e) => setVehicleNumber(e.target.value)} />
                </div>

                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Vehicle type</label>
                    <input type="text" id="name" name="vehicletype" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required value={vehicletype} onChange={(e) => setVehicleType(e.target.value)} />
                </div>
                <div className="mb-4">
                    <label htmlFor="recipe_id" className="block text-gray-700 text-sm font-bold mb-2">Service given date </label>
                    <input type="text" id="recipe_id" name="vehiclenumber" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required value={servicegivendate} onChange={(e) => setServiceGivenDate(e.target.value)} />
                </div>
                    <div className="mb-4">
                    <label htmlFor="recipe_id" className="block text-gray-700 text-sm font-bold mb-2">Estimated time of completion</label>
                    <input type="text" id="recipe_id" name="vehiclenumber" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required value={estimatedtimeofcompletion} onChange={(e) => seteEstimatedTimeofCompletion(e.target.value)} />
                </div>
                <div className="mb-4">
                    <label htmlFor="ingredients" className="block text-gray-700 text-sm font-bold mb-2">vehicle owner name</label>
                    <input type="text" id="recipe_id" name="vehiclenumber" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required value={vehicleownername} onChange={(e) => setVehicleOwnername(e.target.value)} />
                </div>
                <div className="mb-4">
                    <label htmlFor="instructions" className="block text-gray-700 text-sm font-bold mb-2">Service details</label>
                    <textarea id="instructions" name="instructions" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" rows="4" required value={servicedetails} onChange={(e) => setServiceDetails(e.target.value)} ></textarea>
                </div>
                <div className="flex items-center justify-between">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Addvehicle;
