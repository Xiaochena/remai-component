import { Button } from 'antd';
import { changeAntdConfig } from '@remai/config';

import type { ButtonProps } from 'antd/es/button';

const Btn: React.FC<ButtonProps> = () => {
  return <Button>ABtn</Button>;
};

const ABtn = changeAntdConfig(Btn);

export default ABtn;
