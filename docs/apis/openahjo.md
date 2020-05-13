---
name: OpenAhjo
menu: APIs
route: /apis/openahjo
---


# OpenAhjo

OpenAhjo is an API for accessing the decision-making material of the City of Helsinki. The backend is RESTful and based on [Django](https://www.djangoproject.com/) and [Tastypie](http://tastypieapi.org/).

Please note that the current version of OpenAhjo will be replaced with a new version in the future. A likely basis for the new version is the [6Aika decision API](https://github.com/6aika/api-paatos). For now, this version is still the way to go for accessing decision data.
Endpoints and examples

* API location: [dev.hel.fi/paatokset/v1](https://dev.hel.fi/paatokset/v1)

## Documentation

The [API documentation](https://dev.hel.fi/paatokset/doc/) follow the OpenAPI (Swagger) specification. Additional descripptions are found below.

### Endpoint and examples

#### policymaker

An entity making decisions.

http://dev.hel.fi/openahjo/v1/policymaker/1/?format=json

```json
{ 
	"id": 1, 
	"name": "Tarkastuslautakunta", 
	"origin_id": "00311", 
	"resource_uri": "/openahjo/v1/committee/1/" 
}
```

#### meeting

Meeting of a political committee. A meeting is uniquely identified by committee, year and meeting number (within the year).

http://dev.hel.fi/openahjo/v1/meeting/5/?format=json

```json
{ 
	"policymaker": "/openahjo/v1/policymaker/26/", 
	"policymaker_name": "Asuntotuotantotoimikunta", 
	"date": "2013-05-08", 
	"id": 5, 
	"minutes": false, 
	"number": 6, 
	"resource_uri": "/openahjo/v1/meeting/5/", 
	"year": 2013 
}
```

#### issue

An issue being discussed and decided on at different committee meetings. One issue can be discussed in several different meetings. The resource agenda_item links issues to meetings.

http://dev.hel.fi/openahjo/v1/issue/148/?format=json

```json
{ 
	"category": "/openahjo/v1/category/419/", 
	"category_name": "Asemakaavoitus", 
	"category_origin_id": "10 03 03", 
	"geometries": 
		[ 
			{ 
				"coordinates": [24.93393763640416, 60.16417504680238], 
				"name": "Albertinkatu 27", 
				"type": "Point" 
			} 
		], 
	"id": 148, 
	"register_id": "HEL 2011-004632", 
	"resource_uri": "/openahjo/v1/issue/148/", 
	"slug": "hel-2011-004632", 
	"subject": "Kampin tontin 72/2 asemakaavan muuttaminen (nro 12145; Albertinkatu 27 b)", 
	"summary": "Asemakaavan muutosehdotus mahdollistaa liikerakennusten korttelialueen muuttamisen asuin..." 
}
```

#### issue search

The issue resource also provides a search interface. The interface includes Solr-powered full-text, spatial and faceted search capabilities. The following parameters are accepted:

`limit, page`: Allows specifying how many results and which page of results to return.

`text`: Full-text search terms. The parameter is passed to Haystack's auto_query, so it supports negation, exact matches etc.

`category`: Limits search to issues from given category id.

`district`: Limits search to issues from given districts. Multiple district ids can be given separated by commas.

`bbox`: Limits search geospatially to the given bounding box (left, bottom, right, top in standard WGS-84 coordinate format).

`order_by`: Specifies in which order the returned results should be. Currently only supports latest_decision_date, -latest_decision_date and relevance.

http://dev.hel.fi/openahjo/v1/issue/search/?text=guggenheim&format=json

#### category

All the issues are under one category each. The [category list](https://github.com/City-of-Helsinki/openahjo/blob/master/data/categories.csv) was made by scraping a PDF.

#### agenda_item

Agenda item describes an item on a meeting agenda. An agenda item always links to oneissue. The textual content often differs based the meeting and committee, so the content in stored in agenda_item instead of issue. Contents of issue and meeting are copied intoagenda_item in order to accommodate fewer API accesses.

http://dev.hel.fi/openahjo/v1/agenda_item/1/?format=json

```json
{ 
	"attachments": 
		[ 
			{ 
				"agenda_item": "/openahjo/v1/agenda_item/1/", 
				"file_type": "pdf", 
				"file_uri": "http://dev.hel.fi/openahjo/media/att/2b4dca8e2ee0467353205b55c47aa44cbf6500b8.pdf", 
				"hash": "2b4dca8e2ee0467353205b55c47aa44cbf6500b8", 
				"id": 1, 
				"name": "Asunto Oy Hietalahdenkatu 12", 
				"number": 1, 
				"public": true, 
				"resource_uri": "/openahjo/v1/attachment/1/" 
			} 
		], 
	"content": 
		[ 
			{ 
				"text": "Lautakunta päätti puoltaa Asunto Oy Hietalahdenkatu...",
				"type": "resolution" 
			}, 
			{ 
				"text": "Asunto Oy Hietalahdenkatu 12 on jättänyt korkotukilainahakemuksen...", 
				"type": "presenter" 
			} 
		], 
	"from_minutes": true, 
	"id": 1, 
	"index": 35, 
	"issue": { ... }, 
	"last_modified_time": "2013-04-30T11:02:00", 
	"meeting": { ... }, 
	"resource_uri": "/openahjo/v1/agenda_item/1/" 
}
```

#### video

Currently, the city council meetings are recorded on video. One video resource can either point to the whole recording (agenda_item is null), to the processing of an agenda item (index is 0) or to an individual statement by a speaker (index is non-zero and speaker is defined).

Supports filtering on agenda_item, meeting and speaker.

http://dev.hel.fi/openahjo/v1/video/2409/?format=json

```json
{ 
	"agenda_item": "/openahjo/v1/agenda_item/3219/", 
	"duration": 63, 
	"id": 2409, 
	"index": 3, 
	"meeting": "/openahjo/v1/meeting/19/", 
	"party": "", 
	"resource_uri": "/openahjo/v1/video/2409/", 
	"screenshot_uri": "http://dev.hel.fi/openahjo/media/video/6-2013/item5-3.jpg", 
	"speaker": "Pajunen Jussi", 
	"start_pos": 2327, 
	"url": "http://media.helsinkikanava.fi/valtuusto270313.mp4" 
}
```
