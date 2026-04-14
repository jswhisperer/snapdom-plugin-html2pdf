Static demo (no build step)

1. Unzip so you have a folder containing:
   - index.js   (plugin, at the parent of demo/)
   - demo/index.html
   - demo/style.css

2. From that folder, serve the root (not only demo/):
   python3 -m http.server 8080

3. Open: http://localhost:8080/demo/index.html
