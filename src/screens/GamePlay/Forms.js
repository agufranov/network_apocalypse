import React from "react";
import styled from "styled-components";

export const IPRgx = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/

export const Field = ({ label, field, setField }) => (
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
        { field.error &&
            <div className="field-error">
                {field.error}
            </div>
        }
    </div>
)

export const FormWrapper = styled.div`
    padding: 20px;
    border: 1px solid grey;
    margin-bottom: 10px;
`

export const createField = () => ({ value: '', error: null })