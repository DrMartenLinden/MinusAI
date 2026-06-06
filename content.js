(function() {
  chrome.storage.local.get(['isActive'], (result) => {
    // Default to true if not explicitly set to false
    if (result.isActive === false) return;

    const url = new URL(window.location.href);
    const searchParams = url.searchParams;

    // Check if it's a search page with a query parameter
    if (searchParams.has('q')) {
      let query = searchParams.get('q');
      
      // Check if the query already contains -AI (case-insensitive) to prevent infinite redirect loops
      if (!/(^|\s)-ai(\s|$)/i.test(query)) {
        // Append -AI to the search query
        searchParams.set('q', query + ' -AI');
        
        // Update the URL with the new search parameters and redirect
        window.location.replace(url.pathname + '?' + searchParams.toString());
      }
    }
  });
})();
