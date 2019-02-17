const getPage = (pages, page, contents) => `
  <html>
    <head>
      <title>${page.title}</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" />
    </head>
    <body>
      <div class="container">
        <h1>Acme Web</h1>
        <h2>Home</h2>
        <ul class="nav nav-tabs">
          ${pages
            .map(
              thisPage => `
            <li class="nav-item">
              <a href="/pages/${thisPage.id}" class="nav-link ${thisPage.id === page.id ? 'active' : ''}">
                ${thisPage.title}
              </a>
            </li>
          `
            )
            .join('')}
        </ul>
        <ul class="list-group">
          ${contents
            .map(
              content => `
          <li class="list-group-item">
          ${content.name}
          <br />
          ${content.body}
          </li>
          `
            )
            .join('')}
        </ul>
      </div>
    </body>
  </html>
`

module.exports = getPage
