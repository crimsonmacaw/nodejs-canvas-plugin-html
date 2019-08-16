/*global kbnInterpreter */

import { elements } from '../public/elements';
import { renderers } from '../public/renderers';
import { browserFunctions } from '../public/functions/browser';

kbnInterpreter.register({
  elements,
  browserFunctions,
  renderers
});
