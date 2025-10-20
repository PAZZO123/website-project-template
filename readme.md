### The use of page navigation

Add component you want to work on in the screen2 - section - public folder.

### The way to link it

Don't use index.html to link your screen2 components. Use screen2.html file on the root of project to link the project and make sure that you genuinely link your components in the screen2.html file by importing the actual url of component.

```

</html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Website project template</title>
</head>
<script>
    const loadComponents = (id, url) =>  {
        fetch(url)
        .then((response) => response.text())
        .then((html) => {
            document.getElementById(id).innerHTML = html;
        });
    }

    window.onload = () => {
        loadComponents('screen2-header', '/sections/screen2/Header.html');
    }
</script>
<body>

    <div class="sticky top-0 z-50" id="screen2-header"></div>
    <script type="module" src="/src/main.js"></script>
</body>
</html>

```
