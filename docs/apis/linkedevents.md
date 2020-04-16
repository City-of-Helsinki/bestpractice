---
name: Linked Events
menu: APIs
route: /apis/linkedevents
---

# Linked Events

Provides data about events around the City of Helsinki

API location: https://api.hel.fi/linkedevents/v1/

Linked Events provides categorized data on events and places for the City of Helsinki. It serves as the common event database for all Helsinki city divisions and the hel.fi web services.

[Read more »](https://dev.hel.fi/projects/linked-events/)

In the API, you can search data by date or location as well as bounding box. The API provides data in JSON-LD format.

## Data license

Event data is licensed using CC BY 4.0 license. FI | SV | EN However, some images within the events may have a license "event_only" listed in the API, in which case the image is subject to a slightly more strict license.

## Documentation

The browsable API contains usage examples if you choose to delve right in. The full API documentation is provided below.

import APIDoc from "../../src/components/apidoc";

<APIDoc doc="https://raw.githubusercontent.com/City-of-Helsinki/api-linked-events/master/linked-events.swagger.yaml" />
