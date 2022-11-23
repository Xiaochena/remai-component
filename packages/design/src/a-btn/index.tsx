import { Button } from 'antd';
import { changeAntdConfig } from '@remai/config';

import type { ButtonProps } from 'antd/es/button';

const Btn: React.FC<ButtonProps> = (props) => {
  return <Button {...props} />;
};

const ABtn = changeAntdConfig(Btn);

export default ABtn;
