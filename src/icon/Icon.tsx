import * as React from 'react';

export interface IIconProps {
  name: string;
  size?: number;
  style?: { [key: string]: string };
  onClick?: () => any;
  title?: string;
}

export const Icon: React.StatelessComponent<IIconProps> = (props) => {
  return (
    <i
      title={props.title}
      className="material-icons"
      style={{ fontSize: `${props.size}px`, ...props.style }}
      onClick={props.onClick}
    >
      {props.name}
    </i>
  );
};

Icon.defaultProps = {
  size: 25,
  style: {},
  title: '',
  name: '',
};
