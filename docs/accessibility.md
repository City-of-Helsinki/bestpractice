---
name: Web accessibility
route: /accessibility
menu: Best practices
---

# Web accessibility

---

> For many people, technology makes things easier. For people with disabilities, technology makes things possible. 
> 
> Accessibility means developing content to be as accessible as possible no matter an individual's physical and cognitive abilities and no matter how they access the web.
> ([Mozilla Accessibility Guide](https://developer.mozilla.org/en-US/docs/Web/Accessibility))

Web accessibility is the development of websites that can be used by everyone. All City of Helsinki websites are required to be accessible by the standards of 
[WCAG 2.1 at AA Level](https://www.w3.org/TR/WCAG21/#conformance).
The [EU directive on web accessibility](https://eur-lex.europa.eu/eli/dir/2016/2102/oj) mandates that all new public sector websites 
have to comply with a similar level of accessibility by the time of production release (older websites by September 23 2020).

As a developer, it is your responsibility to write code that results in web services that comply with these accessibility standards. 
Accessibility is something that needs to be thought of from the get-go in each development project, not just tested for at the moment 
of v1.0 release. Fortunately React, our chosen framework for UIs, [fully supports accessibility](https://reactjs.org/docs/accessibility.html).

## Accessibility in short
### What is accessible content?
* Perceivable (content can be seen in many ways)
* Operable (usable as intended)
* Understandable (not too hard to use)
* Robust (accessible by wide range of technologies, including old and new browsers).

### Who is accessible content for?
Everyone 😊 But more specifically, some of the most common conditions affecting our users are
* Blindness or visual impairment, including a partial or total inability to see or to perceive color contrasts.
* Deafness or hearing impairment. For example audio and video content may be impossible to use.
* Diminished motor skills and physical disabilities. For example using a mouse might be difficult if not impossible due to the precise movements required.
* Cognitive disabilities. Many conditions affect cognitive ability, such as dementia and dyslexia, requiring easily understandable content.

### How is accessible content consumed?
Users affected by these conditions use [assistive technology and adaptive strategies](https://www.w3.org/WAI/people-use-web/tools-techniques/) to browse our services. These include screen readers, screen magnifiers, voice recognition software, Braille terminals, eye-tracking systems, alternative keyboards and keyboard navigation.

## How to develop accessible services
* Write standards compliant, semantic HTML and CSS
* Support keyboard navigation and other standard accessibility functionalities
* Follow the [React accessibility guide](https://reactjs.org/docs/accessibility.html). Use ARIA when there is no native markup.
* Inspect npm packages for accessibility before selecting them as dependencies
* Use accessible components from the [Helsinki Design System](https://city-of-helsinki.github.io/helsinki-design-system)

### Checklists
* [A11Y checklist](https://a11yproject.com/checklist/)
* [WCAG checklist from Wuhcag](https://www.wuhcag.com/wcag-checklist/)
* [WCAG checklist from WebAIM](https://webaim.org/standards/wcag/checklist)

### Common mistakes and how to avoid them
Accessibility issues discovered in previous [audits](#accessibility-audit) are listed here. Taking these into account in the development phase before the audit will obviously result in less rework, faster delivery and happiness all-around. 😍

- Focus control: relevant interactive elements cannot be used with a keyboard because the user cannot focus selection on these elements and activate them. The focus outline should also be visible i.e. an outline around the currently selected element.
- Open source components are not keyboard navigable: Components such as maps or calendar widgets might not be fully navigable with a keyboard. Check if this is the case before selecting which components to implement. Note that legislation specifically excludes maps from accessibility regulations but the site should still be usable without the map. You should also indicate to the user if there is a map on the site and that the site is usable without the map. All other components should be accessible.
- Confusing logical order of navigation with a keyboard, especially with sites that are responsive: Navigating the site with a keyboard should be simple and the order of navigating should not change when display size is altered (responsiveness). Be especially careful when things fold into a hamburger menu or other changes happen with smaller screen sizes.
- Overuse and repetition of `aria-label` attributes and `label` elements: The `aria-label` attribute is used to define a string that labels the current element. Use it in cases where a text label is not visible on the screen. The use of aria-labels should be concise and well-thought-out in order to not confuse or frustrate users of screen reading devices.
- Labels are read in several languages: screen readers should be directed to only read the label in the language that the user currently has selected.
- No anchor link to jump to main content: This is useful for keyboard navigation to quickly navigate to main content. It can be hidden from the visual interface to only be available for keyboard users.
- Forms are not accessible: form error messages should indicate which field they relate by including the field name and error name into `aria-labelledby` and by setting `aria-invalid="true"`. Forms should also support autocompletion.
- Screen readers get stuck or stop working in various places: test by using a screen reader app to ensure smooth navigation
- Use of FI and SV shorthands for language selector names. Use the full language name either in the visible menu or as an aria-label attribute
- Implementing tabs as buttons instead of using `role="tab"` and `aria-selected="true/false"` or `tabpanel` attribute
- Using VoiceOver and keyboard navigation simultaneously results in conflicts: Do not test with only one or the other, test if using both at the same time works as well.
- Date picker element only supports mouse clicking and not keyboard input
- Textual description of buttons, icons or links are not understandable in the context: Think thoroughly whether you would understand what the button/icon/link does in a certain context. Create a descriptive, context sensitive aria-label.
- Confusing search results: the amount of search results is not indicated to the user. Successfully ordering search results does not result in success message. Use `role="status"` for these.
- User path and phases are not understandable: describe the user path in a multi-stage process such as booking or payment with `aria-labels`
- Empty links: remove empty links so the user won’t get confused
- Help or info texts are behind an icon and not accessible: all help texts should be accessible by keyboard
- Language selection with a keyboard and screen reader: the language dropdown menu is labelled after the current active language: label it as  `choose language` instead. The `lang` attribute is misconfigured resulting in screen readers to mispronounce it. 
- Information about the dropdown being open/closed does not reach the user: use `aria-haspopup="true"` and `aria-expanded="true/false"`.
- Use of `role="menu"` in language selector or log out dropdown instead of `aria-haspopup="true”` and `aria-expanded` attributes. `role="menu"` should be used only when a list of menu items is presented in a manner similar to a menu on a desktop application.

## Testing and analyzing accessibility
### Static code analysis
Use the [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y) accessibility linting library that identifies and enforces a number of accessibility rules. Create-react-app [comes bundled with](https://github.com/facebook/create-react-app/blob/master/packages/eslint-config-react-app/README.md#accessibility-checks) this library with a subset of rules activated.

### Automated testing
* Run Google Lighthouse / Chrome DevTools [Accessibility audit](https://developers.google.com/web/tools/chrome-devtools/accessibility/reference). Consider checking [how the accessibility score is calculated](https://developers.google.com/web/tools/lighthouse/v3/scoring#a11y) to understand which things are most important to get right.
* Include the [axe](https://github.com/dequelabs/axe-core) accessibility testing engine in your development process. For React development, use the [react-axe](https://github.com/dequelabs/react-axe) library. There is also an [axe CLI](https://github.com/dequelabs/axe-cli) and a [Chrome extension](https://chrome.google.com/webstore/detail/axe-web-accessibility-tes/lhdoppojpmngadmnindnejefpokejbdd).

### Manual testing
* Unplug your mouse and navigate the service with a keyboard only
* Use the site with a text-to-speech app such as MacOS VoiceOver screen reader. Check how the VoiceOver app describes elements of a perfectly accessible web service, similar to the one you are building to get a sense of what a good descriptive text is.
* Turn on high contrast mode to see how visually impaired people might view your site
* Turn off images to see if the content makes sense
* Turn off CSS

### Accessibility audit
An accessibility audit should be performed by an accessibility expert near the production release of the service. These can be ordered through the Service Center (Palvelukeskus Helsinki / Palke) by the product owner. The audit combines manual testing with automated testing and results in a report with detailed information about issues to be fixed and instructions on how to fix them. Conducting the audit requires a code freeze for a week or so. If the audit results in a large number of fixes, conducting a follow-up audit after attempting the fixes may be in order.

## Accessibility of admin UIs and APIs
The legislation applies to consumer-facing digital services and these should be the primary focus of accessibility efforts. However, if possible, internal admin user interfaces should be made accessible as well since Helsinki employees using the interface may have disabilities. Keep this in mind when building React admin UIs.

The legislation does not apply to APIs. There is no policy on whether Helsinki APIs should be accessible or not.

## Noteworthy examples of accessible services
- [Service Map](https://palvelukartta.hel.fi/en/). The new version is completely redesigned with an accessibility-first attitude with input from accessibility experts and includes excellent user-configurable accessibility settings. The map component is not accessible but the site is fully usable without it.

## Banned non-accessible libraries, packages and components
These open source building blocks have been used at some point in some services and later found to be non-accessible. Do not use these!
- [FullCalendar](https://fullcalendar.io/)

## Resources
* [City of Helsinki content accessibility guidelines for the web](https://www.hel.fi/static/hki4all/ohjeet/saavutettavuus-opas.pdf) 
(only in Finnish for now)
* [Helsinki Design System section on accessibility](https://city-of-helsinki.github.io/helsinki-design-system/guidelines/accessibility)
* [The A11Y Project](https://a11yproject.com/)
* [W3C Web Accessibility Initiative](https://www.w3.org/WAI/)  
* [WAI-ARIA Authoring Practices](https://www.w3.org/TR/wai-aria-practices-1.1/)  
* [WebAIM](https://webaim.org/)  
