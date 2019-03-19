import React from 'react';
import Mirador from 'mirador';
import * as plugins from './plugins';

/**
* Note that the consequences of applying multiple plugins are not investigated so far.
* Overridings and race conditions may happen.
*/
const pluginsToApply = [
  plugins.windowDownloadContentPlugin,
];

export default function(props) {
  return <Mirador plugins={pluginsToApply}/>
}
