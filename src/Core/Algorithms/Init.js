import React, { useState } from 'react'
import { Button } from '@material-ui/core'


export default function Init() {

    const [start, setStart] = useState([0,0])
    const [algoBool, setAlgoBool] = useState(false)
    const [continBool, setContinBool] = useState(false)

    const [array, setArray] = useState([])

    if (array.length < 1) setArray(initArray())

    function initArray() {
        let arr = []
        for (let i = 0; i < 10; i++) {
            arr.push({key: "item"+i, value: Math.floor(Math.random() * 10), colour: 'black'})
        }
        return arr 
    }

    function bubbleSort(array) {
        let arr = JSON.parse(JSON.stringify(array))
        let flag = 0

        // console.log(array, start, arr.length)
        for (let i = start[0]; i < arr.length; i++) {
            for (let j = start[1]; j < arr.length -i-1; j++) {
                // console.log(i, j)

                if (algoBool === true) {
                    // console.log(arr[j], arr[j+1])
                    if (arr[j].value > arr[j+1].value) {
                        console.log(true)
                        arr[j].value = arr[j].value + arr[j+1].value
                        arr[j+1].value = arr[j].value - arr[j+1].value
                        arr[j].value = arr[j].value - arr[j+1].value
                    }

                    setStart(j < (arr.length -2 - start[0]) ? [start[0], j+1] : [start[0]+1,0])
                    setAlgoBool(false)
                    setArray(arr)
                    break
                }
            }
            // if (algoBool === true) {
            //     setStart([i+1, 0])
            //     setAlgoBool(false)
            //     setArray(arr)
            //     break
            // }
            // if (continBool === false) {
            //     setContinBool(true)
            //     break
            // }

            // if (flag === 0) break
        }
        
    }

    console.log(array, start, algoBool)

    if (algoBool === true) bubbleSort(array)

    return (
        <>
            {array ? 
                array.map((item, index) => (
                    <p style={{color: start[1] === index || start[1]+1 === index ? 'red' : item.colour}}>{item.value}</p>
                ))
            :
                null
            }
            <Button onClick={() => setAlgoBool(true)} >Click Me</Button>
        </>
    )
}