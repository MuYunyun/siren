import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';

// import { Button } from '@storybook/react/demo';

import { BaseType } from '../components/button/demo'

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

// storiesOf('Button', module)
//   .add('with text123', () => <Button onClick={action('clicked')}>Hello Button</Button>)
//   .add('with some emoji', () => (
//     <Button onClick={action('clicked')}>
//       <span role="img" aria-label="so cool">
//         😀 😎 👍 💯
//       </span>
//     </Button>
//   ));

// storiesOf('快速开始', module).add('to Storybook', () => <div>welcome to Siren</div>);

storiesOf('Button', module)
  .add('按钮类型', () => <BaseType />)
  // .add('图标按钮', () => (<Button onClick={action('clicked')}>123</Button>));
