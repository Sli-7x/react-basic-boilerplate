import * as React from 'react';
import { Content, Button } from './Round-Button.style';
import { Icon } from '../index';

export interface IButtonProps {
  onClick?: () => void;
  caption: string;
  iconname: string;
  selected: boolean;
}

export const RoundButton: React.StatelessComponent<IButtonProps> = ({ onClick, caption, iconname, selected }) => (
  <Content>
    <Button onClick={onClick} selected={selected}>
      <Icon
        key={caption}
        title={caption}
        style={{ display: 'block', fontSize: '25px', color: selected ? 'white' : '#327f85' }}
        name={iconname}
      />
    </Button>
  </Content>
);
