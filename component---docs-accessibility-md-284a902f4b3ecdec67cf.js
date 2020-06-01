(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{A7Jj:function(e,t,i){"use strict";i.r(t),i.d(t,"_frontmatter",(function(){return l})),i.d(t,"default",(function(){return c}));i("5hJT"),i("W1QL"),i("K/PF"),i("t91x"),i("75LO"),i("PJhk");var a=i("SAVP"),s=i("TjRS");i("aD51");function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e}).apply(this,arguments)}var l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"docs/accessibility.md"}});var o={_frontmatter:l},r=s.a;function c(e){var t=e.components,i=function(e,t){if(null==e)return{};var i,a,s={},n=Object.keys(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||(s[i]=e[i]);return s}(e,["components"]);return Object(a.b)(r,n({},o,i,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"web-accessibility"},"Web accessibility"),Object(a.b)("hr",null),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"For many people, technology makes things easier. For people with disabilities, technology makes things possible. "),Object(a.b)("p",{parentName:"blockquote"},"Accessibility means developing content to be as accessible as possible no matter an individual's physical and cognitive abilities and no matter how they access the web.\n(",Object(a.b)("a",n({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility"}),"Mozilla Accessibility Guide"),")")),Object(a.b)("p",null,"Web accessibility is the development of websites that can be used by everyone. All City of Helsinki websites are required to be accessible by the standards of\n",Object(a.b)("a",n({parentName:"p"},{href:"https://www.w3.org/TR/WCAG21/#conformance"}),"WCAG 2.1 at AA Level"),".\nThe ",Object(a.b)("a",n({parentName:"p"},{href:"https://eur-lex.europa.eu/eli/dir/2016/2102/oj"}),"EU directive on web accessibility")," mandates that all new public sector websites\nhave to comply with a similar level of accessibility by the time of production release (older websites by September 23 2020)."),Object(a.b)("p",null,"As a developer, it is your responsibility to write code that results in web services that comply with these accessibility standards.\nAccessibility is something that needs to be thought of from the get-go in each development project, not just tested for at the moment\nof v1.0 release. Fortunately React, our chosen framework for UIs, ",Object(a.b)("a",n({parentName:"p"},{href:"https://reactjs.org/docs/accessibility.html"}),"fully supports accessibility"),"."),Object(a.b)("h2",{id:"accessibility-in-short"},"Accessibility in short"),Object(a.b)("h3",{id:"what-is-accessible-content"},"What is accessible content?"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Perceivable (content can be seen in many ways)"),Object(a.b)("li",{parentName:"ul"},"Operable (usable as intended)"),Object(a.b)("li",{parentName:"ul"},"Understandable (not too hard to use)"),Object(a.b)("li",{parentName:"ul"},"Robust (accessible by wide range of technologies, including old and new browsers).")),Object(a.b)("h3",{id:"who-is-accessible-content-for"},"Who is accessible content for?"),Object(a.b)("p",null,"Everyone 😊 But more specifically, some of the most common conditions affecting our users are"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Blindness or visual impairment, including a partial or total inability to see or to perceive color contrasts."),Object(a.b)("li",{parentName:"ul"},"Deafness or hearing impairment. For example audio and video content may be impossible to use."),Object(a.b)("li",{parentName:"ul"},"Diminished motor skills and physical disabilities. For example using a mouse might be difficult if not impossible due to the precise movements required."),Object(a.b)("li",{parentName:"ul"},"Cognitive disabilities. Many conditions affect cognitive ability, such as dementia and dyslexia, requiring easily understandable content.")),Object(a.b)("h3",{id:"how-is-accessible-content-consumed"},"How is accessible content consumed?"),Object(a.b)("p",null,"Users affected by these conditions use ",Object(a.b)("a",n({parentName:"p"},{href:"https://www.w3.org/WAI/people-use-web/tools-techniques/"}),"assistive technology and adaptive strategies")," to browse our services. These include screen readers, screen magnifiers, voice recognition software, Braille terminals, eye-tracking systems, alternative keyboards and keyboard navigation."),Object(a.b)("h2",{id:"how-to-develop-accessible-services"},"How to develop accessible services"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Write standards compliant, semantic HTML and CSS"),Object(a.b)("li",{parentName:"ul"},"Support keyboard navigation and other standard accessibility functionalities"),Object(a.b)("li",{parentName:"ul"},"Follow the ",Object(a.b)("a",n({parentName:"li"},{href:"https://reactjs.org/docs/accessibility.html"}),"React accessibility guide"),". Use ARIA when there is no native markup."),Object(a.b)("li",{parentName:"ul"},"Inspect npm packages for accessibility before selecting them as dependencies"),Object(a.b)("li",{parentName:"ul"},"Use accessible components from the ",Object(a.b)("a",n({parentName:"li"},{href:"https://city-of-helsinki.github.io/helsinki-design-system"}),"Helsinki Design System"))),Object(a.b)("h3",{id:"checklists"},"Checklists"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",n({parentName:"li"},{href:"https://a11yproject.com/checklist/"}),"A11Y checklist")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",n({parentName:"li"},{href:"https://www.wuhcag.com/wcag-checklist/"}),"WCAG checklist from Wuhcag")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",n({parentName:"li"},{href:"https://webaim.org/standards/wcag/checklist"}),"WCAG checklist from WebAIM"))),Object(a.b)("h3",{id:"common-mistakes-and-how-to-avoid-them"},"Common mistakes and how to avoid them"),Object(a.b)("p",null,"Accessibility issues discovered in previous ",Object(a.b)("a",n({parentName:"p"},{href:"#accessibility-audit"}),"audits")," are listed here. Taking these into account in the development phase before the audit will obviously result in less rework, faster delivery and happiness all-around. 😍"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Focus control: relevant interactive elements cannot be used with a keyboard because the user cannot focus selection on these elements and activate them. The focus outline should also be visible i.e. an outline around the currently selected element."),Object(a.b)("li",{parentName:"ul"},"Open source components are not keyboard navigable: Components such as maps or calendar widgets might not be fully navigable with a keyboard. Check if this is the case before selecting which components to implement. Note that legislation specifically excludes maps from accessibility regulations but the site should still be usable without the map. You should also indicate to the user if there is a map on the site and that the site is usable without the map. All other components should be accessible."),Object(a.b)("li",{parentName:"ul"},"Confusing logical order of navigation with a keyboard, especially with sites that are responsive: Navigating the site with a keyboard should be simple and the order of navigating should not change when display size is altered (responsiveness). Be especially careful when things fold into a hamburger menu or other changes happen with smaller screen sizes."),Object(a.b)("li",{parentName:"ul"},"Overuse and repetition of ",Object(a.b)("inlineCode",{parentName:"li"},"aria-label")," attributes and ",Object(a.b)("inlineCode",{parentName:"li"},"label")," elements: The ",Object(a.b)("inlineCode",{parentName:"li"},"aria-label")," attribute is used to define a string that labels the current element. Use it in cases where a text label is not visible on the screen. The use of aria-labels should be concise and well-thought-out in order to not confuse or frustrate users of screen reading devices."),Object(a.b)("li",{parentName:"ul"},"Labels are read in several languages: screen readers should be directed to only read the label in the language that the user currently has selected."),Object(a.b)("li",{parentName:"ul"},"No anchor link to jump to main content: This is useful for keyboard navigation to quickly navigate to main content. It can be hidden from the visual interface to only be available for keyboard users."),Object(a.b)("li",{parentName:"ul"},"Forms are not accessible: form error messages should indicate which field they relate by including the field name and error name into ",Object(a.b)("inlineCode",{parentName:"li"},"aria-labelledby")," and by setting ",Object(a.b)("inlineCode",{parentName:"li"},'aria-invalid="true"'),". Forms should also support autocompletion."),Object(a.b)("li",{parentName:"ul"},"Screen readers get stuck or stop working in various places: test by using a screen reader app to ensure smooth navigation"),Object(a.b)("li",{parentName:"ul"},"Use of FI and SV shorthands for language selector names. Use the full language name either in the visible menu or as an aria-label attribute"),Object(a.b)("li",{parentName:"ul"},"Implementing tabs as buttons instead of using ",Object(a.b)("inlineCode",{parentName:"li"},'role="tab"')," and ",Object(a.b)("inlineCode",{parentName:"li"},'aria-selected="true/false"')," or ",Object(a.b)("inlineCode",{parentName:"li"},"tabpanel")," attribute"),Object(a.b)("li",{parentName:"ul"},"Using VoiceOver and keyboard navigation simultaneously results in conflicts: Do not test with only one or the other, test if using both at the same time works as well."),Object(a.b)("li",{parentName:"ul"},"Date picker element only supports mouse clicking and not keyboard input"),Object(a.b)("li",{parentName:"ul"},"Textual description of buttons, icons or links are not understandable in the context: Think thoroughly whether you would understand what the button/icon/link does in a certain context. Create a descriptive, context sensitive aria-label."),Object(a.b)("li",{parentName:"ul"},"Confusing search results: the amount of search results is not indicated to the user. Successfully ordering search results does not result in success message. Use ",Object(a.b)("inlineCode",{parentName:"li"},'role="status"')," for these."),Object(a.b)("li",{parentName:"ul"},"User path and phases are not understandable: describe the user path in a multi-stage process such as booking or payment with ",Object(a.b)("inlineCode",{parentName:"li"},"aria-labels")),Object(a.b)("li",{parentName:"ul"},"Empty links: remove empty links so the user won’t get confused"),Object(a.b)("li",{parentName:"ul"},"Help or info texts are behind an icon and not accessible: all help texts should be accessible by keyboard"),Object(a.b)("li",{parentName:"ul"},"Language selection with a keyboard and screen reader: the language dropdown menu is labelled after the current active language: label it as  ",Object(a.b)("inlineCode",{parentName:"li"},"choose language")," instead. The ",Object(a.b)("inlineCode",{parentName:"li"},"lang")," attribute is misconfigured resulting in screen readers to mispronounce it. "),Object(a.b)("li",{parentName:"ul"},"Information about the dropdown being open/closed does not reach the user: use ",Object(a.b)("inlineCode",{parentName:"li"},'aria-haspopup="true"')," and ",Object(a.b)("inlineCode",{parentName:"li"},'aria-expanded="true/false"'),"."),Object(a.b)("li",{parentName:"ul"},"Use of ",Object(a.b)("inlineCode",{parentName:"li"},'role="menu"')," in language selector or log out dropdown instead of ",Object(a.b)("inlineCode",{parentName:"li"},'aria-haspopup="true”')," and ",Object(a.b)("inlineCode",{parentName:"li"},"aria-expanded")," attributes. ",Object(a.b)("inlineCode",{parentName:"li"},'role="menu"')," should be used only when a list of menu items is presented in a manner similar to a menu on a desktop application.")),Object(a.b)("h2",{id:"testing-and-analyzing-accessibility"},"Testing and analyzing accessibility"),Object(a.b)("h3",{id:"static-code-analysis"},"Static code analysis"),Object(a.b)("p",null,"Use the ",Object(a.b)("a",n({parentName:"p"},{href:"https://github.com/evcohen/eslint-plugin-jsx-a11y"}),"eslint-plugin-jsx-a11y")," accessibility linting library that identifies and enforces a number of accessibility rules. Create-react-app ",Object(a.b)("a",n({parentName:"p"},{href:"https://github.com/facebook/create-react-app/blob/master/packages/eslint-config-react-app/README.md#accessibility-checks"}),"comes bundled with")," this library with a subset of rules activated."),Object(a.b)("h3",{id:"automated-testing"},"Automated testing"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Run Google Lighthouse / Chrome DevTools ",Object(a.b)("a",n({parentName:"li"},{href:"https://developers.google.com/web/tools/chrome-devtools/accessibility/reference"}),"Accessibility audit"),". Consider checking ",Object(a.b)("a",n({parentName:"li"},{href:"https://developers.google.com/web/tools/lighthouse/v3/scoring#a11y"}),"how the accessibility score is calculated")," to understand which things are most important to get right."),Object(a.b)("li",{parentName:"ul"},"Include the ",Object(a.b)("a",n({parentName:"li"},{href:"https://github.com/dequelabs/axe-core"}),"axe")," accessibility testing engine in your development process. For React development, use the ",Object(a.b)("a",n({parentName:"li"},{href:"https://github.com/dequelabs/react-axe"}),"react-axe")," library. There is also an ",Object(a.b)("a",n({parentName:"li"},{href:"https://github.com/dequelabs/axe-cli"}),"axe CLI")," and a ",Object(a.b)("a",n({parentName:"li"},{href:"https://chrome.google.com/webstore/detail/axe-web-accessibility-tes/lhdoppojpmngadmnindnejefpokejbdd"}),"Chrome extension"),".")),Object(a.b)("h3",{id:"manual-testing"},"Manual testing"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Unplug your mouse and navigate the service with a keyboard only"),Object(a.b)("li",{parentName:"ul"},"Use the site with a text-to-speech app such as MacOS VoiceOver screen reader. Check how the VoiceOver app describes elements of a perfectly accessible web service, similar to the one you are building to get a sense of what a good descriptive text is."),Object(a.b)("li",{parentName:"ul"},"Turn on high contrast mode to see how visually impaired people might view your site"),Object(a.b)("li",{parentName:"ul"},"Turn off images to see if the content makes sense"),Object(a.b)("li",{parentName:"ul"},"Turn off CSS")),Object(a.b)("h3",{id:"accessibility-audit"},"Accessibility audit"),Object(a.b)("p",null,"An accessibility audit should be performed by an accessibility expert near the production release of the service. These can be ordered through the Service Center (Palvelukeskus Helsinki / Palke) by the product owner. The audit combines manual testing with automated testing and results in a report with detailed information about issues to be fixed and instructions on how to fix them. Conducting the audit requires a code freeze for a week or so. If the audit results in a large number of fixes, conducting a follow-up audit after attempting the fixes may be in order."),Object(a.b)("h2",{id:"accessibility-of-admin-uis-and-apis"},"Accessibility of admin UIs and APIs"),Object(a.b)("p",null,"The legislation applies to consumer-facing digital services and these should be the primary focus of accessibility efforts. However, if possible, internal admin user interfaces should be made accessible as well since Helsinki employees using the interface may have disabilities. Keep this in mind when building React admin UIs."),Object(a.b)("p",null,"The legislation does not apply to APIs. There is no policy on whether Helsinki APIs should be accessible or not."),Object(a.b)("h2",{id:"noteworthy-examples-of-accessible-services"},"Noteworthy examples of accessible services"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",n({parentName:"li"},{href:"https://palvelukartta.hel.fi/en/"}),"Service Map"),". The new version is completely redesigned with an accessibility-first attitude with input from accessibility experts and includes excellent user-configurable accessibility settings. The map component is not accessible but the site is fully usable without it.")),Object(a.b)("h2",{id:"banned-non-accessible-libraries-packages-and-components"},"Banned non-accessible libraries, packages and components"),Object(a.b)("p",null,"These open source building blocks have been used at some point in some services and later found to be non-accessible. Do not use these!"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",n({parentName:"li"},{href:"https://fullcalendar.io/"}),"FullCalendar"))),Object(a.b)("h2",{id:"resources"},"Resources"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",n({parentName:"li"},{href:"https://www.hel.fi/static/liitteet/kanslia/TPR/opas_saavutettavaan_sisaltoon_EN.pdf"}),"City of Helsinki content accessibility guidelines for the web")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",n({parentName:"li"},{href:"https://city-of-helsinki.github.io/helsinki-design-system/guidelines/accessibility"}),"Helsinki Design System section on accessibility")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",n({parentName:"li"},{href:"https://a11yproject.com/"}),"The A11Y Project")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",n({parentName:"li"},{href:"https://www.w3.org/WAI/"}),"W3C Web Accessibility Initiative"),"  "),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",n({parentName:"li"},{href:"https://www.w3.org/TR/wai-aria-practices-1.1/"}),"WAI-ARIA Authoring Practices"),"  "),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",n({parentName:"li"},{href:"https://webaim.org/"}),"WebAIM"),"  ")))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"docs/accessibility.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---docs-accessibility-md-284a902f4b3ecdec67cf.js.map