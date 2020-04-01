import React from 'react';
import * as RouterContext from './RouterContext';
import { AnyObject } from 'src/index.d';

interface IPrompt {
    when?: boolean;
    message?: any;
}

const Prompt:React.FC<IPrompt> = ({ when = true, message }) => {
  
  return (
    <RouterContext.Consumer>
      {(context: AnyObject) => {
          const { history } = context;
          history.block(when ? message : null);
          return null;
        }}
    </RouterContext.Consumer>
  );
}

export default Prompt;