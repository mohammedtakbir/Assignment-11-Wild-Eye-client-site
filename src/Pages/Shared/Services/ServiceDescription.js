import React from 'react';

const ServiceDescription = ({ desCrip }) => {
    const { description1, description2, description3 } = desCrip;
    return (
        <>
            <h2 className='text-sm mb-3'>{description1}</h2>
            <h2 className='text-sm mb-3'>{description2}</h2>
            <h2 className='text-sm mb-3'>{description3}</h2>
        </>
    );
};

export default ServiceDescription;