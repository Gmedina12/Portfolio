import React, { useState } from 'react';
import { useQuery, useMutation, gql } from '@apollo/client';
import style from './Teacher.module.css'

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
            <div className={style.containertitlesTech}>
                <h2 className={style.gradientTextBBASubTeach}>Mathematics and Physics Teacher</h2>
            </div>

            <div className={style.containertitlesTech}>
                <h3 className={style.gradientTextSubTeach2}>Unit converter&nbsp;</h3>📐💾⚖️
            </div>

            <div className={style.parentTeach}>
                <div className={style.div1Teach}>
                    <div className={style.measurementResponsive}>
                        <label className={style.labelTeach} htmlFor="group">Type of Measurement Unit:&nbsp;</label>
                        <select className={style.typeMesurement} id='group' onChange={e => handlerGroup(e)} value={group}>
                            <option className={style.typeMesurement} value="" selected disabled hidden>- Select unit -</option>
                            {dataAllG && dataAllG.getAllGroups ? dataAllG.getAllGroups.map((item, index) => <option className={style.typeMesurement} key={index} value={item}>{item}</option>)
                                : ''}
                        </select>
                    </div><br />
                    <label className={style.labelTeach} htmlFor="unit">I want to convert from: </label>
                    <select className={style.selectTextTeach} id='unit' onChange={e => setconvertFrom(e.target.value)} value={convertFrom}>
                        <option className={style.selectTextTeach} value="" selected disabled hidden>- Select unit-</option>
                        {dataAllU?.getUnitsByGroups && dataAllU?.getUnitsByGroups.map((unit) => <option className={style.selectTextTeach} value={unit}>{unit}</option>)}
                    </select>
                </div>

                <div className={style.div4Teach}>
                    <br /><label className={style.labelTeach} htmlFor="unit2">To: </label>
                    <select className={style.selectTextTeach} id='unit2' onChange={e => setconvertTo(e.target.value)} value={convertTo}>
                        <option className={style.selectTextTeach} value="" selected disabled hidden>- Select unit-</option>
                        {dataAllU?.getUnitsByGroups && dataAllU?.getUnitsByGroups.map((unit) => <option className={style.selectTextTeach} value={unit}>{unit}</option>)}
                    </select>
                </div>
                <div className={style.div2Teach}>
                    <label className={style.labelTeach} htmlFor="quantity" >Quantity: </label>
                    <input id='quantity' type='number' onChange={e => setQuantity(e.target.value)} placeholder='Enter quatity to convert' />
                </div>

                <div className={style.div3Teach}>
                    <button className={style.BtnTeach} onClick={switchUnit}>&nbsp;&nbsp;<img width="18" height="18" src="https://img.icons8.com/pastel-glyph/64/ffffff/sorting-arrows-horizontal--v2.png" alt="sorting-arrows--v1" /><p className={style.text}>Switch</p></button>
                </div>
                <div className={style.div5Teach}>
                    <br /><br /><button className={style.buttonCalculate} onClick={handlerCalculate} disabled={!group || !convertFrom || !convertTo || !quantity}>Convert <img width="16" height="16" src="https://img.icons8.com/metro/26/ffffff/calculator.png" alt="calculator" /></button> <br /><br />

                    {showResult &&
                        (loading ? (
                            <p className={style.loaderTeach}></p>
                        ) : error ? (
                            <p>Error ❌: {error.message}</p>
                        ) : (
                            <h5 className={style.result}>
                                <p className={style.resultText}>Result: </p> In {quantity} {convertFrom}s there are{' '}
                                {data?.measurementUnits} {convertTo}s
                            </h5>
                        ))}
                </div><br /><br />
            </div>
        </div>
    );
}
