import React from 'react';
import { ABtn } from '@remai/design';

const Demo: React.FC = () => (
  <div style={{ display: 'flex', gap: 20 }}>
    <ABtn type="primary">Primary Button</ABtn>
    <ABtn>Default Button</ABtn>
    <ABtn type="dashed">Dashed Button</ABtn>
    <ABtn type="text">Text Button</ABtn>
    <ABtn type="link">Link Button</ABtn>
  </div>
);

export default Demo;
