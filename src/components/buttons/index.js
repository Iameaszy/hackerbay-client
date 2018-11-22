import React from 'react';
import { Button as ButtonStyle } from './button.style';

export default class Button extends React.PureComponent {
  render() {
    return <ButtonStyle {...this.props}>{this.props.children}</ButtonStyle>;
  }
}
