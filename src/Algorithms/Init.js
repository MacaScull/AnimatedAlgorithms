import React, { useState } from 'react'

export default function Init() {


    function initArray() {
        let arr = []
        for (let i = 0; i < 10; i++) {
            arr.push(Math.floor(Math.random() * 10))
        }
        return arr 
    }

    const [array, setArray] = useState(initArray())

    console.log(array)
    return (
        <>
            {array ? 
                array.map((item) => (
                    <p>{item}</p>
                ))
            :
                null
            }
        </>
    )
}