import { ConfigProvider } from 'antd';

/** 高阶函数、用于链接 ConfigProvider */
export default function changeAntdConfig<P extends object>(Node: React.FC<P>): React.FC<P> {
  ConfigProvider.config({ prefixCls: 'remai' });
  return (props) => {
    return (
      <ConfigProvider
        prefixCls="remai"
        theme={{
          token: {
            colorPrimary: '#817AF2',
            borderRadius: 4,
          },
        }}
      >
        <Node {...props} />
      </ConfigProvider>
    );
  };
}
