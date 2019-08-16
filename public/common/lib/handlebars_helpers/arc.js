export const arc = {
  name: 'arc',
  fn: (radius, value, max) => {
    var x = Math.cos((value / max) * Math.PI) * radius * -1;
    var y = Math.sin((value / max) * Math.PI) * radius * -1;

    return 'M' + (-1 * radius) + ',0' +
      'A' + radius + "," + radius + ' 0 0,1 ' + x + ',' + y +
      'L' + x + ',' + y +
      'A' + radius + "," + radius + ' 0 0,0 ' + (-1 * radius) + ',0Z';
  }
};
