---
name: Linked Events
menu: APIs
route: /apis/linkedevents
---

# Linked Events

Provides data about events around the City of Helsinki

Linked Events provides categorized data on events and places for the City of Helsinki. It serves as the common event database for all Helsinki city divisions and the [hel.fi web services](http://www.hel.fi/www/helsinki/fi/tapahtumakalenteri).

In the API, you can search data by date or location as well as bounding box. The API provides data in JSON-LD format.

* API location: [api.hel.fi/linkedevents/v1/](https://api.hel.fi/linkedevents/v1/)

## Data license

Event data is licensed using CC BY 4.0 license. [FI](http://creativecommons.org/licenses/by/4.0/deed.fi) | [SV](http://creativecommons.org/licenses/by/4.0/deed.sv) | [EN](http://creativecommons.org/licenses/by/4.0/deed.en) However, some images within the events may have a license "event_only" listed in the API, in which case the image is subject to a slightly more [strict license](https://api.hel.fi/linkedevents/v1).

## Documentation

[The browsable API](https://api.hel.fi/linkedevents/v1/) contains usage examples if you choose to delve right in. The full API documentation is provided below.

import APIDoc from "../../src/components/apidoc";

<APIDoc doc="https://raw.githubusercontent.com/City-of-Helsinki/api-linked-events/master/linked-events.swagger.yaml" />
