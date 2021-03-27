import React, { useEffect }  from 'react'
import { useSelector, useDispatch } from "react-redux";
import { setPageName } from '../store/actions/pageActions'


export const Create = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPageName('2'))
    })

    return (
        <div>
            <h1>Create</h1>
        </div>
    )
}
