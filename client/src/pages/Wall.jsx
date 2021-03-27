import React, { useEffect }  from 'react'
import { useSelector, useDispatch } from "react-redux";
import { setPageName } from '../store/actions/pageActions'



export const Wall = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPageName('1'))
    })

    return (
        <div>
            <h1>wall</h1>
        </div>
    )
}
