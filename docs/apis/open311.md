---
name: Open311
menu: APIs
route: /apis/open311
---


# Open311

The issue reporting API is used by applications for sending service requests to the City of Helsinki.

At the moment, the API is mostly used for sending service requests about broken parts of city infrastructure like street signs, potholes, etc. These kinds of service requests are typically handled by [the Urban Environment Division](https://www.hel.fi/kaupunkiymparisto/en/). However, the API is increasingly used for other types of feedback as well.

The API enables its clients to:

1.  Submit new service requests
2.  Query individual or multiple service requests and their descriptions and statuses
3.  List service request types and definitions of additional attributes

The Issue Reporting API is based on GeoReport API version 2, better known as the [Open311 specification](http://open311.org/). The interface is designed in such a way that any GeoReport v2 compatible client is able to use the interface. This interface is compliant with [CitySDK](http://www.citysdk.eu/) specific enhancements to Open311 and parameters specific to it are marked `CitySDK specific`.

* API location: [asiointi.hel.fi/palautews/rest/v1/discovery.json](https://asiointi.hel.fi/palautews/rest/v1/discovery.json)
* API location (test): [dev.hel.fi/open311-test/v1/discovery.json](http://dev.hel.fi/open311-test/v1/discovery.json)

## API keys and testing

Client applications submitting new service requests to the feedback system will need an API key. None of the other methods require an API key.

The City of Helsinki has a separate [test environment](http://dev.hel.fi/open311-test/v1/discovery.json) for testing developer applications before connecting them to the [production system](https://asiointi.hel.fi/palautews/rest/v1/discovery.json). The API key developers use in the test environment is different than the one used in production. The standard developer workflow goes like this:

1.  The developer requests an API key for the test system.
2.  Using the test API key, the developer implements and tests their client against the test system.
3.  The developer requests an API key for the production system. After city personnel has verified that the client conforms to the API terms, the production API key is created and given to the developer. Reserve 1-2 weeks for the verification.
4.  The developer's application is deployed using the production system API key and is tested against the production system.

For test and production system API keys [contact us](https://www.hel.fi/helsinki/en/administration/participate/feedback).

## Terms of service and licence

### The terms of use of the City of Helsinki Feedback system API interface

#### Description of the Service

The issue reporting feedback system (hereinafter ’’Feedback system’’) and the related API interface (hereinafter ’’API interface’’) will be provided by the City of Helsinki. The feedback system enables external applications (hereinafter ‘’External applications’’) to give feedback to the City of Helsinki as well as to seek feedback (hereinafter ‘’Feedback”) filed in the Feedback system.

The API interface to be provided is exploitable on the conditions hereinafter defined. 

#### The application process of access and API key

Access to the API interface of the Feedback system can be gained once the functionality of the use of the API interface in a testing environment has been tested and approved by the City. After this, access to the actual API key (hereinafter ‘’API key’’) to the Feedback system and the API interface is available once the applicant has approved the terms of use of the Feedback system API interface.

#### The terms of use of the City of Helsinki Feedback system API interface

The use of the interface is being monitored and if an application burdens too much, the City is entitled to restrict the use or withdraw the rights of use from an API key holder.

The City monitors the use of the interface and can publish application-specific statistical data on the use of the interface.

When Feedback is relayed in the Feedback system through external applications, all rights (including the right to further assignment and adaptation) to the contents of the Feedback are ceded to the City of Helsinki. The City of Helsinki grants an extensive right to use the contents of the Feedback system (the Feedback proper and the related answers) in accordance with the Feedback interface license here below.

The goal is that Feedback the City relayed through external applications be only on themes that the City has specified in the definition of feedback types.

Feedback addressed to the City and relayed through an external application must not be edited in a manner altering its meaning.

The unintentional or intentional publication of the API key or its dissemination to third parties is regarded as a breach of contract. 

#### Violation of the terms of use

The holder of an API key agrees to comply with these terms of use. In case the City of Helsinki considers that the terms of use have been violated, this can result in the immediate withdrawal of the rights of use and closing of the API key. 

#### Limitation of liability

The API interface is at the disposal of the API key holders in the condition it is, and the City of Helsinki will not provide any guarantee of performance.

Under no circumstances is the City of Helsinki responsible for any damage or inconvenience caused by the interface or resulting from the use thereof.

#### Amending the terms of use

The City reserves itself the right to make amendments in the terms of use. When possible, the API key holders will be notified of possible amendments in advance by e-mail.

#### Other terms

The law applicable to these terms of use and the use of the Service is Finnish law. Any dispute arising from this present context will be settled in Helsinki District Court.

#### The requirements set by the terms of use for applications exploiting the interface and the terms of use of applications

The following terms to the feedback giver shall be indicated in an external application:

‘’The feedback you give may be published on the City of Helsinki Internet pages and/or in some other media. Do not divulge any information under the privacy protection, such as a person’s name, social security number etc. Your feedback may be left unpublished or it may be edited prior to publishing.

Should your feedback contain a photo or a video, it must be taken by yourself. If identifiable persons appear on your photo/video, you need to have their permission to publish the material. By attaching a photo/video to you feedback you affirm that you have the above mentioned permission to publish the material.

By attaching a photo, video or other copyright protected material to your feedback, you assign your copyright and other rights to the content (incl. the right of further assignment and adaptation) to the City of Helsinki.’’

##### The License Covering the Feedback System Interface

1. By this license, the City of Helsinki gives the Licensee (a person using licensed material in accordance with this license) the permanent right to copy, disseminate, edit, combine and otherwise use the licensed material worldwide, free-of-charge and non-exclusively, on the conditions indicated in Items 2 - 4. The licensed material can be used for both commercial and non-commercial purposes.
2. The original copyright information shall be indicated as follows: © City of Helsinki, [date of material], e.g. © City of Helsinki, 5.2.2013.
3. Should the Licensor so require the copyright information must be deleted.
4. The copyright information related to licensed material shall not be declared in a manner indicating that the City of Helsinki sponsor the user of the licensed material or the usage thereof in any way.

### Helsingin kaupungin Palautejärjestelmän API rajapinnan käyttöehdot

#### Palvelun kuvaus

Palautejärjestelmän (jäljempänä ”Palautejärjestelmä”) ja siihen liittyvän API rajapinnan (jäljempänä ”API rajapinta”) tarjoaa Helsingin kaupunki. Palautejärjestelmä avulla on ulkoisten sovellusten (jäljempänä ”ulkoisten sovellusten”) mahdollista lähettää palautetta Helsingin kaupungille ja hakea kaupungin Palautejärjestelmään lähetettyä palautetta (jäljempänä ”palaute”). Kaupunki määrittää minkälaista palautetta se on valmis ottamaan vastaan API rajapinnalla erikseen määriteltävässä API rajapinnan palautetyyppikuvauksessa (jäljempänä ”palautetyypit”).

Tarjottava API rajapinta on jäljempänä määritellyin ehdoin hyödynnettävissä.

#### Käyttöoikeuden ja API-avaimen hakuprosessi

Käyttöoikeuden Palautejärjestelmän API rajapintaan saa, kun on ensin testannut ja hyväksyttänyt kaupungilla sovelluksen API rajapinnan käytön toimivuuden testiympäristössä. Tämän jälkeen varsinaisen API avaimen (jäljempänä ”API avain”) tuotantoympäristön Palautejärjestelmään ja API rajapintaan saa, kun hyväksyy nämä Palautejärjestelmän API rajapinnan  käyttöehdot.

#### Helsingin kaupungin Palautejärjestelmän API rajapinnan käyttöehdot

Rajapinnan käyttöä seurataan ja jos sovellus kuormittaa rajapintaa liiallisissa määrin, kaupungilla on oikeus rajoittaa käyttöä tai poistaa API avaimen haltijalta rajapinnan käyttöoikeudet.

Kaupunki seuraa rajapinnan käyttöä ja voi julkaista sovelluskohtaista tilastotietoa rajapinnan käytöstä.

Lähettäessään palautetta Palautejärjestelmään ulkoiset sovellukset  luovuttavat kaikki oikeudet (mukaan lukien edelleenluovutus- ja muunteluoikeuden) palautteen sisältöön Helsingin kaupungille. Helsingin kaupunki antaa jäljempänä olevan Palautejärjestelmän rajapinnan lisenssin mukaisen laajan käyttöoikeuden Palautejärjestelmän tietojen (palautteet ja niihin annetut vastaukset) käyttöön.  

Ulkoiset sovellukset pyrkivät lähettämään kaupungille palautetta ainoastaan aiheista, joita kaupunki on määritellyt palautetyyppien määrittelyssä.

Ulkoinen sovellus ei saa muokata kaupungille kohdistettua palautetta niin, että sen merkitys muuttuu.

API avaimen tahaton tai tahallinen julkaiseminen tai levittäminen muille nähdään sopimusrikkomuksena.

#### Käyttöehtojen rikkominen

API-avaimen haltija sitoutuu noudattamaan näitä käyttöehtoja. Jos Helsingin kaupunki katsoo käyttöehtoja rikottaneen, se voi johtaa rajapinnan käyttöoikeuksien välittömään päättymiseen ja API-avaimen sulkemiseen.

#### Vastuunrajoitus

API rajapinta on API-avaimen haltijoiden käytössä siinä kunnossa kuin on eikä Helsingin kaupunki anna sen toiminnasta mitään takuita.

Helsingin kaupunki ei ole missään tilanteessa vastuussa mistään rajapinnan käyttöön liittyvästä tai siitä johtuvasta vahingosta tai haitasta.

#### Käyttöehtojen muuttaminen

Kaupunki pidättää itsellään oikeuden tehdä muutoksia käyttöehtoihin. Muutoksista pyritään tiedottamaan API-avainten haltijoille ennakkoon. Muutoksista tiedotetaan API-avaimen anomisen yhteydessä annettuun sähköpostiosoitteeseen.

#### Muut ehdot

Näihin käyttöehtoihin ja Palvelun käyttöön sovelletaan Suomen lakia. Mahdolliset erimielisyydet ratkaistaan Helsingin käräjäoikeudessa.

#### Käyttöehtojen asettamat vaatimukset rajapintaa hyödyntäville sovelluksille ja sovellusten käyttöehdoille

Ulkoisen sovelluksen tulee ilmoittaa seuraavat ehdot palautteen antajalle (lainausmerkeissä oleva sisältö):

“Antamasi palaute voidaan julkaista Helsingin kaupungin internetsivuilla ja/tai muissa medioissa. Älä sisällytä palautteeseesi yksityisyyden suojan alaista tietoa, kuten henkilön nimiä, henkilötunnuksia tms. Palaute voidaan jättää julkaisematta tai sitä voidaan muokata ennen julkaisua.

Jos palautteeseesi sisältyy valokuva tai video, sen täytyy olla sinun ottamasi. Jos kuvassa esiintyy tunnistettavia henkilöitä, täytyy sinulla lisäksi olla heiltä lupa kuvan julkaisemiseen. Lähettämällä kuvan palautteen osana vakuutat, että sinulla on edellä mainittu lupa kuvan julkaisuun.

Lähettämällä kuvan, videon tai muuta tekijänoikeuslain suojaamaa sisältöä palautteen osana, luovutat kaikki tekijän- ym. oikeutesi sisältöön (mukaan lukien edelleenluovutus- ja muunteluoikeuden) Helsingin kaupungille.”
 
##### Palautejärjestelmän rajapinnan lisenssi

1. Tällä lisenssillä Helsingin kaupunki antaa lisenssinsaajalle (lisensoitua aineistoa tämän lisenssin mukaisesti käyttävä) kohdissa 2 - 4 mainituin ehdoin maailmanlaajuisen, maksuttoman, ei-yksinomaisen ja pysyvän luvan kopioida, levittää, muokata, yhdistellä sekä muutoin käyttää lisensoitua aineistoa. Lisensoitua aineistoa voi käyttää sekä ei-kaupallisiin että kaupallisiin tarkoituksiin.
2. Lisensoidun aineiston alkuperäiset tekijänoikeustiedot on ilmoitettava seuraavasti: © Helsingin kaupunki, [aineistossa ilmoitettu päivämäärä] eli esimerkiksi  © Helsingin kaupunki, 5.2.2013.
3. Lisenssinantajan pyynnöstä tekijänoikeustiedot on poistettava.
4. Lisensoidun aineiston tekijänoikeustietoja ei saa ilmoittaa siten, että ilmoitus viittaisi Helsingin kaupungin millään tavoin tukevan lisensoidun aineiston käyttäjää tai aineiston käyttötapaa.

## Documentation

### Encoding and formats

UTF-8 is required everywhere. The API supports both XML and JSON.

### Language support

Finnish and English are supported. In practice, this means that the service request types can be queried by those languages.

### Moderation of Service Requests

When a service request is posted to the city's issue reporting system, it is not yet shown publicly in the API's service request listings. Each service request is pre-moderated and only after publishing is the service request visible through the API's listing views.

Before the service request is moderated, the service request details are visible and can be queried by using the service_request_id.

### API methods

#### GET Service List

Provides a list of acceptable service request types and their associated service codes.

-   URL address: https://asiointi.hel.fi/palautews/rest/v1/services.[format].
-   Example URL: https://asiointi.hel.fi/palautews/rest/v1/services.json
-   Requires API key: No
-   Method: GET

**Request Parameters:**

| Parameter name | Description | Required | Notes |
| --- | --- | --- | --- |
| **locale** CitySDK specific | Preferred language | No | Locales can be, for example, fi, fi_FI, en, en_GB or en_US. If no locale is given the default value is English. |

** Response parameters:**

| Parameter name | Description | Required | Notes |
| --- | --- | --- | --- |
| **service_code** | The unique identifier for the service request type | Yes |   |
| **service_name** | The human readable name of the service request type | Yes |   |
| **description** | A brief description of the service request type. | Yes |   |
| **metadata** | Determines whether there are additional form fields for this service type. true: This service request type requires additional metadata so the client will need to make a call to the [Service Definition](http://wiki.open311.org/GeoReport_v2.1_Draft#GET_Service_Definition) method. false: No additional information is required and a call to the [Service Definition](http://wiki.open311.org/GeoReport_v2.1_Draft#GET_Service_Definition) method is not needed. | Yes | At the moment metadata is always set to false. |
| **type** | realtime: The service request ID will be returned immediately after the service request is submitted. | Yes | At the moment, type is always set to realtime. |
| **keywords** | A comma separated list of tags or keywords to help users identify the request type. This can provide synonyms of the service_name and group. | Yes |   |
| **group** | A category to group this service type within. This provides a way to group several service request types under one category such as "sanitation" | Yes |   |

**Possible errors**

The numbers represent the HTTP status code returned for each error type:

-   400 - General Service Error (Any failure during create request processing, eg CRM is down. Client will need to notify us)

**Example request:**

<https://asiointi.hel.fi/palautews/rest/v1/services.json?locale=fi_FI>

**Example response:**

```json
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
```

#### GET Service Definition

Define attributes associated with a service code. At the moment, there are no attributes defined in Helsinki API and therefore no use for this method.

-   URL address: https://asiointi.hel.fi/palautews/rest/v1/services/[service code].[format].
-   Example URL: https://asiointi.hel.fi/palautews/rest/v1/services/246.json
-   Requires API key: No
-   Method: GET

**Request parameters**

| Parameter name | Description | Required | Notes |
| --- | --- | --- | --- |
| **service_code** | The unique identifier for the service request type. | Yes | The service_code is specified in the main URL path rather than an added query string parameter. |
| **locale** CitySDK specific | Preferred language | No | Locales can be, for example, fi, fi_FI, en, en_GB or en_US. If no locale is given the default value is English. |

**Response parameters**

TODO

#### POST Service Request

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
| **title** CitySDK specific | Title of the service requests | No |\ |
| **lat** | Latitude using the [(WGS84)](http://en.wikipedia.org/wiki/World_Geodetic_System) projection. | No | Currently all service types require location, either lat/long or service_object_id. | | **long** | Longitude using the [(WGS84)](http://en.wikipedia.org/wiki/World_Geodetic_System) projection. | No | Currently all service types require location, either lat/long or service_object_id. | 
|**service_object_type** CitySDK specific | Describes the point of interest reference which is used for identifying the request object. | No | If service_object_id is included in the request, then service_object_type must be included. |
| **service_object_id** CitySDK specific | Describes the point of interest reference which is used for identifying the request object. | No | If service_object_id is included in the request, then service_object_type must be included. |
| **address_string** | Human readable address or description of the location. | No |   |
| **email** | The email address of the person submitting the request | No | If email address is given, service will notify the email address when service request is processed. |
| **first_name** | The given name of the person submitting the request | No |   |
| **last_name** | The family name of the person submitting the request | No |   |
| **phone** | The phone number of the person submitting the request | No |   |
| **media_url** | A URL to media associated with the request, e.g. an image | No | API supports the most typical media formats like jpg, png, gif,.. Note, that URL links must end with a correct filetype like ".jpg", e.g. http://pbs.twimg.com/media/Ay9wUStCEAEtoPC.jpg. Http and https URLs are supported. |
| **media** | Array of file uploads | No | A client may POST multiple files as multipart/form-data. This is the equivalent of having multiple `input type="file" name="media[]"` inputs. Subsequent calls for GET Service Requests should return the URL for this file via the media_urls field. See more at section Uploading media. |

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
```
POST /palautews/rest/v1/requests.json
Host: asiointi.hel.fi
Content-Type: application/x-www-form-urlencoded; charset=utf-8

api_key=xyz&service_code=001&lat=37.76524078&long=122.4212043&address_string=Unioninkatu 25
&email=jaakko.rajaniemi%40hel.fi&first_name=Jaakko&last_name=Rajaniemi&phone=111111111&
description=Large+sinkhole+is+destroying+the+street &media_url=http%3A%2F%2Ffarm3.static.flickr.com%2F2002%2F225ed4760.jpg
```

**Example response:**
```json
{
  "service_request_id":"8fmht6g1470b3qk8pthg",
  "service_notice":""
}
```

#### GET Service Requests

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
| **extensions** CitySDK specific | The endpoint provides supplemental details about service requests that are in addition to the ones described in the standard specification. These data are nested in the 'extended_attributes' parameter in the Service Request response. In order to retrieve the new supplemental details, add the query parameter "extensions=true" to the request | No | See chapter on Extensions. |
| **service_object_type** CitySDK specific | Describes the point of interest reference which is used for identifying the request object. | No | See chapter on Service Objects. |
| **service_object_id** CitySDK specific | Describes the ID of the service object | No | If service_object_id is included in the request, then service_object_type must be included. |
| **lat** CitySDK specific | Latitude | No | Location based search if lat, long and radius are given. |
| **long** CitySDK specific | Longitude | No | Location based search if lat, long and radius are given. |
| **radius** CitySDK specific | Radius (meters) in which location based search performed. | No | Location based search if lat, long and radius are given. |
| **updated_after** CitySDK specific | Earliest updated_datetime to include in search. Allows one to search for requests which have an updated_datetime between the updated_after time and updated_before time (or now). This is useful for downloading a changeset that includes changes to older requests or to just query very recent changes. | No | Must use w3 format, eg 2010-01-01T00:00:00Z. |
| **updated_before** CitySDK specific | Latest updated_datetime to include in search. Allows one to search for requests which have an updated_datetime between the updated_after time and the updated_before time. This is useful for downloading a changeset that includes changes to older requests or to just query very recent changes.  | No | When not specified (updated_after is used without updated_before) then updated_before is assumed to be now. Must use w3 format, eg 2010-01-01T00:00:00Z. |

**Response Parameters:**

| Parameter names | Description | Required | Notes |
| --- | --- | --- | --- |
| **service_request_id** | The unique ID of the service request created. | Yes |   |
| **status_notes** | Explanation of why the status was changed to the current state or more details on the current status than is conveyed with status alone | Yes |   |
| **status** | The current status of the service request. open: it has been reported. closed: it has been resolved. | Yes |   |
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
| **service_object_type** CitySDK specific | Nested inside the extended_attributes field (extended_attributes.service_object_type). Describes the point of interest reference which is used for identifying the request object. | No | See chapter on Service Objects |
| **service_object_id** CitySDK specific | Nested inside the extended_attributes field (extended_attributes.service_object_id). Describes the ID of the service object. | No | If service_object_id is included in the request, then service_object_type must be included. |
| **detailed_status** CitySDK specific | Nested inside the extended_attributes field (extended_attributes.detailed_status). Describes the detailed status of the service request. | No | This can contain multiple status values; comma delimited. See more on section Detailed status of service requests. |
| **media_urls** CitySDK specific | Nested inside the extended_attributes field (extended_attributes.media_urls). Contains URLs to media associated with the request. | No | The values is array of strings. |

**Response Volume**

The default query limit is a span of 90 days or first 200 requests returned, whichever is smallest.

**Possible errors**

The numbers represent the HTTP status code returned for each error type:

-   404 - service_code or jurisdiction_id was not found (specified in error response)
-   400 - General Service Error. Any failure during create request processing, e.g. API service is down.

**Example Request**

<https://asiointi.hel.fi/palautews/rest/v1/requests.json?start_date=2013-04-24T00:00:00Z&end_date=2013-05-24T00:00:00Z>

**Example Response**

```json
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
```

#### GET Service Request

This method is used to query the current status of multiple requests.

-   URL: https://asiointi.hel.fi/palautews/rest/v1/requests/[service_request_id].[format]
-   Example URL: https://asiointi.hel.fi/palautews/rest/v1/requests/1ju4p6v3e04pcpobfv7u.json
-   HTTP Method GET

**Request Parameters:**

| Parameter names | Description | Required | Notes |
| --- | --- | --- | --- |
| **service_request_id** | Unique id of the service request | Yes | The service_request_id is specified in the main URL path rather than an added query string parameter. |
| **extensions** CitySDK specific | Helsinki endpoint provides supplemental details about service requests that are in addition to the ones described in the Open311 specification. These data are nested in the 'extended_attributes' field in the response. In order to retrieve the new supplemental details, add the query parameter "extensions=true" to any request. | No | Options: **true**, **false**. Defaults to false. See more at the Extensions chapter. |

**Response Parameters:**

| Parameter names | Description | Required | Notes |
| --- | --- | --- | --- |
| **service_request_id** | Unique id of the service request | Yes | The service_request_id is specified in the main URL path rather than an added query string parameter. |
| **status_notes** | Explanation of why the status was changed to the current state or more details on the current status than conveyed with status alone. | Yes |   |
| **service_name** | The human readable name of the service request type | Yes | Empty string |
| **service_code** | The unique identifier for the service request type | Yes |   |
| **status** | The current status of the service request. open: it has been reported. closed: it has been resolved. | Yes |   |
| **description** | A full description of the request or report submitted. | Yes |   |
| **agency_responsible** | The agency responsible for fulfilling or otherwise addressing the service request. | No | Empty string |
| **service_notice** | Information about the action expected to fulfill the request or otherwise address the information reported. | No | Empty string |
| **requested_datetime** | The date and time when the service request was made. | Yes | Must use W3C format, e.g 2010-01-01T00:00:00Z. |
| **updated_datetime** | The date and time when the service request was last modified. For requests with status=closed, this will be the date the request was closed. | Yes | Must use the W3C format, e.g 2010-01-01T00:00:00Z. |
| **expected_datetime** | The date and time when the service request can be expected to be fulfilled. This may be based on a service-specific service level agreement. | No | Not available. Must use the W3C format, e.g 2010-01-01T00:00:00Z. |
| **address** | Human readable address or description of location. | No |   |
| **lat** | latitude using the [(WGS84)](http://en.wikipedia.org/wiki/World_Geodetic_System) projection. | No | Currently all service types require location, either lat/long or service_object_id. |
| **long** | longitude using the [(WGS84)](http://en.wikipedia.org/wiki/World_Geodetic_System) projection. | No | Currently all service types require location, either lat/long or service_object_id. |
| **media_url** | A URL to media associated with the request, for example an image. | No | May contain more than one of these elements. |
| **service_object_type** CitySDK specific | Nested inside the extended_attributes field (extended_attributes.service_object_type). Describes the point of interest reference which is used for identifying the request object. | No | See chapter on Service Objects. |
| **service_object_id** CitySDK specific | Nested inside the extended_attributes field (extended_attributes.service_object_id) describes the ID of the object e.g. public toiled in Helsinki Esplanade park  ID = 10844. | No | If service_object_id is included, then service_object_type must be also included. See chapter on Service Objects. |
| **detailed_status** CitySDK specific | Nested in extended_attributes parameters (extended_attributes. detailed_status) describes detailed status of the service request. | No | This can contain multiple status values; comma delimited. See more on Detailed status of service requests chapter. |
| **media_urls** CitySDK specific | Nested inside the extended_attributes field (extended_attributes.media_urls). Contains URLs to media associated with the request. | No | The values is an array of strings. |

**Possible errors**

The numbers represent the HTTP status code returned for each error type:

-   404 - service_code or jurisdiction_id was not found (specified in error response)
-   400 - General Service Error. Any failure during create request processing, e.g. API service is down.

**Example Request**

<https://asiointi.hel.fi/palautews/rest/v1/requests/8fmht6g1470b3qk8pthg.json?extensions=true>

**Example Response**
```json
{
  "service_request_id": "8fmht6g1470b3qk8pthg",
  "service_code": "171",
  "description": "Itäkeskuksen uimahallin edessä kadulla on monttuja ajotiessä.",
  "requested_datetime": "2013-05-02T11:02:07+03:00",
  "updated_datetime": "2013-05-15T08:55:09+03:00",
  "status": "closed",
  "status_notes": "Kiitos ilmoituksestanne. Olemme välittäneet korjauspyynnön alueen katujen kunnossapitoon.",
  "lat": "60.21263634325148",
  "long": "25.077090230550745",
  "extended_attributes": 
    {
      "title": "Monttu tiessä",
      "detailed_status": "PROCESSED"
    }
}
```

#### Error messages

| Parameter name | Description | Required | Notes |
| --- | --- | --- | --- |
| **code** | The error code representing the type of error. In most cases, this should match the HTTP status code returned in the HTTP header. | Yes |   |
| **description** | A human readable description of the error that occurred. This is meant to be seen by the end user. | Yes |   |

**General error:**

-   403 -- Missing or Invalid API Key (specify in error message)
-   400 -- The URL request is invalid or service is not running or reachable. Client should notify us after checking URL

**Example Error**

HTTP/1.1 403 Forbidden

```json
{
  "code":403,
  "description":"Missing or invalid API key.",
}
```


### Service Objects (service_object_type, service_object_id)

A service request may contain a reference to a service point using the field service_object_id. These represent service points in the [Helsinki metropolitan area service map](http://servicemap.hel.fi/).

Public toilet in Helsinki service map:

* [service_object_id=10844](http://www.hel.fi/palvelukarttaws/rest/v2/unit/10844)
* service_object_type=http://www.hel.fi/servicemap/v2


### Extensions (extended_attributes)

A set of Helsinki specific extensions are carried nested inside extended_attributes parameter. In order to retrieve the new extended attributes in the response, add the query parameter "extensions=true" to the request. The list of parameters are:

-   **title**, feedback system's human readable title for the service request. The value is same as the title parameter given in POST Service Request or if not present the title is shortened from description text.
-   **service_object_id**, see more on Service Objects chapter.
-   **service_object_type**, see more on Service Objects chapter.
-   **detailed_status**, see more at the Detailed status of service requests chapter.

```json
{
  "extended_attributes": 
    {
      "service_object_id": "10844",
      "title": "Broken toilet",
      "service_object_type": "http://www.hel.fi/servicemap/v2",
      "detailed_status": "PROCESSED"
  }
}
```

### Detailed status of service requests (detailed_status)

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
```json
{
  "extended_attributes": 
    {
      "detailed_status": "IN_PROCESS,PUBLIC_WORKS_NEW"
    }
}
```

### Uploading media

Uploading of media files like images is supported in two ways. POSTing a Service Request can reference an image with the media_url parameter or a media file can be uploaded directly as multipart/form-data. More than one image is supported. If applications send more than one image, special care should be taken on the application side because of the long upload time. It is also possible to upload using the media_url reference and directly multipart/form-data in one shot.

**Example of uploading image as multipart/form-data**

```
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
```

**Example response**
```json
{
    "service_request_id": "2g8rlg8ricmctfo21agm",
    "service_notice": ""
}
```

## Frequently asked questions

This is the list of frequently asked question (FAQ) and typical problems. The list is updated when new things come up.

### Why does posting a service request fail?

Answer 1: Posting service requests usually fails, because the description parameter doesn't contain more than 10 characters.

Answer 2: Check that the endpoint URL is `https://...` and not `http://...`.

Answer 3: Posting service request fails because wrong service_code is used. Typically service_code from production API is used in test environment. Note, that service_codes are different between test and production APIs.

Answer 4:  Uploading image with media_url fails if https URLs are used because https URLs are not yet support.

### I posted a service request successfully, but it only shows part the posted data

That's because every service request is moderated and only after that all data is public.

### The location of my service request is strange

Check that the location parameters used are lat and long and not lon or lng.

### Now that I tested my app and fine-tuned it to the near perfection, I need an API key to the production environment. What do I need to do?

Ask for a production API key well before going public, because it will be verified that your application fulfills the API terms. Reserve at least 1 - 2 weeks for this.

We want to be able to inspect the app or web site before we give the production API key. Check that you have read the terms of service, and included the required text into you app.

###  How do the production and test environment differ?

The used API key and service_code's are different.

The production interface only supports TLS version 1.0. This has caused problems, especially, if your app is running on Ubuntu 12.04 operating system. Some clients fail negotiate the SSL/TLS version with the production interface. This can be bypassed by forcing TLS 1.0 use on client application. This has been now fixed for example in Python Three library (see pull request).

If you are using PHP and cULR, this can be bypassed for example like this:

```
$ch = curl_init();

$opts = array(  CURLOPT_URL => $url,

        CURLOPT_RETURNTRANSFER => 1,

        CURLOPT_TIMEOUT => 4,

        CURLOPT_SSLVERSION => 1);

curl_setopt_array($ch, $opts);

$data = curl_exec($ch);
```

If you have examples on other languages post them here so others can learn from them.
