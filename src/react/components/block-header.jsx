import React, { forwardRef, useRef, useImperativeHandle } from 'react';
import { classNames, getDataAttrs } from '../shared/utils';
import { colorClasses } from '../shared/mixins';

/* dts-props
  id: string | number;
  className: string;
  style: React.CSSProperties;
  COLOR_PROPS
*/

const BlockHeader = forwardRef((props, ref) => {
  const { className, id, style, children } = props;
  const dataAttrs = getDataAttrs(props);

  const elRef = useRef(null);
  useImperativeHandle(ref, () => ({
    el: elRef.current,
  }));

  const classes = classNames(className, 'block-header', colorClasses(props));

  return (
    <div id={id} style={style} className={classes} ref={elRef} {...dataAttrs}>
      {children}
    </div>
  );
});

BlockHeader.displayName = 'f7-block-header';

export default BlockHeader;