import React from 'react';

const Vehicleslist = ({ vehicle }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h3 className="text-xl font-semibold">{vehicle.vehicleName}</h3>
     
    </div>
  );
};

export default Vehicleslist;
