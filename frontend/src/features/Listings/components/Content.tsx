import React, { useEffect, useState } from 'react';
import './Listings.css';
import useRealtorApi from './../../../hooks/useRealtorApi.tsx';

function Content() {
    const {
        data,
        loading,
        error,
        fetchData
    } = useRealtorApi();

    const options = {
        PriceMin: 0,
        PriceMax: 1000000,
        LongitudeMin: -123.342269,
        LatitudeMin: 49.070388,
        LongitudeMax: -122.703688,
        LatitudeMax: 49.361031,
        BedRange: "1-0",
        BathRange: "1-0",
        OwnershipTypeGroupId: 0
    }

    useEffect(() => {
        fetchData(options);
        console.log(data);
    }, []);

    return (
        <div className="contain-content">

        </div>
    )
}

export default Content;