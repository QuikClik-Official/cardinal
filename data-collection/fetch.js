// Source - https://stackoverflow.com/a/50812705
// Posted by vlasterx, modified by community. See post 'Timeline' for change history
// Retrieved 2026-05-23, License - CC BY-SA 4.0

fetch('somePage.html')
  .then(response => {
    return response.text()
  })
  .then(html => {
    // Initialize the DOM parser
    const parser = new DOMParser()

    // Parse the text
    const doc = parser.parseFromString(html, "text/html")

    console.log(doc)
  })
  .catch(error => {
     console.error('Failed to fetch page: ', error)
  })
