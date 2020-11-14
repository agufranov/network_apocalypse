import React, { useEffect, useState } from "react";
import styled from "styled-components";
import cn from "classnames"

export const IPRgx = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
export const MACRgx = /^01:0[Dd]:00:00(:[0-9A-Fa-f]{2})/

export const Field = ({ label, field, setField }) => {
    const [lastError, setLastError] = useState()
    useEffect(() => {
        if (field.error) {
            setLastError(field.error)
        }
    }, [field])
    return (
        <div
            className={cn('field-wrapper', {
                'field-wrapper--valid': field.error === false,
                'field-wrapper--invalid': field.error
            })}
        >
            <label style={{ flex: '1 1 50%' }}>{label}</label>
            <input
                value={field.value}
                onChange={e => setField({ ...field, value: e.target.value.toLowerCase() })}
            />
            <div className={cn('field-error', { 'field-error--shown': field.error })}>
                {field.error || lastError}
            </div>
        </div>
    )
}

export const FormWrapper = styled.div`
    padding: 20px;
    border: 1px solid grey;
`

export const createField = () => ({ value: '', error: null })

export const errorMsg = {
    cantBeEmpty: field => `${field} не может быть пустым!`,
    shouldHaveFormat: field => `${field} должен иметь верный формат!`,
    shouldDiffer: field => `${field} устройств должны различаться!`,
    shouldBeEqual: field => `${field} устройств должны совпадать!`,
    shouldBeInOneNetwork: field => `${field} устройств должны быть в одной сети!`,
    cantStartWithDigit: field => `${field} не может начинаться с цифры!`,
}