import React, { ReactNode, useState } from 'react';
import Tooltipstyle from '../styles/Tooltip.module.scss';

interface Props {
  delay?: number;
  children: ReactNode;
  direction: 'top' | 'bottom' | 'left' | 'right';
  content: ReactNode;
}

const Tooltip = (props: Props) => {
  let timeout: string | number | NodeJS.Timeout;
  const [active, setActive] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, props.delay || 400);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  return (
    <div
      className={`${Tooltipstyle.Wrapper} w-full`}
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {props.children}
      {active && (
        <div
          className={`${Tooltipstyle.TooltipMain} ${props.direction || 'top'}`}
        >
          {/* Content */}
          {props.content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
