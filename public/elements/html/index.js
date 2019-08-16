import header from './header.png';

export const html = () => ({
  name: 'html',
  displayName: 'HTML',
  tags: ['text'],
  help: 'Native HTML code',
  image: header,
  expression: `filters
| demodata
| head 5
| columns include="price,age,country,state"
| html "
<style type='text/css'>
  .example_wrapper h3, .example_wrapper p, .example_wrapper ul, .example_wrapper h4 {
    margin-bottom: 10px;
  }

  .example_wrapper h3, .example_wrapper h4, .example_wrapper th {
    font-weight: bold;
  }

  .example_wrapper h3 {
    font-size: 20px;
  }

  .example_wrapper h4 {
    font-size: 16px;
  }

  .example_wrapper ul {
    padding-left: 10px;
  }

  .example_wrapper ul li {
    list-style: circle;
  }

  .example_wrapper tr:nth-child(even) {
    background: #ddd;
  }

  .example_wrapper tr, .example_wrapper td {
    padding: 5px;
  }
</style>
<div class='example_wrapper'>
<h3>Welcome to the HTML Element.</h3>
<p>Good news! You're already connected to some demo data!</p>
<p>The datatable contains <b>{{rows.length}} rows</b>, each containing the following data:</p>
<table cellpadding='2'>
  <thead>
    <tr>
    {{#each columns}}
      <th>{{this.name}}</th>
    {{/each}}
    </tr>
  </thead>
  <tbody>
    {{#each rows}}
    <tr>
      {{#each this}}
        <td>{{this}}</td>
      {{/each}}
    </tr>
    {{/each}}
  </tbody>
</table>
<p>You can use standard HTML in here, but you can also access your piped-in data using Handlebars. If you want to know more, check out the <a href='http://handlebarsjs.com/expressions.html'>Handlebars Documentation</a></p>
<h4>Enjoy!</h4>
</div>
" | render`,
});
