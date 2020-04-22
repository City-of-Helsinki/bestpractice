---
name: Open311
menu: APIs
route: /apis/open311
---


# Open311

The issue reporting API is used by applications for sending service requests to the City of Helsinki.

At the moment, the API is mostly used for sending service requests about broken parts of city infrastructure like street signs, potholes, etc. These kinds of service requests are typically handled by [the Public Works Department](http://www.hel.fi/www/hkr/en). However, the API is increasingly used for other types of feedback as well.

The API enables its clients to:

1.  Submit new service requests
2.  Query individual or multiple service requests and their descriptions and statuses
3.  List service request types and definitions of additional attributes

The Issue Reporting API is based on GeoReport API version 2, better known as the [Open311 specification](http://open311.org/). The interface is designed in such a way that any GeoReport v2 compatible client is able to use the interface. This interface is compliant with [CitySDK](http://www.citysdk.eu/) specific enhancements to Open311 and parameters specific to it are marked CitySDK specific.

Helsinki specific details
-------------------------

### API keys and testing

Client applications submitting new service requests to the feedback system will need an API key. None of the other methods require an API key.

The City of Helsinki has a separate environment and URL for testing developer applications ([test system](http://dev.hel.fi/open311-test/v1/discovery.json)) before connecting them to the production system (**https://asiointi.hel.fi/palautews/rest/v1/**). The API key developers use in the test environment is different than the one used in production. The standard developer workflow goes like this:

1.  The developer requests an API key for the test system.
2.  Using the test API key, the developer implements and tests their client against the test system.
3.  The developer requests an API key for the production system. After city personnel has verified that the client conforms to the API terms, the production API key is created and given to the developer. Reserve 1-2 weeks for the verification.
4.  The developer's application is deployed using the production system API key and is tested against the production system.

The use of API is subject to following terms: [Terms of Service](https://dev.hel.fi/apis/open311/terms-use-city-helsinki-feedback-system-api-interface/) /  [Käyttöehdot ja lisenssi](https://dev.hel.fi/apis/open311/helsingin-kaupungin-palautejarjestelman-api-rajapinnan-kayttoehdot/).

For test and production system API keys contact Timo Tuominen, timo.tuominen@hel.fi, +358 9 310 25495.

### Encoding and formats

UTF-8 is required everywhere. The API supports both XML and JSON.

### Language support

Finnish and English are supported. In practice, this means that the service request types ([GET Service List](https://dev.hel.fi/admin/pages/29/edit/#GET Service List)) can be queried by those languages.

API Methods
-----------

### GET Service List

Provides a list of acceptable service request types and their associated service codes.

-   URL address: https://asiointi.hel.fi/palautews/rest/v1/services.[format].
-   Example URL: https://asiointi.hel.fi/palautews/rest/v1/services.json
-   Requires API key: No
-   Method: GET

**Request Parameters:**

| Parameter name | Description | Required | Notes |
| --- | --- | --- | --- |
| **locale**

CitySDK specific

 | Preferred language | No |

Locales can be, for example, fi, fi_FI, en, en_GB or en_US. If no locale is given the default value is English.

 |

** Response parameters:**

| Parameter name | Description | Required | Notes |
| --- | --- | --- | --- |
| **service_code** | The unique identifier for the service request type | Yes |   |
| **service_name** | The human readable name of the service request type | Yes |   |
| **description** | A brief description of the service request type. | Yes |   |
| **metadata** |

Determines whether there are additional form fields for this service type.

-   true: This service request type requires additional metadata so the client will need to make a call to the [Service Definition](http://wiki.open311.org/GeoReport_v2.1_Draft#GET_Service_Definition) method.
-   false: No additional information is required and a call to the [Service Definition](http://wiki.open311.org/GeoReport_v2.1_Draft#GET_Service_Definition) method is not needed.

 | Yes | At the moment metadata is always set to false. |
| **type** |

realtime: The service request ID will be returned immediately after the service request is submitted.

 | Yes | At the moment, type is always set to realtime. |
| **keywords** | A comma separated list of tags or keywords to help users identify the request type. This can provide synonyms of the service_name and group. | Yes |   |
| **group** | A category to group this service type within. This provides a way to group several service request types under one category such as "sanitation" | Yes |   |

**Possible errors**

The numbers represent the HTTP status code returned for each error type:

-   400 - General Service Error (Any failure during create request processing, eg CRM is down. Client will need to notify us)

**Example request:**

<https://asiointi.hel.fi/palautews/rest/v1/services.json?locale=fi_FI>

**Example response:**

[
  {
    "service_code": "246",
    "service_name": "Roskaaminen",
    "description": "Ilmoita, jos havaitset suuria määriä roskia yleisillä alueilla, puistoissa tai metsissä.",
    "metadata": false,
    "type": "realtime",
    "keywords": "roska,jäte",
    "group": "Puhtaanapito"
   },
   {
    "service_code": "176",
    "service_name": "Töhryjen poisto",
    "description": "Ilmoita, jos paikkoja tai seiniä on töhritty.",
    "metadata": false,
    "type": "realtime",
    "keywords": "roska,jäte",
    "group": "Puhtaanapito"
    }
 ]

### GET Service Definition

Define attributes associated with a service code. At the moment, there are no attributes defined in Helsinki API and therefore no use for this method.

-   URL address: https://asiointi.hel.fi/palautews/rest/v1/services/[service code].[format].
-   Example URL: https://asiointi.hel.fi/palautews/rest/v1/services/246.json
-   Requires API key: No
-   Method: GET

**Request parameters**

| Parameter name | Description | Required | Notes |
| --- | --- | --- | --- |
| **service_code** | The unique identifier for the service request type. | Yes | The service_code is specified in the main URL path rather than an added query string parameter. |
| **locale**

CitySDK specific

 | Preferred language | No | Locales can be, for example, fi, fi_FI, en, en_GB or en_US. If no locale is given the default value is English. |

**Response parameters**

TODO

### POST Service Request

This method is used for sending service requests to the city's feedback system.

-   URL: https://asiointi.hel.fi/palautews/rest/v1/requests.[format]
-   Example URL: https://asiointi.hel.fi/palautews/rest/v1/requests.json
-   Posting formats: Content-Type application/x-www-form-urlencoded or multipart/form-data
-   Requires API key: YES
-   HTTP Method POST

**Request parameters:**

| Parameter name | Description | Required | Notes |
| --- | --- | --- | --- |
| **api_key** | Api key for submitting service requests | Yes |   |
| **service_code** | The unique identifier for the service request type | Yes |   |
| **description** | A full description of the service request. | Yes | This is free form text having min 10 and max 5,000 characters. This may contain line breaks, but not html or code.  |
|

**title**

CitySDK specific

 | Title of the service requests | No |\
 |
| **lat** | Latitude using the [(WGS84)](http://en.wikipedia.org/wiki/World_Geodetic_System) projection. | No |

Currently all service types require location, either lat/long or service_object_id.

 |
| **long** | Longitude using the [(WGS84)](http://en.wikipedia.org/wiki/World_Geodetic_System) projection. | No | Currently all service types require location, either lat/long or service_object_id. |
|

**service_object_type**

CitySDK specific

 | Describes the point of interest reference which is used for identifying the request object. | No | If service_object_id is included in the request, then service_object_type must be included. |
|

**service_object_id**

CitySDK specific

 | Describes the point of interest reference which is used for identifying the request object. | No | If service_object_id is included in the request, then service_object_type must be included. |
| **address_string** | Human readable address or description of the location. | No |   |
| **email** | The email address of the person submitting the request | No | If email address is given, service will notify the email address when service request is processed. |
| **first_name** | The given name of the person submitting the request | No |   |
| **last_name** | The family name of the person submitting the request | No |   |
| **phone** | The phone number of the person submitting the request | No |   |
| **media_url** | A URL to media associated with the request, e.g. an image | No | API supports the most typical media formats like jpg, png, gif,.. Note, that URL links must end with a correct filetype like ".jpg", e.g. http://pbs.twimg.com/media/Ay9wUStCEAEtoPC.jpg. Http and https URLs are supported. |
| **media** | Array of file uploads | No |

A client may POST multiple files as multipart/form-data. This is the equivalent of having multiple <input type="file" name="media[]" /> inputs. Subsequent calls for GET Service Requests should return the URL for this file via the media_urls field. See more at section [Uploading media](https://dev.hel.fi/admin/pages/29/edit/#Uploading media).

 |

**Response parameters:**

| Parameter name | Description | Required | Notes |
| --- | --- | --- | --- |
| **service_request_id** | The unique ID of the service request created | Yes |   |
| **service_notice** | The human readable name of the service request type | Yes | Currently empty string |

**Possible errors**

The numbers represent the HTTP status code returned for each error type:

-   404 - service_code or jurisdiction_id was not found (specified in error response)
-   400 - General Service Error. Any failure during create request processing, e.g. API service is down.

**Example request:**

POST /palautews/rest/v1/requests.json
Host: asiointi.hel.fi
Content-Type: application/x-www-form-urlencoded; charset=utf-8

api_key=xyz&service_code=001&lat=37.76524078&long=122.4212043&address_string=Unioninkatu 25
&email=jaakko.rajaniemi%40hel.fi&first_name=Jaakko&last_name=Rajaniemi&phone=111111111&
description=Large+sinkhole+is+destroying+the+street &media_url=http%3A%2F%2Ffarm3.static.flickr.com%2F2002%2F225ed4760.jpg

**Example response:**

[
  {
    "service_request_id":"8fmht6g1470b3qk8pthg",
    "service_notice":""
  }
]

### GET Service Requests

This method is used to query the current status of multiple requests.

-   URL: https://[API endpoint]/requests.[format]
-   Example URL: https://asiointi.hel.fi/palautews/rest/v1/requests.xml?start_date=2010-05-24T00:00:00Z&end_date=2010-06-24T00:00:00Z&status=open
-   HTTP Method GET

**Request Parameters:**

| Parameter names | Description | Required | Notes |
| --- | --- | --- | --- |
| **service_request_id** | To call multiple Service Requests at once, multiple service_request_id can be declared; comma delimited. | No | This overrides all other arguments. |
| **service_code** | Specify the service type by calling the unique ID of the service_code. | No | This defaults to all service codes when not declared; can be declared multiple times, comma delimited |
| **start_date** | Earliest requested_datetime to include in the search. When provided with end_date, allows one to search for requests which have a requested_datetime that matches a given range, but may not span more than 90 days. | No | Must use W3C format, e.g 2010-01-01T00:00:00Z. |
| **end_date** | Latest requested_datetime to include in the search. When provided with start_date, allows one to search for requests which have a requested_datetime that matches a given range, but may not span more than 90 days. | No | Must use W3C format, e.g 2010-01-01T00:00:00Z. |
| **status** | Allows one to search for requests which have a specific status. This defaults to all statuses; can be declared multiple times, comma delimited. | No |   |
| **extensions**

CitySDK specific

 | The endpoint provides supplemental details about service requests that are in addition to the ones described in the standard specification. These data are nested in the 'extended_attributes' parameter in the Service Request response. In order to retrieve the new supplemental details, add the query parameter "extensions=true" to the request | No | See chapter on [Extensions](https://dev.hel.fi/admin/pages/29/edit/#Extensions). |
| **service_object_type**

CitySDK specific

 | Describes the point of interest reference which is used for identifying the request object. | No | See chapter on [Service Objects](https://dev.hel.fi/admin/pages/29/edit/#Service Objects). |
| **service_object_id**

CitySDK specific

 | Describes the ID of the service object | No | If service_object_id is included in the request, then service_object_type must be included. |
| **lat**

CitySDK specific

 | Latitude | No | Location based search if lat, long and radius are given. |
| **long**

CitySDK specific

 | Longitude | No | Location based search if lat, long and radius are given. |
| **radius**

CitySDK specific

 | Radius (meters) in which location based search performed. | No | Location based search if lat, long and radius are given. |
| **updated_after**

CitySDK specific

 | Earliest updated_datetime to include in search. Allows one to search for requests which have an updated_datetime between the updated_after time and updated_before time (or now). This is useful for downloading a changeset that includes changes to older requests or to just query very recent changes. | No | Must use w3 format, eg 2010-01-01T00:00:00Z. |
| **updated_before**

CitySDK specific

 | Latest updated_datetime to include in search. Allows one to search for requests which have an updated_datetime between the updated_after time and the updated_before time. This is useful for downloading a changeset that includes changes to older requests or to just query very recent changes.  | No | When not specified (updated_after is used without updated_before) then updated_before is assumed to be now. Must use w3 format, eg 2010-01-01T00:00:00Z. |

**Response Parameters:**

| Parameter names | Description | Required | Notes |
| --- | --- | --- | --- |
| **service_request_id** | The unique ID of the service request created. | Yes |   |
| **status_notes** |

Explanation of why the status was changed to the current state or more details on the current status than is conveyed with status alone

 | Yes |   |
| **status** |

The current status of the service request.

-   open: it has been reported.
-   closed: it has been resolved.

 | Yes |   |
| **service_code** | The unique identifier for the service request type | Yes |   |
| **service_name** | The human readable name of the service request type | No |   |
| **description** | A full description of the request or report submitted. | Yes |   |
| **agency_responsible** | The agency responsible for fulfilling or otherwise addressing the service request. | No |   |
| **service_notice** | Information about the action expected to fulfill the request or otherwise address the information reported. | No | Empty string |
| **requested_datetime** | The date and time when the service request was made. | No | Must use W3C format, e.g 2010-01-01T00:00:00Z. |
| **updated_datetime** | The date and time when the service request was last modified. For requests with status=closed, this will be the date the request was closed. | No | Must use W3C format, e.g 2010-01-01T00:00:00Z. |
| **expected_datetime** | The date and time when the service request can be expected to be fulfilled. This may be based on a service-specific service level agreement. | No | No available. Must use W3C format, e.g 2010-01-01T00:00:00Z. |
| **address** | Human readable address or description of location. | No |   |
| **lat** | latitude using the [(WGS84)](http://en.wikipedia.org/wiki/World_Geodetic_System) projection. | Yes | Currently all service types require location, either lat/long or service_object_id. |
| **long** | longitude using the [(WGS84)](http://en.wikipedia.org/wiki/World_Geodetic_System) projection. | Yes | Currently all service types require location, either lat/long or service_object_id. |
| **media_url** | A URL to media associated with the request, eg an image. | No | Contains only one of these elements. |
| **service_object_type**

CitySDK specific

 |

Nested inside the extended_attributes field (extended_attributes.service_object_type). Describes the point of interest reference which is used for identifying the request object.

 | No | See chapter on [Service Objects. ](https://dev.hel.fi/admin/pages/29/edit/#Service Objects) |
| **service_object_id**

CitySDK specific

 | Nested inside the extended_attributes field (extended_attributes.service_object_id). Describes the ID of the service object. | No | If service_object_id is included in the request, then service_object_type must be included. |
| **detailed_status**

CitySDK specific

 | Nested inside the extended_attributes field (extended_attributes.detailed_status). Describes the detailed status of the service request. | No | This can contain multiple status values; comma delimited. See more on section [Detailed status of service requests](https://dev.hel.fi/admin/pages/29/edit/#Detailed status of service requests). |
| **media_urls**

CitySDK specific

 | Nested inside the extended_attributes field (extended_attributes.media_urls). Contains URLs to media associated with the request. | No | The values is array of strings. |

**Response Volume**

The default query limit is a span of 90 days or first 200 requests returned, whichever is smallest.

**Possible errors**

The numbers represent the HTTP status code returned for each error type:

-   404 - service_code or jurisdiction_id was not found (specified in error response)
-   400 - General Service Error. Any failure during create request processing, e.g. API service is down.

**Example Request**

<https://asiointi.hel.fi/palautews/rest/v1/requests.json?start_date=2013-04-24T00:00:00Z&end_date=2013-05-24T00:00:00Z>

**Example Response**

[
   {
      "service_request_id": "8fmht6g1470b3qk8pthg",
      "service_code": "171",
      "description": "Itäkeskuksen uimahallin edessä kadulla on monttuja ajotiessä.",
      "service_notice": "",
      "requested_datetime": "2013-05-02T11:02:07+03:00",
      "updated_datetime": "2013-05-02T15:32:29+03:00",
      "status": "open",
      "status_notes": "",
      "agency_responsible": "",
      "service_name": "",
      "address": "",
      "address_id": "",
      "zip_code": "",
      "lat": "60.21263634325148",
      "long": "25.077090230550745"
    },
{
      "service_request_id": "1ju4p6v3e04pcpobfv7u",
      "service_code": "178",
      "description": "Tilapäiset merkit voisi ihan hyvin sijoittaa Lautatarhankatu ja Hämeentie kauppakeskus Arabian kohdalla.",
      "service_notice": "",
      "requested_datetime": "2013-04-30T10:52:55+03:00",
      "updated_datetime": "2013-05-01T14:35:01+03:00",
      "status": "closed",
      "status_notes": "Kiitos ilmoituksestanne. Olen välittänyt asian alueen tarkastajalle, joka valvoo tilapäisiä liikennejärjestelyjä ja kaivauksia.",
      "agency_responsible": "",
      "service_name": "",
      "address": "",
      "address_id": "",
      "zip_code": "",
      "lat": "60.189587726063884",
      "long": "24.966438613848045"
    }
]

### GET Service Request

This method is used to query the current status of multiple requests.

-   URL: https://asiointi.hel.fi/palautews/rest/v1/requests/[service_request_id].[format]
-   Example URL: https://asiointi.hel.fi/palautews/rest/v1/requests/1ju4p6v3e04pcpobfv7u.json
-   HTTP Method GET

**Request Parameters:**

| Parameter names | Description | Required | Notes |
| --- | --- | --- | --- |
| **service_request_id** | Unique id of the service request | Yes | The service_request_id is specified in the main URL path rather than an added query string parameter. |
| **extensions**

CitySDK specific

 | Helsinki endpoint provides supplemental details about service requests that are in addition to the ones described in the Open311 specification. These data are nested in the 'extended_attributes' field in the response. In order to retrieve the new supplemental details, add the query parameter "extensions=true" to any request. | No |

Options: **true**, **false**. Defaults to false. See more at the [Extensions](https://dev.hel.fi/admin/pages/29/edit/#Extensions)chapter.

 |

**Response Parameters:**

| Parameter names | Description | Required | Notes |
| --- | --- | --- | --- |
| **service_request_id** | Unique id of the service request | Yes | The service_request_id is specified in the main URL path rather than an added query string parameter. |
| **status_notes** | Explanation of why the status was changed to the current state or more details on the current status than conveyed with status alone. | Yes |   |
| **service_name** | The human readable name of the service request type | Yes | Empty string |
| **service_code** | The unique identifier for the service request type | Yes |   |
| **status** |

The current status of the service request.

-   open: it has been reported.
-   closed: it has been resolved.

 | Yes |   |
| **description** | A full description of the request or report submitted. | Yes |   |
| **agency_responsible** | The agency responsible for fulfilling or otherwise addressing the service request. | No | Empty string |
| **service_notice** | Information about the action expected to fulfill the request or otherwise address the information reported. | No | Empty string |
| **requested_datetime** | The date and time when the service request was made. | Yes | Must use W3C format, e.g 2010-01-01T00:00:00Z. |
| **updated_datetime** | The date and time when the service request was last modified. For requests with status=closed, this will be the date the request was closed. | Yes | Must use the W3C format, e.g 2010-01-01T00:00:00Z. |
| **expected_datetime** | The date and time when the service request can be expected to be fulfilled. This may be based on a service-specific service level agreement. | No | Not available. Must use the W3C format, e.g 2010-01-01T00:00:00Z. |
| **address** | Human readable address or description of location. | No |   |
| **lat** | latitude using the [(WGS84)](http://en.wikipedia.org/wiki/World_Geodetic_System) projection. | No | Currently all service types require location, either lat/long or service_object_id. |
| **long** | longitude using the [(WGS84)](http://en.wikipedia.org/wiki/World_Geodetic_System) projection. | No | Currently all service types require location, either lat/long or service_object_id. |
| **media_url** | A URL to media associated with the request, for example an image. | No | May contain more than one of these elements. [This feature is coming soon.](http://dev.hel.fi/?q=node/34) |
| **service_object_type**

CitySDK specific

 |

Nested inside the extended_attributes field (extended_attributes.service_object_type). Describes the point of interest reference which is used for identifying the request object.

 | No | See chapter on [Service Objects. ](https://dev.hel.fi/admin/pages/29/edit/#Service Objects) |
| **service_object_id**

CitySDK specific

 | Nested inside the extended_attributes field (extended_attributes.service_object_id) describes the ID of the object e.g. public toiled in Helsinki Esplanade park  ID = 10844. | No |

If service_object_id is included, then service_object_type must be also included. See chapter on [Service Objects.](https://dev.hel.fi/admin/pages/29/edit/#Service Objects)

 |
| **detailed_status**

CitySDK specific

 | Nested in extended_attributes parameters (extended_attributes. detailed_status) describes detailed status of the service request. | No | This can contain multiple status values; comma delimited. See more on [Detailed status of service requests](https://dev.hel.fi/admin/pages/29/edit/#Detailed status of service requests) chapter |
| **media_urls**

CitySDK specific

 | Nested inside the extended_attributes field (extended_attributes.media_urls). Contains URLs to media associated with the request. | No | The values is an array of strings. |

**Possible errors**

The numbers represent the HTTP status code returned for each error type:

-   404 - service_code or jurisdiction_id was not found (specified in error response)
-   400 - General Service Error. Any failure during create request processing, e.g. API service is down.

**Example Request**

<https://asiointi.hel.fi/palautews/rest/v1/requests/8fmht6g1470b3qk8pthg.json?extensions=true>

**Example Response**

[
   {
    "service_request_id": "8fmht6g1470b3qk8pthg",
    "service_code": "171",
    "description": "Itäkeskuksen uimahallin edessä kadulla on monttuja ajotiessä.

Lisätietoa: http://metro.fi/paakaupunkiseutu/fiksaus/monttu_tiessa.4/",
    "requested_datetime": "2013-05-02T11:02:07+03:00",
    "updated_datetime": "2013-05-15T08:55:09+03:00",
    "status": "closed",
    "status_notes": "Kiitos ilmoituksestanne. Olemme välittäneet korjauspyynnön alueen katujen kunnossapitoon.

Terveisin
Rakennusviraston asiakaspalvelu
",
    "lat": "60.21263634325148",
    "long": "25.077090230550745",
    "extended_attributes": {
        "title": "Monttu tiessä",
        "detailed_status": "PROCESSED"
    }
  }
]

### Error messages

| Parameter name | Description | Required | Notes |
| --- | --- | --- | --- |
| **code** | The error code representing the type of error. In most cases, this should match the HTTP status code returned in the HTTP header. | Yes |   |
| **description** | A human readable description of the error that occurred. This is meant to be seen by the end user. | Yes |   |

**General error:**

-   403 -- Missing or Invalid API Key (specify in error message)
-   400 -- The URL request is invalid or service is not running or reachable. Client should notify us after checking URL

**Example Error**

HTTP/1.1 403 Forbidden

[
  {
    "code":403,
    "description":"Missing or invalid API key.",
  }
]

Moderation of Service Requests
------------------------------

When a service request is posted to the city's issue reporting system, it is not yet shown publicly in the API's service request listings. Each service request is pre-moderated and only after publishing is the service request visible through the API's listing views.

Before the service request is moderated, the service request details are visible and can be queried by using the service_request_id.

Service Objects (service_object_type, service_object_id)
--------------------------------------------------------

A service request may contain a reference to a service point using the field service_object_id. These represent service points in the [Helsinki metropolitan area service map](http://servicemap.hel.fi/).

Public toilet in Helsinki service map:

-   service_object_id=[10844](http://www.hel.fi/palvelukarttaws/rest/v2/unit/10844)
-   service_object_type=http://www.hel.fi/servicemap/v2

Extensions (extended_attributes)
--------------------------------

A set of Helsinki specific extensions are carried nested inside extended_attributes parameter. In order to retrieve the new extended attributes in the response, add the query parameter "extensions=true" to the request. The list of parameters are:

-   **title**, feedback system's human readable title for the service request. The value is same as the title parameter given in [POST Service Request](http://dev.hel.fi/apis/issuereporting#POST Service Request) or if not present the title is shortened from description text.
-   **service_object_id**, see more on [Service Objects](https://dev.hel.fi/admin/pages/29/edit/#Service Objects) chapter.
-   **service_object_type**, see more on [Service Objects](https://dev.hel.fi/admin/pages/29/edit/#Service Objects) chapter.
-   **detailed_status**, see more at the [Detailed status of service requests](https://dev.hel.fi/admin/pages/29/edit/#Detailed status of service requests) chapter.

**

{
"extended_attributes": {
    "service_object_id": "10844",
    "title": "Broken toilet",
    "service_object_type": "http://www.hel.fi/servicemap/v2",
    "detailed_status": "PROCESSED"
}

Detailed status of service requests (detailed_status)
-----------------------------------------------------

The status of each service request is transferred in the status parameter. The parameter can have only values "open" or "closed". The parameter detailed_status is a comma separated list of the detailed status values of the service request.

The set of detailed status values is:

-   RECEIVED -- the service request has been received but nothing has been done it. The value of the status field is "open".
-   IN_PROCESS - the service request has been received and its handling has been started. The value of the status field is "open".
-   PROCESSED - the service request has been resolved. The value of the status field is "closed".
-   ARCHIVED - the service request has been resolved and archived. The value of the status field is "closed". (Not used in Helsinki)
-   REJECTED - the service request has been rejected. The value of the status field is "closed". (Not used in Helsinki)

If a service request is forwarded to the Public Works Department's Aspa system, its Aspa status is included in the detailed_status parameter. It can have following values:

-   PUBLIC_WORKS_NEW -- the service request has been received but nothing has been done to it.
-   PUBLIC_WORKS_IN_PROGRESS - the service request is being handled by the Public Works Department.
-   PUBLIC_WORKS_COMPLETED - the service request has been resolved.
-   PUBLIC_WORKS_COMPLETED_SCHEDULED_LATER - the service request has been resolved and scheduled to be completed later.
-   PUBLIC_WORKS_COMPLETED_REQUIRES_NO_ACTION - the service request requires no action.
-   PUBLIC_WORKS_INTERRUPTED - the service request has been interrupted and no action has been taken.

Example response:

{
"extended_attributes": {
    "detailed_status": "IN_PROCESS,PUBLIC_WORKS_NEW"
}

Uploading media
---------------

Uploading of media files like images is supported in two ways. POSTing a Service Request can reference an image with the media_url parameter or a media file can be uploaded directly as multipart/form-data. More than one image is supported. If applications send more than one image, special care should be taken on the application side because of the long upload time. It is also possible to upload using the media_url reference and directly multipart/form-data in one shot.

**Example of uploading image as multipart/form-data**

POST /dev/v2/requests.json
Host: api.hel.fi
Content-Type: multipart/form-data; boundary=AaB03x

--AaB03x
Content-Disposition: form-data; name="api_key"

xyzfskldlkfh823y49823
--AaB03x
Content-Disposition: form-data; name="service_code "

001
--AaB03x
Content-Disposition: form-data; name="lat"

60.168569
--AaB03x
Content-Disposition: form-data; name="lon"

24.950627
--AaB03x
Content-Disposition: form-data; name="description"

There is a huge pothole in her
--AaB03x
Content-Disposition: form-data; name="first_name "

John
--AaB03x

Content-Disposition: form-data; name="last_name "

Smith
--AaB03x
Content-Disposition: form-data; name="phone"

0503391387
--AaB03x
Content-Disposition: form-data; name="email"

john.smith@gmail.com
--AaB03x
Content-Disposition: form-data; name="media[]"; filename="image.gif"
Content-Type: image/gif
Content-Transfer-Encoding: binary

...contents of image.gif...
--AaB03x

**Example response**

[
    {
        "service_request_id": "2g8rlg8ricmctfo21agm",
        "service_notice": ""
    }
]

Applications using the API
--------------------------

These applications use the API already:

-   [SeeClickFix](http://seeclickfix.com/)
-   Metron [Pitäiskö fiksata](http://metro.fi/paakaupunkiseutu/fiksaus/) - palvelu
-   [GeoReporter](https://itunes.apple.com/us/app/georeporter/id487304759) iPhone Application
-   Mobile Trouble Shooter [Windows](http://www.windowsphone.com/en-us/store/app/mts/d941bf31-f5b6-4bb1-bf06-a27b1987bbea) and [Android](https://play.google.com/store/apps/details?id=com.smarts.pta&hl=en) phone applications
-   [Fisuverkko](http://fisuverkko.fi/) - Kalasatama neighborhood website
-   [Helppo liikkua](http://helppoliikkua.fi/) - accessibility website

Frequently asked questions
--------------------------

[Answers to Frequently Asked Questions](https://dev.hel.fi/apis/open311/open311-issue-reporting-api-faq/)**
