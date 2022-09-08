import React from 'react';
import { Btn } from '@remai/design';

type DivProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
const PageCom: React.FC<React.PropsWithChildren<DivProps>> = ({ children, ...divProps }) => {
  return (
    <div {...divProps}>
      <Btn>按钮</Btn>
      <div>PageCom：{children} </div>
    </div>
  );
};

export default PageCom;
