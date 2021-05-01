import React, { CSSProperties } from 'react';
import { companyName } from '../config';
import logo from '../sb-logo.svg';

export default function Logo({ style }: { style?: CSSProperties }): JSX.Element {
    return (
        <img
            style={style}
            src={logo}
            alt={`${companyName} Logo`}
        />
    );
}
