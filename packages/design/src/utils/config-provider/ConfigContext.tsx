import React from 'react';

interface DefaultContext {
  prefixCls: string;
}

const defaultContext: DefaultContext = { prefixCls: 'remai' };

const ConfigContext = React.createContext(defaultContext);

export default ConfigContext;
