---
name: Accessibility
route: /accessibility
menu: Best practices
---

# Accessibility

---
Web accessibility is the development of websites that can be used by everyone. All City of Helsinki web services aim to be accessible by the standards of 
[WCAG 2.0 at AA Level](https://www.w3.org/TR/WCAG20/#conformance).
The [EU directive on web accessibility](https://eur-lex.europa.eu/eli/dir/2016/2102/oj) mandates that all public sector websites 
have to comply with a similar level of accessibility by September 23 2020.

As a developer, it is your responsibility to write code that results in web services that comply with these accessibility standards. 
Accessibility is something that needs to thought of from the get-go in each development project, not just tested for at the moment 
of v1.0 release.

## What is accessible content?

* Perceivable (content can be seen in many ways)
* Operable (usable as intended)
* Understandable (not too hard to use)
* Robust (accessible by wide range of technologies, including old and new browsers).

## How to develop accessible services?

* Write standards compliant, semantic HTML and CSS
* Support keyboard navigation and other standard accessibility functionalities
* For [React](https://reactjs.org/docs/accessibility.html), use ARIA when there is no native markup.
* Use accessible components from the [Helsinki Design System](https://city-of-helsinki.github.io/helsinki-design-system)

### Checklists
* [A11Y checklist](https://a11yproject.com/checklist/)
* [WCAG checklist from Wuhcag](https://www.wuhcag.com/wcag-checklist/)
* [WCAG checklist from WebAIM](https://webaim.org/standards/wcag/checklist)

## Testing for accessibility
### Automatic tests
* Run Google Lighthouse / Chrome DevTools [Accessibility audit](https://developers.google.com/web/tools/chrome-devtools/accessibility/reference).

### Manual testing
* Unplug your mouse and navigate the service with a keyboard only
* Turn on high contrast mode to see how visually impaired people might view your site
* Turn off images to see if the content makes sense
* Turn off CSS

## Resources
* [City of Helsinki content accessibility guidelines for the web](https://www.hel.fi/static/hki4all/ohjeet/saavutettavuus-opas.pdf) 
(only in Finnish for now)
* [Helsinki Design System section on accessibility](https://city-of-helsinki.github.io/helsinki-design-system/guidelines/accessibility)
* [The A11Y Project](https://a11yproject.com/)
* [W3C Web Accessibility Initiative](https://www.w3.org/WAI/)  
* [WAI-ARIA Authoring Practices](https://www.w3.org/TR/wai-aria-practices-1.1/)  
* [WebAIM](https://webaim.org/)  
