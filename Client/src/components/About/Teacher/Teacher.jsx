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
    const [convertFrom, setconvertFrom] = useState('');
    const [convertTo, setconvertTo] = useState('');
    const [quantity, setQuantity] = useState('');
    const [group, setGroup] = useState('');

    const [MeasurementUnits, { data, loading, error }] = useMutation(MESUREMENT_UNITS);
    // MeasurementUnits({variables: {group: group, convertFrom: convertFrom, convertTo: convertTo, quantity: quantity}})

    const { loading: loadingAllG, error: errorAllG, data: dataAllG } = useQuery(GET_ALL_GROUPS);
    const { loading: loadingAllU, error: errorAllU, data: dataAllU, refetch: refetchAllU} = useQuery(GET_ALL_UNITS_BY_GROUPS);
    
    const handlerGroup = (event) =>{
        setGroup(event.target.value)
        //se le pasa la propiedad y su reasignación
        refetchAllU({group: event.target.value})
    }

    const switchUnit = () => {
        const temp = convertFrom;
        setconvertFrom(convertTo);
        setconvertTo(temp);
    };

    const handlerCalculate = () =>{
        MeasurementUnits({variables:{convertFrom: convertFrom, convertTo: convertTo, quantity: parseFloat(quantity), group: group}})
    }

    return (
        <div>
            <div>
                <div>
                    <h3>Docente de Matemáticas y física 👩‍🏫</h3>
                </div>
                <div>
                    <h4>Conversor de unidades de medida 📐💾⚖️</h4>
                </div>
                <div>
                    <label htmlFor="group">Tipo de unidad:</label>
                    <select id='group' onChange={e => handlerGroup(e)} value={group}>
                        <option value="" selected disabled hidden>- Selecciona el tipo de unidad -</option>
                        {dataAllG && dataAllG.getAllGroups? dataAllG.getAllGroups.map((item, index) => <option key={index} value={item}>{item}</option>)
                        :''}
                    </select>
                </div>

                <div>
                    <label htmlFor="unit">Quiero convertir:</label>
                    <select id='unit' onChange={e => setconvertFrom(e.target.value)} value={convertFrom}>
                        <option value="" selected disabled hidden>- Selecciona la unidad-</option>
                        {dataAllU?.getUnitsByGroups && dataAllU?.getUnitsByGroups.map((unit) => <option value={unit}>{unit}</option>)}
                    </select>
                </div>
                <div>
                    <label htmlFor="unit2">A: </label>
                    <select id='unit2' onChange={e => setconvertTo(e.target.value)} value={convertTo}>
                        <option value="" selected disabled hidden>- Selecciona la unidad -</option>
                        {dataAllU?.getUnitsByGroups && dataAllU?.getUnitsByGroups.map((unit) => <option value={unit}>{unit}</option>)}
                    </select>
                </div>
                <div>
                    <label htmlFor="quantity" >Cantidad: </label>
                    <input id='quantity' type='number' onChange={e => setQuantity(e.target.value)} />
                </div>
                <div>
                    <button onClick={switchUnit}>🔄</button>
                    <button onClick={handlerCalculate}>Calcular</button>
                </div>
                <div>
                    {loading ? <p> Loading...</p>
                        : error ? <p>Error: {error.message }</p>
                            : <p>Resultado 🔣: {data?.measurementUnits}</p>}
                </div>
            </div>
        </div>
    );
}
