import React from 'react';
import { render } from 'react-dom';

import FinalCountdown from './finalcountdown';

render(<FinalCountdown timeTillDate="08 04 2020" timeFormat="MM DD YYYY" />, document.getElementById('app-root'))
  