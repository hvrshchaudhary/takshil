import { css } from "styled-components";

export const lapTopL = (props) => {
    return css`
        @media only screen and (max-width: 1441px) {
            ${props}
        }
    `;
}
export const laptop = (props) => {
    return css`
        @media only screen and (max-width: 1025px) {
            ${props}
        }
    `;
}
export const tablet = (props) => {
    return css`
        @media only screen and (max-width: 769px) {
            ${props}
        }
    `;
}
export const mobileL = (props) => {
    return css`
        @media only screen and (max-width: 425px) {
            ${props}
        }
    `;
}
export const mobileM = (props) => {
    return css`
        @media only screen and (max-width: 390px) {
            ${props}
        }
    `;
}
export const mobileS = (props) => {
    return css`
        @media only screen and (max-width: 360px) {
            ${props}
        }
    `;
}