import * as React from 'react';
import { StyledInput, ErrorText } from './Input.style';

export interface IInputProps {
  onChange: (evenr: Event) => void;
  value: string | number;
  label?: string;
  placeholder?: string;
  inputStyle?: { [key: string]: any };
  maxLength?: number;
  minLength?: number;
  errorText?: any;
  type?: string;
}

export class Input extends React.Component<IInputProps, {}> {
  public static defaultProps = {
    type: 'text',
  };

  constructor(props: IInputProps) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  // React.ChangeEvent<Event>
  handleChange(event: any) {
    this.props.onChange(event);
  }

  getErrors(errors: string | string[]) {
    if (errors) {
      if (Array.isArray(errors) && errors.length > 0) {
        return errors.map((val: string, i: number) => <ErrorText key={i}>{val}</ErrorText>);
      }
      if (typeof errors === 'string') {
        return <ErrorText>{errors}</ErrorText>;
      }
    }
  }

  render() {
    const { value, label, placeholder, inputStyle, maxLength, minLength, type, errorText } = this.props;

    const labelComp = label ? <label>{label}</label> : '';

    return (
      <div>
        {labelComp}
        <StyledInput
          style={inputStyle ? { ...inputStyle } : {}}
          type={type}
          value={value}
          onChange={this.handleChange}
          placeholder={placeholder}
          maxLength={maxLength ? maxLength : 255}
          minLength={minLength ? minLength : 0}
          isInvalid={errorText && errorText.length}
        />
        {this.getErrors(errorText)}
      </div>
    );
  }
}
