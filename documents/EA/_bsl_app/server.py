"""BSL Explorer — Local HTTP Server"""
import http.server
import webbrowser
import os
import sys

PORT = 8080
# Serve from EA root (parent of _bsl_app/)
DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

os.chdir(DIR)
print(f"BSL Explorer — serving from {DIR}")
print(f"Open http://localhost:{PORT}/BSL%20Explorer.html in your browser")
print("Press Ctrl+C to stop.\n")

webbrowser.open(f'http://localhost:{PORT}/BSL%20Explorer.html')

handler = http.server.SimpleHTTPRequestHandler
handler.extensions_map.update({'.js': 'application/javascript', '.json': 'application/json'})

try:
    httpd = http.server.HTTPServer(('', PORT), handler)
    httpd.serve_forever()
except KeyboardInterrupt:
    print("\nServer stopped.")
    sys.exit(0)
