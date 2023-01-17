import React from 'react';

import { Phone } from '../../src';

export default {
  title: 'Icon',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Preview for icons',
      },
    },
  },
  args: {},
  argTypes: {},
};

export const Default = (): JSX.Element => <Phone width="24px" height="24px" />;
Default.parameters = {
  docs: {
    source: {
      code: `
import { Phone } from '@oyelsv-code/icons';

<Phone width="24px" height="24px" />`,
    },
  },
};

export const WithWrapper = (): JSX.Element => (
  <span style={{ width: '48px', height: '48px', display: 'flex', alignItems: 'center' }}>
    <Phone width="100%" height="100%" />
  </span>
);
WithWrapper.parameters = {
  docs: {
    source: {
      code: `
import { Phone } from '@oyelsv-code/icons';

/*
* For better experience it is recommended to create your own svg wrapper
* and use it with icons from library.
* */
<span style={{ width: '48px', height: '48px', display: 'flex', alignItems: 'center' }}>
  <Phone width="24px" height="24px" />
</span>
`,
    },
  },
};
