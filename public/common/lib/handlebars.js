import { Handlebars } from 'x-pack/plugins/canvas/common/lib/handlebars.js';
import { helpers } from './handlebars_helpers';

helpers.forEach(helper => Handlebars.registerHelper(helper.name, helper.fn));

export const Hbars = Handlebars;
