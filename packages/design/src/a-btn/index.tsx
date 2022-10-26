import { Button } from 'antd';
import { changeAntdConfig } from '../antd-config/change-antd-config';

import type { ButtonProps } from 'antd/es/button';

const Btn: React.FC<ButtonProps> = () => {
  return <Button>ABtn</Button>;
};

const ABtn = changeAntdConfig(Btn);

export default ABtn;
