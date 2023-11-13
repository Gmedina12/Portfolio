import React, { useState } from 'react';
import { useQuery, useMutation, gql } from '@apollo/client';

const MESUREMENT_UNITS = gql`
  mutation MeasurementUnits($group: String!, $convertFrom: String!, $convertTo: String!, $quantity: Float!) {
    measurementUnits(group: $group, convertFrom: $convertFrom, convertTo: $convertTo, quantity: $quantity)
  }`;

const GET_ALL_UNITS_BY_GROUPS = gql`
query getUnitsByGroups($group: String!) {
    getUnitsByGroups(group: $group)
  }`;

const GET_ALL_GROUPS = gql`
query Query {
    getAllGroups
  }`;

export const MeasurementUnitsConverter = () => {
    const [convertFrom, setconvertFrom] = useState('')
    const [convertTo, setconvertTo] = useState('')
    const [quantity, setQuantity] = useState('')
    const [group, setGroup] = useState('')
    const [showResult, setShowResult] = useState(false);

    const [MeasurementUnits, { data, loading, error }] = useMutation(MESUREMENT_UNITS);
    // MeasurementUnits({variables: {group: group, convertFrom: convertFrom, convertTo: convertTo, quantity: quantity}})

    const { loading: loadingAllG, error: errorAllG, data: dataAllG } = useQuery(GET_ALL_GROUPS);
    const { loading: loadingAllU, error: errorAllU, data: dataAllU, refetch: refetchAllU } = useQuery(GET_ALL_UNITS_BY_GROUPS);

    const handlerGroup = (event) => {
        setGroup(event.target.value)
        setconvertFrom('')
        setconvertTo('')
        //Al refetch SIEMPRE se le pasa directamente la propiedad y su reasignación (valor), no olvidar
        refetchAllU({ group: event.target.value })
    }

    const handlerCalculate = () => {
        MeasurementUnits({ variables: { convertFrom: convertFrom, convertTo: convertTo, quantity: parseFloat(quantity), group: group } })
        if (!convertFrom || !convertTo) {
            alert("Select a measurement unit to convert")
        } else {
            setShowResult(true)
        }
       
    };
    const switchUnit = () => {
        const temp = convertFrom
        setconvertFrom(convertTo)
        setconvertTo(temp)
        setShowResult(false)
    };

    return (
        <div>
            <div>
                <div>
                    <h3> Mathematics and Physics Teacher 👩‍🏫</h3>
                </div>
                <div>
                    <h6>I've also worked as a mathematics and physics teacher. I love sharing knowledge, focusing on the essentials, and nurturing individuals to overcome their fears and develop a love for the exact sciences.</h6>
                </div>
                <div>
                    <h4>Unit converter 📐💾⚖️</h4>
                </div>
                <div>
                    <label htmlFor="group">Type of Measurement Unit: </label>
                    <select id='group' onChange={e => handlerGroup(e)} value={group}>
                        <option value="" selected disabled hidden>- Select unit -</option>
                        {dataAllG && dataAllG.getAllGroups ? dataAllG.getAllGroups.map((item, index) => <option key={index} value={item}>{item}</option>)
                            : ''}
                    </select>
                </div>

                <div>
                    <label htmlFor="unit">I want to convert from: </label>
                    <select id='unit' onChange={e => setconvertFrom(e.target.value)} value={convertFrom}>
                        <option value="" selected disabled hidden>- Select unit-</option>
                        {dataAllU?.getUnitsByGroups && dataAllU?.getUnitsByGroups.map((unit) => <option value={unit}>{unit}</option>)}
                    </select>
                </div>
                <div>
                    <label htmlFor="unit2">To: </label>
                    <select id='unit2' onChange={e => setconvertTo(e.target.value)} value={convertTo}>
                        <option value="" selected disabled hidden>- Select unit-</option>
                        {dataAllU?.getUnitsByGroups && dataAllU?.getUnitsByGroups.map((unit) => <option value={unit}>{unit}</option>)}
                    </select>
                </div>
                <div>
                    <label htmlFor="quantity" >Quantity: </label>
                    <input id='quantity' type='number' onChange={e => setQuantity(e.target.value)} placeholder='Enter quatity to convert' />
                </div>
                <div>
                    <div>
                        <button onClick={switchUnit}>🔄</button>
                    </div>
                    <button onClick={handlerCalculate} disabled={!group || !convertFrom || !convertTo || !quantity}>Convert 🖩</button>
                </div>
                <div>
                    {showResult &&
                        (loading ? (
                            <p>Calculating ⏳...</p>
                        ) : error ? (
                            <p>Error ❌: {error.message}</p>
                        ) : (
                            <p>
                                Result 🔣: In {quantity} {convertFrom}s there are{' '}
                                {data?.measurementUnits} {convertTo}s
                            </p>
                        ))}
                </div>
            </div>
        </div>
    );
}
