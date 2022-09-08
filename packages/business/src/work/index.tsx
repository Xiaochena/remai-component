import React from 'react';
import { Btn } from '@remai/design';

type DivProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
const work: React.FC<React.PropsWithChildren<DivProps>> = ({ children, ...divProps }) => {
  return (
    <div {...divProps}>
      <Btn>按钮</Btn>
      <div>work：{children} </div>
    </div>
  );
};

export default work;
