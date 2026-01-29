import React, { useEffect, useState } from 'react'

const DateTime = () => {
    const [datetime, setdatetime] = useState('');

    useEffect(() => {
        const updatedatetime = ()=>{
        const now = new Date();
        const formattedDateTime = now.toLocaleString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      }).replace(',', ' ')
      setdatetime(formattedDateTime)
    }

    updatedatetime();
    const interval = setInterval(updatedatetime,1000);

    return () => clearInterval(interval);

    },[])

    return <p>{datetime}</p>
}

export default DateTime
