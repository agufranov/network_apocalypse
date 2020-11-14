import React, { useState } from "react";
import { Field, FormWrapper, IPRgx, createField } from "./Forms";

export const Form1 = ({
    onSuccess
}) => {
    const [ip1, setIp1] = useState(createField())
    const [mask1, setMask1] = useState(createField())
    const [ip2, setIp2] = useState(createField())
    const [mask2, setMask2] = useState(createField())

    const onSubmit = (e) => {
        e.preventDefault()
        let errIp1 = null, errIp2 = null, errMask1 = null, errMask2 = null
        if (!IPRgx.test(ip1.value)) {
            errIp1 = 'Format'
        }
        if (!IPRgx.test(ip2.value)) {
            errIp2 = 'Format'
        }
        if (!errIp1 && !errIp2) {
            if (ip1.value === ip2.value) {
                errIp1 = errIp2 = 'Duplicate'
            } else {
                const [a1, b1, c1] = ip1.value.split('.')
                const [a2, b2, c2] = ip2.value.split('.')
                if (a1 !== a1 || b1 !== b2 || c1 !== c2) {
                    errIp1 = errIp2 = 'Not in one network'
                }
            }
        }

        if (!IPRgx.test(mask1.value)) {
            errMask1 = 'Format'
        }
        if (!IPRgx.test(mask2.value)) {
            errMask2 = 'Format'
        }
        if (!errMask1 && !errMask2) {
            if (mask1.value !== mask2.value) {
                errMask1 = errMask2 = 'Not equal'
            }
        }

        setIp1({ ...ip1, error: errIp1 })
        setIp2({ ...ip2, error: errIp2 })
        setMask1({ ...mask1, error: errMask1 })
        setMask2({ ...mask2, error: errMask2 })

        if (!errIp1 && !errIp2 && !errMask1 && !errMask2) {
            alert('Success')
            onSuccess()
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <FormWrapper>
                <Field label="IP адрес" field={ip1} setField={setIp1} />
                <Field label="Маска подсети" field={mask1} setField={setMask1} />
            </FormWrapper>
            <FormWrapper>
                <Field label="IP адрес" field={ip2} setField={setIp2} />
                <Field label="Маска подсети" field={mask2} setField={setMask2} />
            </FormWrapper>
            <button>Сохранить</button>
        </form>
    )
}