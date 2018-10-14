import React from 'react';

export function SectionTwoColumn(props) {
    return (<div style={{ margin: "12% 0" }}>
        <div style={{ width: "50%", display: 'inline-block' }}>
            <div style={{ margin: "0 20%" }}>
                {props.left}
            </div>
        </div>
        <div style={{ width: "50%", display: 'inline-block', verticalAlign: 'top' }}>
            <div style={{ margin: "0 20%" }}>
                {props.right}
            </div>
        </div>
    </div>);
}

export function SectionOneColumn(props) {
    return (<div style={{ margin: "12% 0" }}>
        <div style={{ width: "100%" }}>
            <div style={{ margin: "0 10%" }}>
                {props.children || props.left}
            </div>
        </div>
    </div>);
}

export function Section(props) {
    return SectionTwoColumn(props);
}

export default Section;
