to run on a local server:
	- python -m http.server 8000
	- opens on: http://127.0.0.1:8000/ 

new page template:
<!DOCTYPE html>
<!-- My website 1.2 -->

<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Name</title>
<link rel="stylesheet" href="/style.css"/>
<script src="/Layout/layout.js" defer></script>
</head>
<body>
<custom-layout></custom-layout>
	
<div id='main-content'>
<!-- Add conetent in here -->
</div>
</body>
</html>
