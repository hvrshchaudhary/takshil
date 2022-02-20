import { css } from "styled-components";

export const smallScreen = (props) => {
    return css`
        @media only screen and (max-width: 1670px) {
            ${props}
        }
    `;
}
export const smallerScreen = (props) => {
    return css`
        @media only screen and (max-width: 1500px) {
            ${props}
        }
    `;
}
export const tablets = (props) => {
    return css`
        @media only screen and (max-width: 1200px) {
            ${props}
        }
    `;
}
export const mediumLargeTablets = (props) => {
    return css`
        @media only screen and (max-width: 1100px) {
            ${props}
        }
    `;
}
export const mediumTablets = (props) => {
    return css`
        @media only screen and (max-width: 900px) {
            ${props}
        }
    `;
}
export const smallTablets = (props) => {
    return css`
        @media only screen and (max-width: 820px) {
            ${props}
        }
    `;
}
export const smallerTablets = (props) => {
    return css`
        @media only screen and (max-width: 725px) {
            ${props}
        }
    `;
}
export const massiveMobiles = (props) => {
    return css`
        @media only screen and (max-width: 650px) {
            ${props}
        }
    `;
}
export const bigMobiles = (props) => {
    return css`
        @media only screen and (max-width: 562px) {
            ${props}
        }
    `;
}
export const mobiles = (props) => {
    return css`
        @media only screen and (max-width: 470px) {
            ${props}
        }
    `;
}
export const smallMobiles = (props) => {
    return css`
        @media only screen and (max-width: 440px) {
            ${props}
        }
    `;
}
export const tinyMobiles = (props) => {
    return css`
        @media only screen and (max-width: 375px) {
            ${props}
        }
    `;
}