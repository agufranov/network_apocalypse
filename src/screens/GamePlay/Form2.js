import React, { useEffect, useState } from "react"
import { Field, FormWrapper, IPRgx, MACRgx, createField, errorMsg } from "./Forms"
import { pipe, set, lensProp, lensPath, equals } from 'ramda'

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

const verifyChecks = checks => {
    const oi = {}
    const oj = {}
    let isValid = true;
    checks.forEach((row, i) => row.forEach((cell, j) => {
        if (cell) {
            if (oi[i] || oj[j]) isValid = false
            oi[i] = true
            oj[j] = true
        }
    }))
    if (Object.keys(oi).length < checks.length || Object.keys(oj).length < checks.length) isValid = false
    return isValid
}

const Checks = ({
    onSuccess
}) => {
    const [checks1, setChecks1] = useState([[false, false, false], [false, false, false], [false, false, false]])
    const [checks2, setChecks2] = useState([[false, false, false], [false, false, false], [false, false, false]])
    // const checks = [[false, false, false], [false, false, false], [false, false, false]]
    const [error, setError] = useState(false)

    const check1 = (e, i, j) => {
        const newChecks = [...checks1]
        newChecks[i][j] = e.target.checked
        setChecks1(newChecks)
    }

    const check2 = (e, i, j) => {
        const newChecks = [...checks2]
        newChecks[i][j] = e.target.checked
        setChecks2(newChecks)
    }

    const validate = () => {
        const isValid = verifyChecks(checks1) && verifyChecks(checks2) && equals(checks1, checks2)
        setError(!isValid)
        if (isValid) {
            onSuccess()
        }
    }

    return (<>
        {error && <div class="checks-error" onClick={() => setError(false)}><div class="checks-error-inner">Соедините входы и выходы правильно!</div></div>}
        <table className="checkbox-table">
            <tbody>
                <tr>
                    <td></td>
                    <td colspan="3" align="center">Выходы IED 2</td>
                </tr>
                <tr>
                    <td>Выходы IED 1</td>
                    {[0, 1, 2].map(i => <td>Выход {i + 1}</td>)}
                </tr>
                {[0, 1, 2].map(i => (
                    <tr>
                        <td>Выход {i + 1}</td>
                        {[0, 1, 2].map(j => (
                            <td>
                                <input type="checkbox" onChange={(e) => check1(e, i, j)} />
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
        <table className="checkbox-table">
            <tbody>
                <tr>
                    <td></td>
                    <td colspan="3" align="center">Выходы IED 1</td>
                </tr>
                <tr>
                    <td>Выходы IED 2</td>
                    {[0, 1, 2].map(i => <td>Выход {i + 1}</td>)}
                </tr>
                {[0, 1, 2].map(i => (
                    <tr>
                        <td>Выход {i + 1}</td>
                        {[0, 1, 2].map(j => (
                            <td>
                                <input type="checkbox" onChange={(e) => check2(e, i, j)} />
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
        <button class="checks-button" onClick={validate}>Сохранить</button>
    </>)
}

export const Form2 = ({
    onSuccess,
    onValid1,
    onValid2
}) => {
    const [state, setState] = useState(0)
    const [data1, setData1] = useState(createData())
    const [data2, setData2] = useState(createData())
    const [isValid1, setIsValid1] = useState(false)
    const [isValid2, setIsValid2] = useState(false)
    const [connected, setConnected] = useState(false)
    const [checked, setChecked] = useState(false)
    const onValidate = (isValid, num) => {
        if (isValid) {
            setTimeout(() => setState(0), 300)
            num === 1 ? onValid1() : onValid2()
        }
        if (num === 1) setIsValid1(isValid)
        if (num === 2) setIsValid2(isValid)
    }
    useEffect(() => {
        if (isValid1 && isValid2) {
            setConnected(true)
            // setTimeout(onSuccess, 1000)
        }
    }, [isValid1, isValid2])
    return (
        <div className="form2">
            {state === 0 && <div className="form2-device" style={{ background: isValid1 ? 'green' : 'grey' }} onClick={() => setState(1)}>Устройство 1 ({isValid1 ? 'Valid!' : 'Not Valid'})</div>}
            {state === 0 && <div className="form2-device form2-device--2" style={{ background: isValid2 ? 'green' : 'grey' }} onClick={() => setState(2)}>Устройство 2 ({isValid2 ? 'Valid!' : 'Not Valid'})</div>}
            {state === 0 && connected && <button className="form2-connect-button" onClick={() => setState(3)}>Подписки GOOSE-сообщений</button>}
            {state === 0 && checked && <button className="form2-send-button" onClick={() => setState(4)}>Отправить GOOSE</button>}
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
            {state === 3 && (
                <Checks onSuccess={() => { setChecked(true); setState(0); onSuccess() }} />
            )}
        </div >
    )
}