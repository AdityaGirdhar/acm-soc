import React, {useEffect, useState} from "react";

export default function Leaderboards() {
    const [data, setData] = useState([]);

    const getData = async () => {
        const response = await fetch('https://sheet.best/api/sheets/ac762f3b-4dff-439a-a87d-f321b883f8d3');
        const data = await response.json();
        setData(data);
    }

    useEffect(() => {
        getData();
    }, [])

    return(
        <>
            {data.map((item) => {
                return(
                    <div className={'flex justify-around'}>
                        <p>{JSON.stringify(item)}</p>
                    </div>
                )
            })}

        </>
    )
}