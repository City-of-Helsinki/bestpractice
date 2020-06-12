---
name: Service Map
menu: APIs
route: /apis/service-map-backend-api
---


# Service Map

Provides service point data with advanced filtering for interactive service point applications.

The Service Map Backend API is the RESTful data source which provides data about services and service points in the Helsinki Metropolitan area, as well as detailed accessibility information on select service points. This API has been designed to be used live in interactive applications. It also includes features such as Helsinki administrative divisions (eg. neighborhoods) and geocoding, including reverse geocoding.

* API location: [api.hel.fi/servicemap/v2/](https://api.hel.fi/servicemap/v2/)

## Documentation

import APIDoc from "../../src/components/apidoc";

<APIDoc doc="https://raw.githubusercontent.com/City-of-Helsinki/smbackend/master/specification.swagger2.0.yaml" />
