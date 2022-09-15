import type { FC } from 'react';
import { useContext } from 'react';

import ListLayout from '@business/component/list-layout';
import ConfigContext from '@business/config-provider/ConfigContext';

import xhsWorkHeader from '@business/image/work/xhs-work-header.png';

const Work: FC = () => {
  const { mainHeight } = useContext(ConfigContext);

  return (
    <ListLayout headerImg={xhsWorkHeader} style={{}}>
      Work
    </ListLayout>
  );
};

export default Work;
