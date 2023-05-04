export const properties: any = {
    padding: 'padding',
    margin: 'margin',
    background: 'background-color',
    position: 'position',
    display: 'display',

    color: 'color',
    fontSize: 'font-size',
    lineHeight: 'line-height',
    fontFamily: 'font-family',
    textDecoration: 'textDecoration',
    weight: 'font-weight',
    textAlign: 'text-align',

    alignItems: 'align-items',
    justifyContent: 'justify-content',
    direction: 'flex-direction',

    gap: 'gap',
    columns: 'grid-template-columns',
    rows: 'grid-template-rows',
    alignContent: 'align-content',
    justifyItems: 'justify-items',

    width: 'width',
    height: 'height',
    minWidth: 'min-width',
    minHeight: 'min-height',
    overflow: 'overflow',
    overflowX: 'overflow-x',
    overflowY: 'overflow-y',
};

export const addStyles = (props: any) => {
    return Object.keys(props)
        .map((key) => {
            const keys = { prop: properties[key], value: props[key] };
            if (keys.prop) {
                return `${keys.prop}: ${
                    props.theme[keys.value] || keys.value
                };`;
            } else {
                return '';
            }
        })
        .join('\n');
};
