## ⚡ Setup Instructions

1. Right-click on your bookmarks toolbar (or any other bookmark area) in your web browser and select "Add Page" or "Add Bookmark" from the context menu. This will open a dialog box.

2. In the dialog box, enter a name for your bookmarklet. For example, you can use "Sintco Sparxmaths Solver".

3. In the "URL" or "Location" field of the dialog box, paste the following code:

```
javascript:(function() {
  var s = document.createElement('script');
  s.src = 'https://cdn.jsdelivr.net/gh/SintcoLTD/CDN@main/chrome-extension/sparxmaths/console/inject.js';
  document.head.appendChild(s);
})();
```

To paste the code, right-click in the field and choose "Paste" from the context menu, or you can use the keyboard shortcut `Ctrl+V` (or `Cmd+V` on macOS).

4. Click the "Save" or "Add" button to create the bookmarklet.


> **Note** The Bookmarklet should now appear in the Bookmark tab, and you can use it by Simply clicking it.

# Extra

If you found this program

- Helpful, 
- Benificial,
- Or it is just Good!

You can **Star the repository 😄**

Click the Star on the Top-Right of the page [⭐](https://github.com/SintcoLTD/sparxmaths)
