import React, { useState } from "react";
import { Field, FormWrapper, IPRgx, createField } from "./Forms"
import { pipe, set, lensProp, lensPath } from 'ramda'

const fields = [
    { label: 'MAC', key: 'mac' },
    { label: 'Goose ID', key: 'gooseId' }
]

export const ComplexForm = ({
    data,
    setData,
    otherData
}) => {
    const onSubmit = (e) => {
        e.preventDefault()
        validate()
    }

    const validate = () => {
        const errors = fields.reduce((errors, { key }) => ({
            ...errors,
            [key]: {
                value: null,
                lens: lensPath([key, 'error'])
            }
        }), {})

        if (!IPRgx.test(data.mac.value)) {
            errors.mac.value = 'Format'
        } else if (otherData.mac.value && otherData.mac.value === data.mac.value){
            errors.mac.value = 'Duplicate'
        }

        if (!IPRgx.test(data.gooseId.value)) {
            errors.gooseId.value = 'Format'
        } else if (otherData.gooseId.value && otherData.gooseId.value !== data.gooseId.value){
            errors.gooseId.value = 'Not equal'
        }

        console.log(errors)

        setData(
            pipe(
                ...fields.map(({ key }) => set(errors[key].lens, errors[key].value))
            )(data)
        )
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
            </form>
        </FormWrapper >
    )
}

const createData = () => ({
    mac: createField(),
    gooseId: createField()
})

export const Form2 = ({
}) => {
    const [state, setState] = useState(1)
    const [data1, setData1] = useState(createData())
    const [data2, setData2] = useState(createData())
    return (
        <div>
            <button onClick={() => setState(1)}>Edit 1</button>
            <button onClick={() => setState(2)}>Edit 2</button>
            {state === 1 && (
                <>
                    <ComplexForm
                        data={data1}
                        setData={setData1}
                        otherData={data2}
                    />
                    <ComplexForm
                        data={data2}
                        setData={setData2}
                        otherData={data1}
                    />
                </>
            )}
        </div >
    )
}