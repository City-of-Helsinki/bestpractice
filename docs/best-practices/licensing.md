---
name: Licensing
menu: Best practices
route: /licensing
---

# Licensing
Appropriate licensing ensures that the works produced by the city can be reused.

## Software license
Code is to be licensed under the [MIT license](https://opensource.org/licenses/MIT), unless there is a very strong case against using it. One common reason to use another license is when the code will be published in the context of another project / ecosystem with strong licensing conventions of their own -- for example as Drupal extensions to be hosted at Drupal.org.
The MIT is a permissive license that imposes only very limited restriction on reuse and has high compatibility with other software licenses.

Include a LICENSE file in the root of  the project on GitHub, with this content:

```
MIT License

Copyright (c) City of Helsinki

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## Content license
The content (text, pictures etc.) of a web page or an API should be licensed under the [Creative Commons CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) license 
whenever possible. 
This enables others to share, use, modify and build upon the content that the city has created. Do note that if you use copyrighted content licensed from a third party 
(e.g. stock photos), it cannot be licensed under CC BY 4.0, and an exception clause should be added in these cases.

Add this sentence about licensing to the footer of the web app:

```
All content is available under CC BY 4.0, except where otherwise stated. 
The City of Helsinki logo is a registered trademark. 
The Helsinki Grotesk Typeface is a proprietary typeface licensed by Camelot Typefaces.
```

In the absence of a footer, the front page, the about page or the terms of service are good places to include the licensing information. 
See the [Helsinki Design System documentation page](https://hds.hel.fi/) for an example on web page content licensing and 
the [Linked Events terms of service](https://linkedevents.hel.fi/terms) for an example of how to handle content licensing for an API.
