---
name: Snowplows
menu: APIs
route: /apis/snowplows
---


# Snowplows

The snowplow API allows querying the real-time and historical locations of snowplows in the Helsinki area.

The snowplow API allows querying the locations of the snowplows in the Helsinki area. Check out the [Aurat kartalla application](http://auratkartalla.com/) and its [source](https://github.com/sampsakuronen/snowplow-visualization).

* API location: [dev.hel.fi/aura/v1/snowplow/](https://dev.hel.fi/aura/v1/snowplow/)

# Documentation

Example query result:

```json
    {
        "id": "5407",
        "last_location": {
            "timestamp": "2013-02-19T10:37:33",
            "coords": [
                24.95477988702919,
                60.1847431874767
            ],
            "events": [
                "au"
            ]
        }
    },
```

The field `last_location` is the plow's last recorded location with a timestamp. `last_location` is updated as new samples are received.

`events` describes what kind of activity the plow was performing at that location. Values include:

<dl>
  <dt>kv</dt><dd>Bicycle and pedestrian lanes</dd>
  <dt>au</dt><dd>Snow removal (auraus)</dd>
  <dt>su</dt><dd>De-icing with salt (suolaus)</dd>
  <dt>hi</dt><dd>Spreading sand (hiekoitus)</dd>
  <dt>nt</dt><dd>Mowing (niitto)</dd>
  <dt>ln</dt><dd>"Lanaus"</dd>
  <dt>hs</dt><dd>Planing (höyläys)</dd>
  <dt>pe</dt><dd>Street washing (kadunpesu)</dd>
  <dt>ps</dt><dd>"Pölynsidonta"</dd>
  <dt>hn</dt><dd>Sand removal (hiekannosto)</dd>
  <dt>hj</dt><dd>Brushing (harjaus)</dd>
  <dt>pn</dt><dd>Coating (pinnoitus, liittyy kesähoitoreitteihin</dd>
</dl>

In order to retrieve detailed information for a single plow, the URL is formed like this:

    http://dev.hel.fi/aura/v1/snowplow/<id>

## Query parameters

You can provide parameters to filter the query or add more information to the response. Parameters include:

    history=<int>

Response will a include a list of `<int>` points of historical location data for the plow.

    since=<time>

Show only plows that have been active since `<time>`. `<time>` can be a timestamp or a relative time. When querying details of a single plow, will return historical locations since `<time>`.

    limit=<int>

Return at most `<int>` plows.

    temporal_resolution=<int>

When querying individual plow details, return historical locations that must be at least `<int>` seconds apart.

### Examples

    http://dev.hel.fi/aura/v1/snowplow/5407?history=50

The query above will display information about plow `5407` with 50 previous locations included.

    http://dev.hel.fi/aura/v1/snowplow/?since=2hours+ago&limit=10

This will return at most 10 plow routes that were active 2 hours ago or more recently.
