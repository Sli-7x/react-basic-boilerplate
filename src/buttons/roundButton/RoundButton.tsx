import * as React from 'react';
import { Content, Button } from './RoundButton.style';
import { Icon } from '../../index';

export interface IRoundButtonProps {
  onClick?: () => void;
  caption: string;
  iconname: string;
  selected: boolean;
}

export const RoundButton: React.StatelessComponent<IRoundButtonProps> = ({ onClick, caption, iconname, selected }) => (
  <Content>
    <Button onClick={onClick} selected={selected}>
      <Icon
        key={caption}
        title={caption}
        style={{ display: 'block', fontSize: '25px', color: selected ? '#fff' : '#327f85' }}
        name={iconname}
      />
    </Button>
  </Content>
);
