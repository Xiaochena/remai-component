import React from 'react';

interface DefaultContext {
  prefixCls?: string;
  mainHeight?: string | number;
}

const defaultContext: DefaultContext = { prefixCls: 'remai', mainHeight: '100px' };

const ConfigContext = React.createContext(defaultContext);

export default ConfigContext;
