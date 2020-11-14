import React from "react";
import styled, { css } from "styled-components";

const Overlay = ({
    isOpen,
    onClose,
    isLoading
}) => {
    return <Main isOpen={isOpen} onClick={() => !isLoading && onClose()} />
}

const Main = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.6);
    opacity: ${props => props.isOpen ? 1 : 0};
    transition: all ease 0.3s;
    pointer-events: ${props => props.isOpen ? 'all' : 'none'}
`

export default Overlay;