---
name: Respa
menu: APIs
route: /apis/respa
---


# Respa API

An API for making resource reservations, such as booking a music studio, meeting room or a 3D printer. Respa is a service that provide citizens with easier access to public spaces and other public resources. Respa works as a booking application that enables users to find and reserve public resources the city has to offer which can include everything from meeting rooms to 3D-printers.

The Respa API is a citywide reservation booking system backend, allowing for easy searching and filtering of resources based on resource type, purpose, location and availability. To make and change reservations, OAuth2 authentication is provided for both city employees and citizens who wish to reserve a room through a frontend application.

* API location: [api.hel.fi/respa/v1](https://api.hel.fi/respa/v1)
* API location (test): [respa.koe.hel.ninja/v1](https://respa.koe.hel.ninja/v1)

## Authentication

Authentication happens primarily through Tunnistamo. To obtain an API key for testing purposes, contact us on [Gitter](https://gitter.im/City-of-Helsinki/heldev).

## Documentation

import APIDoc from "../../src/components/apidoc";

<APIDoc doc="https://raw.githubusercontent.com/City-of-Helsinki/respa/master/openapi.yaml" />
