// import { Handlebars } from 'x-pack/plugins/canvas/common/lib/handlebars.js';
import { Hbars } from '../../../common/lib/handlebars';

export const html = () => ({
  name: 'html',
  aliases: [],
  type: 'render',
  help:
    'An element for rendering html',
  context: {
    types: ['datatable', 'null'],
  },
  args: {
    markup: {
      aliases: ['_'],
      types: ['string'],
      help:
        'A string containing html. You can pass this multiple times to achieve concatenation',
      default: '""',
      multi: true,
    }
  },
  fn: (context, args) => {
    const compileFunctions = args.markup.map(str => Hbars.compile(String(str)));
    const ctx = {
      columns: [],
      rows: [],
      type: null,
      ...context,
    };

    return {
      type: 'render',
      as: 'html',
      value: {
        content: compileFunctions.map(fn => fn(ctx)).join('')
      },
    };
  },
});
