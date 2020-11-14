import React, { useEffect, useState } from "react";
import { Field, FormWrapper, IPRgx, MACRgx, createField, errorMsg } from "./Forms"
import { pipe, set, lensProp, lensPath } from 'ramda'

const fields = [
    { label: 'Имя GCB', key: 'gcb' },
    { label: 'GOOSE ID', key: 'gooseId' },
    { label: 'MAC адрес', key: 'mac' },
    { label: 'APP ID', key: 'appId' },
    { label: 'VLAN ID', key: 'vlanId' },
    { label: 'Min Time', key: 'minTime' },
    { label: 'Max Time', key: 'maxTime' },
]

export const ComplexForm = ({
    data,
    setData,
    otherData,
    onClose,
    onValidate
}) => {
    const onSubmit = (e) => {
        e.preventDefault()
        validate()
    }

    const validate = () => {
        const errors = fields.reduce((errors, { key }) => ({
            ...errors,
            [key]: {
                value: false,
                lens: lensPath([key, 'error'])
            }
        }), {})

        if (!data.gcb.value.trim()) {
            errors.gcb.value = errorMsg.cantBeEmpty('Имя GCB')
        } else if (/^\d/.test(data.gcb.value.trim())) {
            errors.gcb.value = errorMsg.cantStartWithDigit('Имя GCB')
        }

        // if (!data.gooseId.value) {
        //     errors.gooseId.value = errorMsg.cantBeEmpty('GOOSE ID')
        // } else if (otherData.gooseId.value && otherData.gooseId.value !== data.gooseId.value) {
        //     errors.gooseId.value = errorMsg.shouldBeEqual('GOOSE ID')
        // }

        // if (!MACRgx.test(data.mac.value)) {
        //     errors.mac.value = errorMsg.shouldHaveFormat('MAC-адрес')
        // } else if (otherData.mac.value && otherData.mac.value === data.mac.value) {
        //     errors.mac.value = errorMsg.shouldDiffer('MAC-адрес')
        // }

        // if (!/[0-9A-Fa-f]{4}/.test(data.appId.value)) {
        //     errors.appId.value = 'AppID должен иметь шестнадцатеричный формат!'
        // } else {
        //     const appIdValue = parseInt(data.appId.value, 16)
        //     if (parseInt('8000', 16) > appIdValue || appIdValue > parseInt('BFFF', 16)) {
        //         errors.appId.value = 'AppID должен лежать в диапазоне 8000-BFFF!'
        //     }
        // }

        // if (!data.vlanId.value) {
        //     errors.vlanId.value = errorMsg.cantBeEmpty('VLAN ID')
        // } else if (otherData.vlanId.value && otherData.vlanId.value !== data.vlanId.value) {
        //     errors.vlanId.value = errorMsg.shouldBeEqual('VLAN ID')
        // }

        // if (data.minTime.value !== '4') {
        //     errors.minTime.value = 'Min Time должно иметь значение 4 мс!'
        // }

        // if (data.maxTime.value !== '1000') {
        //     errors.maxTime.value = 'Max Time должно иметь значение 1000 мс!'
        // }

        setData(
            pipe(
                ...fields.map(({ key }) => set(errors[key].lens, errors[key].value))
            )(data)
        )

        onValidate(fields.every(({ key }) => !errors[key].value))
    }

    return (
        <FormWrapper className="form2-form">
            <form onSubmit={onSubmit}>
                {
                    fields.map(({ label, key }) =>
                        <Field
                            key={key}
                            label={label}
                            field={data[key]}
                            setField={value => setData(set(lensProp(key), value, data))}
                        />
                    )
                }
                <button>Сохранить</button>
            </form>
        </FormWrapper >
    )
}

const createData = () => fields.reduce((o, { key }) => ({ ...o, [key]: createField() }), {})

export const Form2 = ({
    onSuccess
}) => {
    const [state, setState] = useState(1)
    const [data1, setData1] = useState(createData())
    const [data2, setData2] = useState(createData())
    const [isValid1, setIsValid1] = useState(false)
    const [isValid2, setIsValid2] = useState(false)
    const onValidate = (isValid, num) => {
        if (isValid) setTimeout(() => setState(0), 300)
        if (num === 1) setIsValid1(isValid)
        if (num === 2) setIsValid2(isValid)
    }
    useEffect(() => {
        if (isValid1 && isValid2) onSuccess()
    }, [isValid1, isValid2])
    return (
        <div className="form2">
            <button style={{ background: isValid1 ? 'green' : 'grey' }} onClick={() => setState(1)}>Устройство 1 ({isValid1 ? 'Valid!' : 'Not Valid'})</button>
            <button style={{ background: isValid2 ? 'green' : 'grey' }} onClick={() => setState(2)}>Устройство 2 ({isValid2 ? 'Valid!' : 'Not Valid'})</button>
            {state === 1 && (
                <ComplexForm
                    data={data1}
                    setData={setData1}
                    otherData={data2}
                    onClose={() => setState(0)}
                    onValidate={isValid => onValidate(isValid, 1)}
                />
            )}
            {state === 2 && (
                <ComplexForm
                    data={data2}
                    setData={setData2}
                    otherData={data1}
                    onClose={() => setState(0)}
                    onValidate={isValid => onValidate(isValid, 2)}
                />
            )}
        </div >
    )
}