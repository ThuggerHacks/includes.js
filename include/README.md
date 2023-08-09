# includesjs

[![CDNJS](https://img.shields.io/cdnjs/v/includesjs.svg)](https://cdnjs.com/libraries/includesjs)
[![GitHub license](https://img.shields.io/github/license/yourusername/includesjs.svg)](https://github.com/yourusername/includesjs/blob/main/LICENSE)

Welcome to the official repository of **includesjs**! This library simplifies including dynamic components and data into your HTML files.

## Table of Contents

- [Getting Started](#getting-started)
  - [CDN Link](#cdn-link)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### CDN Link

You can include includesjs in your projects using the following CDN link:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/includesjs/{version}/includes.min.js"></script>
```
### USAGE
```html
index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>INCLUDESJS</title>
</head>
<body>
    <include valor="100" nome="Braimo">components/navbar</include><!----add the path of the component-->
    <include nome="Braimo">components/footer</include>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/includesjs/{version}/includes.min.js"></script><!------include the includesjs-->
</body>
</html>

footer.html

<footer>
    &copy; {{nome}}
</footer>

navbar.html

<nav>
    Navbar {{valor}} - {{nome}}
</nav>

```

### Contributing
Feel free to contribute, the code is opensource, feel free to edit, clone, fork as long as you don't spoil anything...


### License
This project was started by Braimo Selimane A.K.A ThuggerHacks in August 9,2023 to make HTML more organized that it is, being able to make independednt components and import them using html html tags, also send that to them, I hope this project helps somehow and whoever gets a new idea can make it happen!
