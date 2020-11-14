import React, { useEffect, useState } from "react";
import styled from "styled-components";
import cn from "classnames"

export const IPRgx = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/

export const Field = ({ label, field, setField }) => {
    const [lastError, setLastError] = useState()
    useEffect(() => {
        if (field.error) {
            setLastError(field.error)
        }
    }, [field])
    return (
        <div
            className="field-wrapper"
        >
            <label style={{ flex: '1 1 50%' }}>{label}</label>
            <input
                style={{
                    flex: '1 1 50%',
                    borderWidth: 1,
                    borderStyle: 'solid',
                    borderColor: field.error ? 'red' : 'grey',
                    borderRadius: 3,
                    height: '100%'
                }}
                value={field.value}
                onChange={e => setField({ ...field, value: e.target.value })}
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
    margin-bottom: 10px;
`

export const createField = () => ({ value: '', error: null })