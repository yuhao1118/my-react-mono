import { REACT_ELEMENT_TYPE } from '../shared/ReactSymbols';
type Key = string;

interface ReactElement {
  $$typeof: symbol;
  type: any;
  key: Key | null;
  ref: any;
  props: any;
}

export const createElement = (
  type: any,
  config?: Record<string, any>,
  ...children: any[]
): ReactElement => {
  let element: ReactElement = {
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
    } else if (children.length > 1) {
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
