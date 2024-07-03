import {useEffect, useState} from 'react'

function useCurrenyinfo(currency){
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`).then((res) => res.json())
    }, [])
}