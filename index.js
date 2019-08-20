export default function (kibana) {
  return new kibana.Plugin({
    require: ['interpreter', 'canvas'],
    name: 'canvas-plugin-html',
    uiExports: {
      canvas: ['plugins/canvas-plugin-html']
    },

    config: Joi => {
      return Joi.object({
        enabled: Joi.boolean().default(true),
      }).default();
    },
  });
}
