import React, { useEffect, useState } from "react";
import { Field, FormWrapper, IPRgx, createField } from "./Forms"
import { pipe, set, lensProp, lensPath } from 'ramda'

const fields = [
    { label: 'MAC', key: 'mac' },
    // { label: 'Goose ID', key: 'gooseId' },
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

        if (!IPRgx.test(data.mac.value)) {
            errors.mac.value = 'MAC-адрес должен иметь верный формат!'
        } else if (otherData.mac.value && otherData.mac.value === data.mac.value) {
            errors.mac.value = 'MAC-адреса двух устройств должны различаться!'
        }

        // if (!IPRgx.test(data.gooseId.value)) {
        //     errors.gooseId.value = 'Format'
        // } else if (otherData.gooseId.value && otherData.gooseId.value !== data.gooseId.value) {
        //     errors.gooseId.value = 'Not equal'
        // }

        setData(
            pipe(
                ...fields.map(({ key }) => set(errors[key].lens, errors[key].value))
            )(data)
        )

        onValidate(fields.every(({ key }) => !errors[key].value))
    }

    return (
        <FormWrapper>
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
                <button>Submit</button>
                <button type="button" onClick={onClose}>Close</button>
            </form>
        </FormWrapper >
    )
}

const createData = () => ({
    mac: createField(),
    gooseId: createField()
})

export const Form2 = ({
    onSuccess
}) => {
    const [state, setState] = useState(1)
    const [data1, setData1] = useState(createData())
    const [data2, setData2] = useState(createData())
    const [isValid1, setIsValid1] = useState(false)
    const [isValid2, setIsValid2] = useState(false)
    const onValidate = (isValid, num) => {
        if (num === 1) setIsValid1(isValid)
        if (num === 2) setIsValid2(isValid)
    }
    useEffect(() => {
        if (isValid1 && isValid2) onSuccess()
    }, [isValid1, isValid2])
    return (
        <div>
            <button onClick={() => setState(1)}>Устройство 1 ({isValid1 ? 'Valid!' : 'Not Valid'})</button>
            <button onClick={() => setState(2)}>Устройство 2 ({isValid2 ? 'Valid!' : 'Not Valid'})</button>
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