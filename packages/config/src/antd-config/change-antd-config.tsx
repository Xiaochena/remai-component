import { ConfigProvider } from 'antd';
import './remai.css';

/** 高阶函数、用于链接 ConfigProvider */
export default function changeAntdConfig<P extends object>(Node: React.FC<P>): React.FC<P> {
  ConfigProvider.config({ prefixCls: 'remai' });
  return (props) => {
    return (
      <ConfigProvider prefixCls="remai">
        <Node {...props} />
      </ConfigProvider>
    );
  };
}
