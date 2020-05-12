---
name: Common Django libraries and components at the City of Helsinki
menu: Resources
route: /django-libraries
---

# Common Django libraries and components at the City of Helsinki

In general, new projects tend to couple to some City of Helsinki APIs, most importantly *authentication*,
*geospatial data* and *city organization*. For these purposes, we have existing Django libraries common
to several projects. You are encouraged to use these in your own project and contribute to them to suit
your own needs and help others using the same libraries.

For more general technology and library choices, please read [technology choices](/technology-choices).

## Authentication

The [django-helusers](https://github.com/City-of-Helsinki/django-helusers) app will integrate Django user
model with the Helsinki SSO [Tunnistamo](/authentication), creating/identifying Django users automatically when the
SSO gives the green light, with the necessary contact information and e.g. AD groups if your application
needs them for user permissions.

## Geospatial data

The [django-munigeo](https://github.com/City-of-Helsinki/django-munigeo) app will populate your PostGIS
database with all manner of location data that you may need in geographical queries with Geodjango, such
as Finnish municipalities, Helsinki neighborhoods, districts and their boundaries, locations of street
addresses in the Helsinki region, and various other districts and boundaries used by various parts of the
city bureaucracy.

Most of the datasets used by django-munigeo are found in the [Helsinki Region Infoshare](https://www.hri.fi)
open data portal, which has many more datasets available. For more detailed information on our available
geospatial and map data, please read [map layers](/maps). If the dataset you need does not have an importer
in django-munigeo yet, please implement the import and create a PR in django-munigeo!

## City organization

The [django-orghierarchy](https://github.com/City-of-Helsinki/django-orghierarchy) app provides support
for hierarchical user management in a multilevel organization hierarchy. That way, you can have regular and
admin users on many levels in your app, from the city and division level all the way down to a users in a 
single city unit providing a specific service.

Also provided is an importer to import the existing hierarchy into your Django app. So, if your application
is expected to have lots of users around the city hierarchy on many different levels, this will help your
product owner to allocate each user to the correct location in the city organization. An example of how
the hierarchy is used in user permission management is e.g. [Linkedevents](https://github.com/City-of-Helsinki/linkedevents).
