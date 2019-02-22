import init from './init';

export default function (kibana) {
  return new kibana.Plugin({
    require: ['canvas'],
    name: 'canvas_html',
    uiExports: {
      hacks: [
        'plugins/canvas_html/lib/load_plugin.js',
      ],
      /* kibana 7
      canvas: ['plugins/canvas_html']
      */
    },

    config: Joi => {
      return Joi.object({
        enabled: Joi.boolean().default(true),
      }).default();
    },

    init,
  });
}
