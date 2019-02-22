// This file is used to load client-side plugin assets. Here all the public and common
// functions are being registered in the browser runtime.

// load the functions registry
import { functionsRegistry } from 'plugins/interpreter/functions_registry';
import { renderFunctionsRegistry } from 'plugins/canvas/lib/render_functions_registry';
import { elementsRegistry } from 'plugins/canvas/lib/elements_registry';

// load local functions

import { elements } from '../../public/elements';
import { renderers } from '../../public/renderers';
import { browserFunctions } from '../../public/functions/browser';

// register client and common functions in the client runtime
browserFunctions.forEach(fnDef => functionsRegistry.register(fnDef));
renderers.forEach(fnDef => renderFunctionsRegistry.register(fnDef));
elements.forEach(elDef => elementsRegistry.register(elDef));
