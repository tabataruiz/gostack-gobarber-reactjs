import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #232129;
  border-radius: 10px;
  border: 2px solid #232129;
  padding: 16px;
  width: 100%;
  color: #666360;
  display: flex;
  align-items: center;

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
      box-shadow: 0 0 7px rgba(197, 48, 48, 0.5);
    `}

  ${props =>
    props.isFocused &&
    css`
      color: #ff9000;
      border-color: #ff9000;
      box-shadow: 0 0 7px rgba(255, 144, 0, 0.5);
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #ff9000;
    `}


  input {
    color: #f4ede8;
    flex: 1;
    background: transparent;
    border: 0;
    transition: all 0.2s;

    &::placeholder {
      color: #666360;
    }
  }

  & + div {
    margin-top: 8px;
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &:before {
      border-color: #c53030 transparent;
    }
  }
`;
