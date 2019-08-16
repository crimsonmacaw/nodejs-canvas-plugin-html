import Hbars from 'handlebars/dist/handlebars';
import { helpers } from './handlebars_helpers';

helpers.forEach(helper => Hbars.registerHelper(helper.name, helper.fn));

export const Handlebars = Hbars;
