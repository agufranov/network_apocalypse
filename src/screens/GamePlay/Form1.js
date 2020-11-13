import React, { useState } from "react";
import styled, { css } from "styled-components";

const Field = ({ label, value, error, onChange }) => (
    <div
        style={{ display: 'flex', width: 300, marginBottom: 3 }}
    >
        <label style={{ flex: '1 1 50%' }}>{label}</label>
        <input
            style={{
                flex: '1 1 50%',
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: error ? 'red' : 'grey',
                borderRadius: 3
            }}
            value={value}
            onChange={onChange}
        />
        {error}
    </div>
)

const ipRgx = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/

export const Form1 = ({
    onSuccess
}) => {
    const [ip1, setIp1] = useState({ value: '', error: null })
    const [mask1, setMask1] = useState({ value: '', error: null })
    const [ip2, setIp2] = useState({ value: '', error: null })
    const [mask2, setMask2] = useState({ value: '', error: null })

    const onSubmit = (e) => {
        e.preventDefault()
        let errIp1 = null, errIp2 = null, errMask1 = null, errMask2 = null
        if (!ipRgx.test(ip1.value)) {
            errIp1 = 'Format'
        }
        if (!ipRgx.test(ip2.value)) {
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

        if (!ipRgx.test(mask1.value)) {
            errMask1 = 'Format'
        }
        if (!ipRgx.test(mask2.value)) {
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
                <Field label="IP адрес" value={ip1.value} error={ip1.error} onChange={e => setIp1({ value: e.target.value, error: null })} />
                <Field label="Маска подсети" value={mask1.value} error={mask1.error} onChange={e => setMask1({ value: e.target.value, error: null })} />
            </FormWrapper>
            <FormWrapper>
                <Field label="IP адрес" value={ip2.value} error={ip2.error} onChange={e => setIp2({ value: e.target.value, error: null })} />
                <Field label="Маска подсети" value={mask2.value} error={mask2.error} onChange={e => setMask2({ value: e.target.value, error: null })} />
            </FormWrapper>
            <button>Сохранить</button>
        </form>
    )
}

const FormWrapper = styled.div`
    padding: 20px;
    border: 1px solid grey;
    margin-bottom: 10px;
`