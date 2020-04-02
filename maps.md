Map layers (how to get Helsinki map tiles into your UI)
=======================================================

The City of Helsinki provides three types of map APIs for adding City of Helsinki maps and data to your fancy new React project with e.g. the Leaflet library (https://react-leaflet.js.org/) or the Mapbox vector tile renderer (https://uber.github.io/react-map-gl/).

For questions, problems or suggestions to this guide, please contact us on https://gitter.im/City-of-Helsinki/heldev, #paikkatieto channel on City of Helsinki Slack (if you are a member), or by email at dev@hel.fi. Regarding data on the kartta.hel.fi server, please contact paikkatieto@hel.fi, and data on the kartta.hsy.fi server, please contact asiakaspalvelu@hsy.fi.

The supported map data types are

* [vector and raster Helsinki style Openstreetmap tiles (http://tiles.hel.ninja)](#osm-tiles)
* [bitmap print map layers (WMS) and tiles (WMTS)](#wmswmts)
* [vector data layers (WFS)](#wfs)

Leaflet quick start
-------------------

For quick introduction to Leaflet with City of Helsinki tiles, you may proceed through the [Leaflet quick start tutorial](https://leafletjs.com/examples/quick-start/). If you wish to use our [OSM tiles](#osm-tiles), the only change you need in the tutorial is change the coordinates and tile URLs to

```
var mymap = L.map('mapid').setView([60.192059, 24.945831], 13);
L.tileLayer('http://tiles.hel.ninja/styles/hel-osm-bright/{z}/{x}/{y}@2x@fi.png', {
	maxZoom: 18,
}).addTo(mymap);
```

OSM Tiles
---------

Helsinki currently has three map styles based on Openstreetmap data and the [Openmaptiles pipeline](https://openmaptiles.org/), designed specifically as background maps for web apps.

We provide an OSM tile server on [http://tiles.hel.ninja](http://tiles.hel.ninja), and its front page provides you previews of the three OSM map styles available, as well as viewers that are an example of how you can use our raster and vector tiles based on OSM data. The three map styles currently available are [hel-osm-bright](http://tiles.hel.ninja/styles/hel-osm-bright/#11.38/60.185/24.9463) intended to be a bright background map look, [hel-osm-light](http://tiles.hel.ninja/styles/hel-osm-light/#11.38/60.185/24.9463), a more subdued gray background map, and [hel-osm-high-contrast](http://tiles.hel.ninja/styles/hel-osm-high-contrast/#11.38/60.185/24.9463) in B&W, for extra clarity or for people with limited eyesight. Our Tileserver GL serves the tile data in both vector and raster modes.

---

*In new UI applications*, we recommend using a vector tile rendering library such as [MapBox GL JS](https://github.com/mapbox/mapbox-gl-js) with [React-map-gl](https://uber.github.io/react-map-gl/), or any other library capable of rendering [the MapBox vector tile format](https://docs.mapbox.com/vector-tiles/reference/). Also Leaflet has [plugins](https://leafletjs.com/plugins.html#vector-tiles) that purport to have Mapbox vector tile support, and might work.

The only data a vector tile renderer needs is the TileJSON file of the style you want to render:

- `http://tiles.hel.ninja/styles/hel-osm-bright.json`
- `http://tiles.hel.ninja/styles/hel-osm-light.json`
- `http://tiles.hel.ninja/styles/hel-osm-high-contrast.json`

This file contains the URLs of each style definition, along with URLs to the actual PBF tiles the renderer will load and render in the browser.

---

*In existing Leaflet or Openlayers applications*, if you do not wish to use a vector layer renderer plugin, you may use the new tiles as raster tiles, i.e. rendered on our server. The styles above are available on the server as raster tiles as well, with tile URLs of the form `http://tiles.hel.ninja/styles/hel-osm-bright/{z}/{x}/{y}@2x@fi.png`. Here `{z}` is the zoom level, `{x}` and `{y}` the coordinates (which depend on the zoom level), `hel-osm-bright` the name of the style you want to render, `@2x` the bitmap size you want (for hi-res displays), and `@fi` the language you want rendered. (Do note that most Helsinki place names exist in Openstreetmap only in Finnish and Swedish, so OSM support for other languages is limited and you will get tiles with very little text.)

Therefore, getting raster OSM Helsinki map tiles in your existing Leaflet installation is as simple as (in react-leaflet)

```
render () {
  const helsinkiCoordinates = [60.192059, 24.945831];
  const url = "https://tiles.hel.ninja/styles/hel-osm-bright/{z}/{x}/{y}@2x@fi.png" // use the name of your preferred style here
  return (
    <Map center={helsinkiCoordinates} zoom={8} minZoom={5} scrollWheelZoom={false}>
      <TileLayer url={url} />
    </Map>);
}
```

---

If you notice any issues with any of the map styles above, please open an issue or create a PR in the corresponding map style repo: https://github.com/City-of-Helsinki/hel-osm-bright, https://github.com/City-of-Helsinki/hel-osm-light and https://github.com/City-of-Helsinki/hel-osm-high-contrast.

Do note that (at least currently) our OSM tiles are only served in the Web Mercator coordinate system (https://en.wikipedia.org/wiki/Web_Mercator_projection, [EPSG:3857](https://epsg.io/3857)), so if you wish to use the local Helsinki coordinate system for exact measurement and representation of local areas and shapes, you will have to keep reading on below.

WMS/WMTS
------------

These protocols serve traditional Helsinki area maps and bitmaps.

WMS (Web Map Service) is the Open Geospatial Consortium standard for geocoded PNG, GIF, TIFF etc. bitmap data. The City of Helsinki Urban Environment Geoserver (https://kartta.hel.fi/ws/geoserver/avoindata/wms?service=wms&version=1.3.0&request=GetCapabilities) provides various print map sets as open data. A list of all the open data maps is available at https://kartta.hel.fi/avoindata/dokumentit/Aineistolista_wms_avoindata.html . Another source for regional maps is the HSY (Helsinki Region Environmental Services Authority) Geoserver (https://kartta.hsy.fi/geoserver/wms?service=wms&version=1.3.0&request=GetCapabilities).

Some of these layers are also served *tiled* for background map use. If the map you want is not served tiled, you may render the layer as a whole using the WMS service, which will be considerably slower, or will have to contact the owner of the Geoserver in question to discuss providing that specific layer tiled for background map purposes.

The geoservers listed above implement the *tiled* map standard WMTS, https://kartta.hel.fi/ws/geoserver/avoindata/gwc/service/wmts?request=getCapabilities , whose tiled layers are listed in https://kartta.hel.fi/avoindata/dokumentit/Aineistolista_wmts_avoindata.html . Correspondingly, the HSY tiled map service is at https://kartta.hsy.fi/geoserver/gwc/service/wmts?request=getCapabilities .

The foremost tiled map sets are the city map series (`Karttasarja_PKS`) used by default in https://kartta.hel.fi, the technical detail map (`Kantakartta`, https://kartta.hel.fi/?l=kantakartta), the aerial photograph (`Ortoilmakuva_2018_5cm`, https://kartta.hel.fi/?l=Ortoilmakuva_2018) and the current detail plan (`Ajantasa_asemakaava_maanpaallinen`, https://kartta.hel.fi/?l=Ajantasa_asemakaava_maanpaallinen_varillinen).

Calls to a WMTS server are of the form `https://kartta.hel.fi/ws/geoserver/avoindata/gwc/service/wmts?layer=avoindata:{layer_name}&tilematrixset=ETRS-GK25&Service=WMTS&Request=GetTile&Version=1.0.0&TileMatrix=ETRS-GK25:{z}&TileCol={x}&TileRow={y}&Format=image/png`, where `layer_name` is any of the above, `{z}` is the zoom level (available zoom levels depend on the detail level of the layer; if you encounter blank tiles, try a higher zoom) and `{x}` and `{y}` the integer coordinates of the map tile. Also, the available format varies depending on the layer type (jpeg for aerial photographs, png otherwise). The applicable coordinate range depends on the zoom level and is returned by the server if you ask for a tile outside the map area. (ETRS-GK25 refers to the official Transverse Mercator coordinate system centered on the City of Helsinki meridian (25 degrees east), internationally known as [EPSG:3879](https://epsg.io/3879), to minimize measurement errors.) Similar calls apply for the HSY WMTS server.

---

What all this boils down to is that there are two steps to get the official map tiles up and running in your UI:

1) set up the local coordinate system ETRS-GK25 (a.k.a. [EPSG:3879](https://epsg.io/3879)) in your Leaflet instance. This requires defining the Helsinki CRS (Coordinate Reference System) in the format supported by [Proj4Leaflet](https://github.com/kartena/Proj4Leaflet):

```
import L from 'leaflet';
import 'proj4'; // import required for side effect
import 'proj4leaflet'; // import required for side effect

export function EPSG3879() { // eslint-disable-line
  const crsName = 'EPSG:3879';
  const projDef = '+proj=tmerc +lat_0=0 +lon_0=25 +k=1 +x_0=25500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs';
  const bounds = [25440000, 6630000, 25571072, 6761072];
  const originNw = [bounds.min.x, bounds.max.y];
  const crsOpts = {
    resolutions: [256, 128, 64, 32, 16, 8, 4, 2, 1, 0.5, 0.25, 0.125, 0.0625, 0.03125]
  };
  return new L.Proj.CRS(crsName, projDef, bounds, crsOpts);
}
```

2) just create the new background map layer (the examples use react-leaflet for simplicity) with the CRS above, Helsinki coordinates and suitable zoom levels and map selection. Please try out the selected zoom levels to check that they are available for the map type you wish to display:

```
render () {
  const helsinkiCoordinates = [60.192059, 24.945831];
  const crs = EPSG3879();
  const url = "https://kartta.hel.fi/ws/geoserver/avoindata/gwc/service/wmts?layer=avoindata:Karttasarja_PKS&tilematrixset=ETRS-GK25&Service=WMTS&Request=GetTile&Version=1.0.0&TileMatrix=ETRS-GK25:{z}&TileCol={x}&TileRow={y}&Format=image/png" // insert the name of the layer and correct image format here
  return (
    <Map center={helsinkiCoordinates} zoom={7} minZoom={4} scrollWheelZoom={false} crs={crs}>
      <TileLayer url={url} />
    </Map>);
}
```

---

*If the layer you wish to display is not available tiled*, you may still [render the entire WMS layer with Leaflet](https://leafletjs.com/examples/wms/wms.html), in which case the layer is loaded as a whole, with considerably lower performance:

```
render () {
  const helsinkiCoordinates = [60.192059, 24.945831];
  const crs = EPSG3879();
  const url = "https://kartta.hel.fi/ws/geoserver/avoindata/wms?" // you may use any geoserver you know
  const wmsOptions = {layers: 'avoindata:Opaskartta_1940'} // comma-separated string of any WMS layer(s) on the geoserver
  return (
    <Map center={helsinkiCoordinates} zoom={8} minZoom={5} scrollWheelZoom={false} crs={crs}>
      <WMSTileLayer url={url} wmsOptions={wmsOptions}/>
    </Map>);
}
```

You can browse the WMS layers available on any Geoserver e.g. by installing the open source GIS software [QGIS](https://docs.qgis.org/testing/en/docs/training_manual/online_resources/wms.html); all layers are listed on https://kartta.hel.fi/avoindata/dokumentit/Aineistolista_wms_avoindata.html . Our open data portal [HRI](https://hri.fi/data/group/59b85a25-5cf1-4eb8-a0b7-92ffe34efdad?res_format=WMS) contains more detailed descriptions on the WMS layers open for public.

WFS
---

In addition to bitmaps, City of Helsinki produces a huge amount of geographical features in vector format. In some of these cases, vector layers (i.e. specific points, linestrings and polygons on a map, with metadata) are published as open data with an Open Geospatial Consortium WFS (Web Feature Service) API.

The servers that implement WFS are usually the same Geoservers that implement WMS, i.e. https://kartta.hel.fi/ws/geoserver/avoindata/wfs?service=wfs&version=1.1.0&request=GetCapabilities and https://kartta.hsy.fi/geoserver/wfs?service=wfs&version=1.1.0&request=GetCapabilities . These layers can be listed and displayed e.g. with [QGIS](https://docs.qgis.org/testing/en/docs/training_manual/online_resources/wfs.html).

Interesting datasets include many of the polygon features you can plot on http://kartta.hel.fi, such as city divisions (https://kartta.hel.fi/?l=Karttasarja%2Ckaupunginosat, `avoindata:Kaupunginosajako` on WFS), plots as polygons (https://kartta.hel.fi/?l=kiinteistoalueet_set, `avoindata:Kiinteistot_alue` on WFS), buildings as polygons (https://kartta.hel.fi/?l=Karttasarja%2CRakennukset_alueina, `avoindata:Rakennukset_alue_rekisteritiedot` on WFS) and all manner of public areas such as parks, streets, benches, trashcans (various layers on https://kartta.hel.fi/, `avoindata:YLRE_Viheralue_alue` etc. on WFS). Descriptions of specific layers can often be found on our open data portal [HRI](https://hri.fi/data/group/59b85a25-5cf1-4eb8-a0b7-92ffe34efdad?res_format=WFS), and a list of all layers is at https://kartta.hel.fi/avoindata/dokumentit/Aineistolista_wfs_avoindata.html .

---

If you want to include these features in your UI, you have two options:

1) If the feature is essential to the operation of your service and needs to be present in your backend REST API, consider using our backend https://github.com/City-of-Helsinki/django-munigeo library in your API project to bring this vector data into your backend database. The `django-munigeo` library supports importing many of the aforementioned geometries already, or you may create a PR to include support for importing that specific layer in `django-munigeo`. The backend may then serve the needed features to your Leaflet UI in Geojson, or any geospatial processing (such as location queries) can indeed be done with API calls to your own backend.

2) If you merely wish to display the feature to the user in the UI, but do not need this data in the backend, you may display a WFS layer directly in Leaflet with the [Leaflet-WFST](http://flexberry.github.io/Leaflet-WFST/) plugin, though we haven't tested it yet. The plugin seems to lack React support, so you would have to do this the old-fashioned way, i.e.

```
var layer = new L.WFS({
    url: 'https://kartta.hel.fi/ws/geoserver/avoindata/wfs?',
    typeNS: 'avoindata',
    typeName: 'Kaupunginosajako',
    crs: EPSG3879(),
    style: {
        color: 'blue',
        weight: 2
    }
})
```
