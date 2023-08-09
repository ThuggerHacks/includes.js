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

###USAGE

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
