import * as React from 'react';

import "./index.scss"

export type ButtonColor =
  | 'yellow'
  | 'black'
  | 'white'
  | 'transparent'
  | 'yellow-transparent';
export type ButtonState = 'normal' | 'disabled';

interface Props {
  id?: string;
  onClick?: (e: any) => void;
  children: any;
  color?: ButtonColor;
  state?: ButtonState;
  customAttribute?: string;
  passClicks?: boolean;
  loading?: boolean;
  style?: object;
  className?: string;
}

const ButtonComponent = (props: Props) => {
  const {
    onClick,
    children,
    state = 'normal',
    color = 'yellow',
    passClicks,
    customAttribute,
    loading,
    style,
    className,
  } = props;

  return (
    <span
      id={customAttribute ? customAttribute : 'button'}
      style={style ? style : {}}
      className={[
        'button',
        [state],
        [color],
        className,
      ].join(' ')}
      data-attr={customAttribute}
      onClick={state !== 'disabled' || passClicks ? onClick : () => null}
    >
      {children}
      {loading && <div className={'loading'} />}
    </span>
  );
};

export default ButtonComponent;
