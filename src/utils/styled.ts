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

    alignItems: 'align-items',
    justifyContent: 'justify-content',

    gap: 'gap',
    columns: 'grid-template-columns',
    rows: 'grid-template-rows',
    alignContent: 'align-content',
    justifyItems: 'justify-items',

    width: 'width',
    height: 'height',
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
