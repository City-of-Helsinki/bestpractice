# Pull request conventions (Definition of Done)

## Project specific requirements

This can vary from line-length, complexity, browser testing checklist and application environment support for example.
Project team should decide themselves what kind of `definition of done` they shall benefit from.
Style guides and code quality rules are usually project specific, but general best practices should still always apply.
Project issue specification and action flow should be decided by the product owner or project manager.

## Minimum requirements

- [ ] Produced code passes tests
- [ ] Code builds without errors
- [ ] Unit tests written and passing
      * Unit tests should be:
        * Clear and easy to understand
        * Reliable that they fail if a bug is in the system
        * Fast (slow tests will be a nuisance in numbers)
- [ ] Code is documented
      * When doing public API functionality context of the code is written
      * Clarification, when code might be unclear.
      * Clear and well named functionality does not need a comment
- [ ] Variable names convey their use case
- [ ] Produced code matches presumed functionality
      * Matches specifications given in the issue
      * Works in desired environments
- [ ] Code quality
      * Code follows best practices
        * Usually specified by the language, framework or library itself.
      * Code follows styleguide
      * Project specific linter rules
        * If no linting rules are specified each project should follow some kind of guidelines for unified code
- [ ] Functionality verified by testing the application
- [ ] Each function and class should have a single clear purpose
      * Complex or long function sections should be split into smaller ones
      * Each additional **if**, **loop**, **switch** and **logical conditional operation** adds complexity
      * Complexity can be measured by this way if each complexity point is added together.

# Katselmointikäytännöt (Valmiin määritelmä)

## Projektikohtaiset määritykset

Määritykset voivat esimerkiksi vaihdella rivin pituuden, ohjelmakoodin monimutkaisuuden, selain testauksen ja sovellusympäristön tuen mukaan.
Projektin tiimi päättää minkälaisesta "valmiin määrityksestä" he hyötyvät eniten.
Tyylioppaat sekä ohjelmakoodin laatusäännöt ovat yleensä projektikohtaisia, mutta yleiset parhaat käytännöt ovat silti voimassa.
Projektin tikettien määritykset sekä _action flow_ pitäisi määritellä tuoteomistajan tai projektipäällikön toimesta.

## Vähimmäisvaatimukset

- [ ] Tuotettu ohjelmakoodi läpäisee testit
- [ ] Ohjelmakoodi rakentuu ilman virheitä
- [ ] Yksikkötestit on kirjoitettu ja ne toimivat
      * Yksikkötestien tulisi olla:
        * Selkeitä ja helppoja ymmärtää
        * Toimintavarmoja. Ne hajoavat jos ohjelmassa on bugi
        * Nopeita (hitaat testit ovat rasittavia suurissa määrissä)
- [ ] Ohjelmakoodi on dokumentoitu
      * Kun tehdään julkisia API toiminnallisuuksia. Ohjelmakoodin sisältö tulisi dokumentoida
      * Ohjelmakoodin selkeyttäminen, jos ohjelmakoodi on epäselvä
      * Selkeästi ja hyvin nimetty toiminallisuus ei tarvitse erikseen dokumentointia
- [ ] Muuttujien nimet kertovat selkeästi niiden käyttötarkoituksesta
- [ ] Tuotettu ohjelmakoodi vastaa odotettua toiminnallisuutta
      * Vastaa tiketissä annettuja määrittelyjä
      * Toimii halutuissa ympäristöissä
- [ ] Ohjelmakoodin laatu
      * Ohjelmakoodi on toteutettu käyttäen parhaita käytäntöjä (=best practices)
        * Parhaat käytännöt ovat yleensä määritelty itse ohjelmointikielessä, sovelluskehyksessä tai sovelluskirjastossa.
      * Toteutus noudattaa laadittua tyyliopasta
      * Projektikohtaiset _linter_ säännöt
        * Jos _linter_ sääntöjä ei ole määritelty, jokaisen projektin tulisi silti seurata jonkinlaisia ohjesääntöjä, jotta ohjelmakoodi pysyy yhtenäisenä
- [ ] Toiminallisuus on tarkistettu testaamalla sovellusta
- [ ] Jokaisella funktiolla ja luokalla tulisi olla yksi selkeä tarkoitus
      * Monimutkaiset tai pitkät funktio osuudet tulee jakaa pienempiin osiin
      * Jokainen uusi **if**, **loop**, **switch** ja **looginen ehtolause** lisäävät monimutkaisuutta
      * Monimutkaisuutta voidaan mitata tällä tavoin, kun jokainen "monimutkaisuus piste" summataan yhteen
