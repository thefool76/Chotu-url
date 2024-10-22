'use client';

import ShortenForm from "./shorten-Form";
import UrlList from "./url-list";
import { useState } from "react";

export default function UrlContainer() {
    const [refreshKey, setRefreshKey] = useState(0);
    
    const handleUrlShortened = () => {
        setRefreshKey((prev) => prev + 1)
    }
    return (
    <div>
        <ShortenForm handleUrlShortened= {handleUrlShortened}/>
        <UrlList key={refreshKey}/>
    </div>
    )
}