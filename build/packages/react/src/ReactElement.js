import { REACT_ELEMENT_TYPE } from '../../shared/ReactSymbols';
export const createElement = (type, config, ...children) => {
    let element = {
        $$typeof: REACT_ELEMENT_TYPE,
        type,
        key: null,
        ref: null,
        props: {},
    };
    if (config != null) {
        const { key, ref, ...props } = config;
        if (key != undefined) {
            element.key = key;
        }
        if (ref != undefined) {
            element.ref = ref;
        }
        element.props = { ...element.props, ...props };
        if (children.length === 1) {
            element.props.children = children[0];
        }
        else if (children.length > 1) {
            element.props.children = children;
        }
    }
    if (type.defaultProps) {
        const defaultProps = type.defaultProps;
        for (const propName in defaultProps) {
            if (element.props[propName] === undefined) {
                element.props[propName] = defaultProps[propName];
            }
        }
    }
    return element;
};
