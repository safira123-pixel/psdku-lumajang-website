import React, { useEffect, useState } from 'react'
import { useTranslation, withTranslation } from 'react-i18next'


const MarqueeText = (props) => {
    const [data, setData] = useState([]);
    const { classes} = props
    const { t } = useTranslation();
    useEffect(() => {
        fetch('http://localhost:8080/api/kegiatan') // Pastikan URL endpoint sesuai
        .then(response => response.json())
        .then(data => {
            setData([data.content]);
            console.log(data.content);
        })
        .catch(error => {
            console.error(error);
        });
    }, []);
    
    return (
    <marquee direction = "left" behavior = "scroll" scrollamount="20">
         {data.map((item, index) => (
                        <div key={index}>
                            <h2>{item[0].name}</h2>
                        </div>
                    ))} 
        </marquee>
);
}

export default MarqueeText;