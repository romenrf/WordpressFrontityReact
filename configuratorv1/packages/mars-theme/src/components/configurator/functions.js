import { memo, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

const contentContainer = document.querySelector("#containerGeneral");

export default ({ divtitle, children }) =>
    ReactDOM.createPortal(
        <div id={divtitle}tabIndex="-1">
            {children}
        </div>,
        contentContainer)
    