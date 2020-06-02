(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{Fa7z:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return p}));a("5hJT"),a("W1QL"),a("K/PF"),a("t91x"),a("75LO"),a("PJhk");var i=a("SAVP"),r=a("TjRS");a("aD51");function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}var s={};void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"docs/resources/maps.md"}});var o={_frontmatter:s},l=r.a;function p(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(i.b)(l,n({},o,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"map-layers-how-to-get-helsinki-map-tiles-into-your-ui"},"Map layers (how to get Helsinki map tiles into your UI)"),Object(i.b)("p",null,"The City of Helsinki provides three types of map APIs for adding City of Helsinki maps and data to your fancy new React project with e.g. the Leaflet library (",Object(i.b)("a",n({parentName:"p"},{href:"https://react-leaflet.js.org/"}),"https://react-leaflet.js.org/"),") or the Mapbox vector tile renderer (",Object(i.b)("a",n({parentName:"p"},{href:"https://uber.github.io/react-map-gl/"}),"https://uber.github.io/react-map-gl/"),")."),Object(i.b)("p",null,"For questions, problems or suggestions to this guide, please contact us on ",Object(i.b)("a",n({parentName:"p"},{href:"https://gitter.im/City-of-Helsinki/heldev"}),"https://gitter.im/City-of-Helsinki/heldev"),", #paikkatieto channel on City of Helsinki Slack (if you are a member), by email at dev@hel.fi, or directly as Github issues in the best practices repo ",Object(i.b)("a",n({parentName:"p"},{href:"https://github.com/City-of-Helsinki/bestpractice"}),"https://github.com/City-of-Helsinki/bestpractice"),". Regarding data on the kartta.hel.fi server, please contact paikkatieto@hel.fi, and data on the kartta.hsy.fi server, please contact asiakaspalvelu@hsy.fi."),Object(i.b)("p",null,"The supported map data types are"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",n({parentName:"li"},{href:"#osm-tiles"}),"vector and raster Helsinki style Openstreetmap tiles (http://tiles.hel.ninja)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",n({parentName:"li"},{href:"#wmswmts"}),"bitmap print map layers (WMS) and tiles (WMTS)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",n({parentName:"li"},{href:"#wfs"}),"vector data layers (WFS)"))),Object(i.b)("h2",{id:"leaflet-quick-start"},"Leaflet quick start"),Object(i.b)("p",null,"For quick introduction to Leaflet with City of Helsinki tiles, you may proceed through the ",Object(i.b)("a",n({parentName:"p"},{href:"https://leafletjs.com/examples/quick-start/"}),"Leaflet quick start tutorial"),". If you wish to use our ",Object(i.b)("a",n({parentName:"p"},{href:"#osm-tiles"}),"OSM tiles"),", the only change you need in the tutorial is change the coordinates and tile URLs to"),Object(i.b)("pre",null,Object(i.b)("code",n({parentName:"pre"},{}),"var mymap = L.map('mapid').setView([60.192059, 24.945831], 13);\nL.tileLayer('http://tiles.hel.ninja/styles/hel-osm-bright/{z}/{x}/{y}@2x@fi.png', {\n    maxZoom: 18,\n}).addTo(mymap);\n")),Object(i.b)("h2",{id:"osm-tiles"},"OSM Tiles"),Object(i.b)("p",null,"Helsinki currently has three map styles based on Openstreetmap data and the ",Object(i.b)("a",n({parentName:"p"},{href:"https://openmaptiles.org/"}),"Openmaptiles pipeline"),", designed specifically as background maps for web apps."),Object(i.b)("p",null,"We provide an OSM tile server on ",Object(i.b)("a",n({parentName:"p"},{href:"http://tiles.hel.ninja"}),"http://tiles.hel.ninja"),", and its front page provides you previews of the three OSM map styles available, as well as viewers that are an example of how you can use our raster and vector tiles based on OSM data. The three map styles currently available are ",Object(i.b)("a",n({parentName:"p"},{href:"http://tiles.hel.ninja/styles/hel-osm-bright/#11.38/60.185/24.9463"}),"hel-osm-bright")," intended to be a bright background map look, ",Object(i.b)("a",n({parentName:"p"},{href:"http://tiles.hel.ninja/styles/hel-osm-light/#11.38/60.185/24.9463"}),"hel-osm-light"),", a more subdued gray background map, and ",Object(i.b)("a",n({parentName:"p"},{href:"http://tiles.hel.ninja/styles/hel-osm-high-contrast/#11.38/60.185/24.9463"}),"hel-osm-high-contrast")," in B&W, for extra clarity or for people with limited eyesight. Our Tileserver GL serves the tile data in both vector and raster modes."),Object(i.b)("hr",null),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"In new UI applications"),", we recommend using a vector tile rendering library such as ",Object(i.b)("a",n({parentName:"p"},{href:"https://github.com/mapbox/mapbox-gl-js"}),"MapBox GL JS")," with ",Object(i.b)("a",n({parentName:"p"},{href:"https://uber.github.io/react-map-gl/"}),"React-map-gl"),", or any other library capable of rendering ",Object(i.b)("a",n({parentName:"p"},{href:"https://docs.mapbox.com/vector-tiles/reference/"}),"the MapBox vector tile format"),". Also Leaflet has ",Object(i.b)("a",n({parentName:"p"},{href:"https://leafletjs.com/plugins.html#vector-tiles"}),"plugins")," that purport to have Mapbox vector tile support, and might work."),Object(i.b)("p",null,"The only data a vector tile renderer needs is the TileJSON file of the style you want to render:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"http://tiles.hel.ninja/styles/hel-osm-bright.json")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"http://tiles.hel.ninja/styles/hel-osm-light.json")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"http://tiles.hel.ninja/styles/hel-osm-high-contrast.json"))),Object(i.b)("p",null,"This file contains the URLs of each style definition, along with URLs to the actual PBF tiles the renderer will load and render in the browser."),Object(i.b)("hr",null),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"In existing Leaflet or Openlayers applications"),", if you do not wish to use a vector layer renderer plugin, you may use the new tiles as raster tiles, i.e. rendered on our server. The styles above are available on the server as raster tiles as well, with tile URLs of the form ",Object(i.b)("inlineCode",{parentName:"p"},"http://tiles.hel.ninja/styles/hel-osm-bright/{z}/{x}/{y}@2x@fi.png"),". Here ",Object(i.b)("inlineCode",{parentName:"p"},"{z}")," is the zoom level, ",Object(i.b)("inlineCode",{parentName:"p"},"{x}")," and ",Object(i.b)("inlineCode",{parentName:"p"},"{y}")," the coordinates (which depend on the zoom level), ",Object(i.b)("inlineCode",{parentName:"p"},"hel-osm-bright")," the name of the style you want to render, ",Object(i.b)("inlineCode",{parentName:"p"},"@2x")," the bitmap size you want (for hi-res displays), and ",Object(i.b)("inlineCode",{parentName:"p"},"@fi")," the language you want rendered. (Do note that most Helsinki place names exist in Openstreetmap only in Finnish and Swedish, so OSM support for other languages is limited and you will get tiles with very little text.)"),Object(i.b)("p",null,"Therefore, getting raster OSM Helsinki map tiles in your existing Leaflet installation is as simple as (in react-leaflet)"),Object(i.b)("pre",null,Object(i.b)("code",n({parentName:"pre"},{}),'render () {\n  const helsinkiCoordinates = [60.192059, 24.945831];\n  const url = "https://tiles.hel.ninja/styles/hel-osm-bright/{z}/{x}/{y}@2x@fi.png" // use the name of your preferred style here\n  return (\n    <Map center={helsinkiCoordinates} zoom={8} minZoom={5} scrollWheelZoom={false}>\n      <TileLayer url={url} />\n    </Map>);\n}\n')),Object(i.b)("hr",null),Object(i.b)("p",null,"If you notice any issues with any of the map styles above, or wish to suggest new features in the map styles, please open an issue or create a PR in the corresponding map style repo: ",Object(i.b)("a",n({parentName:"p"},{href:"https://github.com/City-of-Helsinki/hel-osm-bright"}),"https://github.com/City-of-Helsinki/hel-osm-bright"),", ",Object(i.b)("a",n({parentName:"p"},{href:"https://github.com/City-of-Helsinki/hel-osm-light"}),"https://github.com/City-of-Helsinki/hel-osm-light")," and ",Object(i.b)("a",n({parentName:"p"},{href:"https://github.com/City-of-Helsinki/hel-osm-high-contrast"}),"https://github.com/City-of-Helsinki/hel-osm-high-contrast"),". You may also  fork and create any new map styles suitable for your particular project, and contribute them for everybody in the city to use, if you wish to host them on our tile server."),Object(i.b)("p",null,"Do note that (at least currently) our OSM tiles are only served in the Web Mercator coordinate system (",Object(i.b)("a",n({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Web_Mercator_projection"}),"https://en.wikipedia.org/wiki/Web_Mercator_projection"),", ",Object(i.b)("a",n({parentName:"p"},{href:"https://epsg.io/3857"}),"EPSG:3857"),"), so if you wish to use the local Helsinki coordinate system for exact measurement and representation of local areas and shapes, you will have to keep reading on below."),Object(i.b)("h2",{id:"wmswmts"},"WMS/WMTS"),Object(i.b)("p",null,"These protocols serve traditional Helsinki area maps and bitmaps."),Object(i.b)("p",null,"WMS (Web Map Service) is the Open Geospatial Consortium standard for geocoded PNG, GIF, TIFF etc. bitmap data. The City of Helsinki Urban Environment Geoserver (",Object(i.b)("a",n({parentName:"p"},{href:"https://kartta.hel.fi/ws/geoserver/avoindata/wms?service=wms&version=1.3.0&request=GetCapabilities"}),"https://kartta.hel.fi/ws/geoserver/avoindata/wms?service=wms&version=1.3.0&request=GetCapabilities"),") provides various print map sets as open data. A list of all the open data maps is available at ",Object(i.b)("a",n({parentName:"p"},{href:"https://kartta.hel.fi/avoindata/dokumentit/Aineistolista_wms_avoindata.html"}),"https://kartta.hel.fi/avoindata/dokumentit/Aineistolista_wms_avoindata.html")," . Another source for regional maps is the HSY (Helsinki Region Environmental Services Authority) Geoserver (",Object(i.b)("a",n({parentName:"p"},{href:"https://kartta.hsy.fi/geoserver/wms?service=wms&version=1.3.0&request=GetCapabilities"}),"https://kartta.hsy.fi/geoserver/wms?service=wms&version=1.3.0&request=GetCapabilities"),")."),Object(i.b)("p",null,"Some of these layers are also served ",Object(i.b)("em",{parentName:"p"},"tiled")," for background map use. If the map you want is not served tiled, you may render the layer as a whole using the WMS service, which will be considerably slower, or will have to contact the owner of the Geoserver in question to discuss providing that specific layer tiled for background map purposes."),Object(i.b)("p",null,"The geoservers listed above implement the ",Object(i.b)("em",{parentName:"p"},"tiled")," map standard WMTS, ",Object(i.b)("a",n({parentName:"p"},{href:"https://kartta.hel.fi/ws/geoserver/avoindata/gwc/service/wmts?request=getCapabilities"}),"https://kartta.hel.fi/ws/geoserver/avoindata/gwc/service/wmts?request=getCapabilities")," , whose tiled layers are listed in ",Object(i.b)("a",n({parentName:"p"},{href:"https://kartta.hel.fi/avoindata/dokumentit/Aineistolista_wmts_avoindata.html"}),"https://kartta.hel.fi/avoindata/dokumentit/Aineistolista_wmts_avoindata.html")," . Correspondingly, the HSY tiled map service is at ",Object(i.b)("a",n({parentName:"p"},{href:"https://kartta.hsy.fi/geoserver/gwc/service/wmts?request=getCapabilities"}),"https://kartta.hsy.fi/geoserver/gwc/service/wmts?request=getCapabilities")," ."),Object(i.b)("p",null,"The foremost tiled map sets are the city map series (",Object(i.b)("inlineCode",{parentName:"p"},"Karttasarja_PKS"),") used by default in ",Object(i.b)("a",n({parentName:"p"},{href:"https://kartta.hel.fi"}),"https://kartta.hel.fi"),", the technical detail map (",Object(i.b)("inlineCode",{parentName:"p"},"Kantakartta"),", ",Object(i.b)("a",n({parentName:"p"},{href:"https://kartta.hel.fi/?l=kantakartta"}),"https://kartta.hel.fi/?l=kantakartta"),"), the aerial photograph (",Object(i.b)("inlineCode",{parentName:"p"},"Ortoilmakuva_2018_5cm"),", ",Object(i.b)("a",n({parentName:"p"},{href:"https://kartta.hel.fi/?l=Ortoilmakuva_2018"}),"https://kartta.hel.fi/?l=Ortoilmakuva_2018"),") and the current detail plan (",Object(i.b)("inlineCode",{parentName:"p"},"Ajantasa_asemakaava_maanpaallinen"),", ",Object(i.b)("a",n({parentName:"p"},{href:"https://kartta.hel.fi/?l=Ajantasa_asemakaava_maanpaallinen_varillinen"}),"https://kartta.hel.fi/?l=Ajantasa_asemakaava_maanpaallinen_varillinen"),")."),Object(i.b)("p",null,"Calls to a WMTS server are of the form ",Object(i.b)("inlineCode",{parentName:"p"},"https://kartta.hel.fi/ws/geoserver/avoindata/gwc/service/wmts?layer=avoindata:{layer_name}&tilematrixset=ETRS-GK25&Service=WMTS&Request=GetTile&Version=1.0.0&TileMatrix=ETRS-GK25:{z}&TileCol={x}&TileRow={y}&Format=image/png"),", where ",Object(i.b)("inlineCode",{parentName:"p"},"layer_name")," is any of the above, ",Object(i.b)("inlineCode",{parentName:"p"},"{z}")," is the zoom level (available zoom levels depend on the detail level of the layer; if you encounter blank tiles, try a higher zoom) and ",Object(i.b)("inlineCode",{parentName:"p"},"{x}")," and ",Object(i.b)("inlineCode",{parentName:"p"},"{y}")," the integer coordinates of the map tile. Also, the available format varies depending on the layer type (jpeg for aerial photographs, png otherwise). The applicable coordinate range depends on the zoom level and is returned by the server if you ask for a tile outside the map area. (ETRS-GK25 refers to the official Transverse Mercator coordinate system centered on the City of Helsinki meridian (25 degrees east), internationally known as ",Object(i.b)("a",n({parentName:"p"},{href:"https://epsg.io/3879"}),"EPSG:3879"),", to minimize measurement errors.) Similar calls apply for the HSY WMTS server."),Object(i.b)("hr",null),Object(i.b)("p",null,"What all this boils down to is that there are two steps to get the official map tiles up and running in your UI:"),Object(i.b)("p",null,"1) set up the local coordinate system ETRS-GK25 (a.k.a. ",Object(i.b)("a",n({parentName:"p"},{href:"https://epsg.io/3879"}),"EPSG:3879"),") in your Leaflet instance. This requires defining the Helsinki CRS (Coordinate Reference System) in the format supported by ",Object(i.b)("a",n({parentName:"p"},{href:"https://github.com/kartena/Proj4Leaflet"}),"Proj4Leaflet"),":"),Object(i.b)("pre",null,Object(i.b)("code",n({parentName:"pre"},{}),"import L from 'leaflet';\nimport 'proj4'; // import required for side effect\nimport 'proj4leaflet'; // import required for side effect\n\nexport function EPSG3879() { // eslint-disable-line\n  const crsName = 'EPSG:3879';\n  const projDef = '+proj=tmerc +lat_0=0 +lon_0=25 +k=1 +x_0=25500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs';\n  const bounds = [25440000, 6630000, 25571072, 6761072];\n  const originNw = [bounds.min.x, bounds.max.y];\n  const crsOpts = {\n    resolutions: [256, 128, 64, 32, 16, 8, 4, 2, 1, 0.5, 0.25, 0.125, 0.0625, 0.03125]\n  };\n  return new L.Proj.CRS(crsName, projDef, bounds, crsOpts);\n}\n")),Object(i.b)("p",null,"2) just create the new background map layer (the examples use react-leaflet for simplicity) with the CRS above, Helsinki coordinates and suitable zoom levels and map selection. Please try out the selected zoom levels to check that they are available for the map type you wish to display:"),Object(i.b)("pre",null,Object(i.b)("code",n({parentName:"pre"},{}),'render () {\n  const helsinkiCoordinates = [60.192059, 24.945831];\n  const crs = EPSG3879();\n  const url = "https://kartta.hel.fi/ws/geoserver/avoindata/gwc/service/wmts?layer=avoindata:Karttasarja_PKS&tilematrixset=ETRS-GK25&Service=WMTS&Request=GetTile&Version=1.0.0&TileMatrix=ETRS-GK25:{z}&TileCol={x}&TileRow={y}&Format=image/png" // insert the name of the layer and correct image format here\n  return (\n    <Map center={helsinkiCoordinates} zoom={7} minZoom={4} scrollWheelZoom={false} crs={crs}>\n      <TileLayer url={url} />\n    </Map>);\n}\n')),Object(i.b)("hr",null),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"If the layer you wish to display is not available tiled"),", you may still ",Object(i.b)("a",n({parentName:"p"},{href:"https://leafletjs.com/examples/wms/wms.html"}),"render the entire WMS layer with Leaflet"),", in which case the layer is loaded as a whole, with considerably lower performance:"),Object(i.b)("pre",null,Object(i.b)("code",n({parentName:"pre"},{}),"render () {\n  const helsinkiCoordinates = [60.192059, 24.945831];\n  const crs = EPSG3879();\n  const url = \"https://kartta.hel.fi/ws/geoserver/avoindata/wms?\" // you may use any geoserver you know\n  const wmsOptions = {layers: 'avoindata:Opaskartta_1940'} // comma-separated string of any WMS layer(s) on the geoserver\n  return (\n    <Map center={helsinkiCoordinates} zoom={8} minZoom={5} scrollWheelZoom={false} crs={crs}>\n      <WMSTileLayer url={url} wmsOptions={wmsOptions}/>\n    </Map>);\n}\n")),Object(i.b)("p",null,"You can browse the WMS layers available on any Geoserver e.g. by installing the open source GIS software ",Object(i.b)("a",n({parentName:"p"},{href:"https://docs.qgis.org/testing/en/docs/training_manual/online_resources/wms.html"}),"QGIS"),"; all layers are listed on ",Object(i.b)("a",n({parentName:"p"},{href:"https://kartta.hel.fi/avoindata/dokumentit/Aineistolista_wms_avoindata.html"}),"https://kartta.hel.fi/avoindata/dokumentit/Aineistolista_wms_avoindata.html")," . Our open data portal ",Object(i.b)("a",n({parentName:"p"},{href:"https://hri.fi/data/group/59b85a25-5cf1-4eb8-a0b7-92ffe34efdad?res_format=WMS"}),"HRI")," contains more detailed descriptions on the WMS layers open for public."),Object(i.b)("h2",{id:"wfs"},"WFS"),Object(i.b)("p",null,"In addition to bitmaps, City of Helsinki produces a huge amount of geographical features in vector format. In some of these cases, vector layers (i.e. specific points, linestrings and polygons on a map, with metadata) are published as open data with an Open Geospatial Consortium WFS (Web Feature Service) API."),Object(i.b)("p",null,"The servers that implement WFS are usually the same Geoservers that implement WMS, i.e. ",Object(i.b)("a",n({parentName:"p"},{href:"https://kartta.hel.fi/ws/geoserver/avoindata/wfs?service=wfs&version=1.1.0&request=GetCapabilities"}),"https://kartta.hel.fi/ws/geoserver/avoindata/wfs?service=wfs&version=1.1.0&request=GetCapabilities")," and ",Object(i.b)("a",n({parentName:"p"},{href:"https://kartta.hsy.fi/geoserver/wfs?service=wfs&version=1.1.0&request=GetCapabilities"}),"https://kartta.hsy.fi/geoserver/wfs?service=wfs&version=1.1.0&request=GetCapabilities")," . These layers can be listed and displayed e.g. with ",Object(i.b)("a",n({parentName:"p"},{href:"https://docs.qgis.org/testing/en/docs/training_manual/online_resources/wfs.html"}),"QGIS"),"."),Object(i.b)("p",null,"Interesting datasets include many of the polygon features you can plot on ",Object(i.b)("a",n({parentName:"p"},{href:"http://kartta.hel.fi"}),"http://kartta.hel.fi"),", such as city divisions (",Object(i.b)("a",n({parentName:"p"},{href:"https://kartta.hel.fi/?l=Karttasarja%2Ckaupunginosat"}),"https://kartta.hel.fi/?l=Karttasarja%2Ckaupunginosat"),", ",Object(i.b)("inlineCode",{parentName:"p"},"avoindata:Kaupunginosajako")," on WFS), plots as polygons (",Object(i.b)("a",n({parentName:"p"},{href:"https://kartta.hel.fi/?l=kiinteistoalueet_set"}),"https://kartta.hel.fi/?l=kiinteistoalueet_set"),", ",Object(i.b)("inlineCode",{parentName:"p"},"avoindata:Kiinteistot_alue")," on WFS), buildings as polygons (",Object(i.b)("a",n({parentName:"p"},{href:"https://kartta.hel.fi/?l=Karttasarja%2CRakennukset_alueina"}),"https://kartta.hel.fi/?l=Karttasarja%2CRakennukset_alueina"),", ",Object(i.b)("inlineCode",{parentName:"p"},"avoindata:Rakennukset_alue_rekisteritiedot")," on WFS) and all manner of public areas such as parks, streets, benches, trashcans (various layers on ",Object(i.b)("a",n({parentName:"p"},{href:"https://kartta.hel.fi/"}),"https://kartta.hel.fi/"),", ",Object(i.b)("inlineCode",{parentName:"p"},"avoindata:YLRE_Viheralue_alue")," etc. on WFS). Descriptions of specific layers can often be found on our open data portal ",Object(i.b)("a",n({parentName:"p"},{href:"https://hri.fi/data/group/59b85a25-5cf1-4eb8-a0b7-92ffe34efdad?res_format=WFS"}),"HRI"),", and a list of all layers is at ",Object(i.b)("a",n({parentName:"p"},{href:"https://kartta.hel.fi/avoindata/dokumentit/Aineistolista_wfs_avoindata.html"}),"https://kartta.hel.fi/avoindata/dokumentit/Aineistolista_wfs_avoindata.html")," ."),Object(i.b)("hr",null),Object(i.b)("p",null,"If you want to include these features in your UI, you have two options:"),Object(i.b)("p",null,"1) If the feature is essential to the operation of your service and needs to be present in your backend REST API, consider using our backend ",Object(i.b)("a",n({parentName:"p"},{href:"https://github.com/City-of-Helsinki/django-munigeo"}),"https://github.com/City-of-Helsinki/django-munigeo")," library in your API project to bring this vector data into your backend database. The ",Object(i.b)("inlineCode",{parentName:"p"},"django-munigeo")," library supports importing many of the aforementioned geometries already, or you may create a PR to include support for importing that specific layer in ",Object(i.b)("inlineCode",{parentName:"p"},"django-munigeo"),". The backend may then serve the needed features to your Leaflet UI in Geojson, or any geospatial processing (such as location queries) can indeed be done with API calls to your own backend."),Object(i.b)("p",null,"2) If you merely wish to display the feature to the user in the UI, but do not need this data in the backend, you may display a WFS layer directly in Leaflet with the ",Object(i.b)("a",n({parentName:"p"},{href:"http://flexberry.github.io/Leaflet-WFST/"}),"Leaflet-WFST")," plugin, though we haven't tested it yet. The plugin seems to lack React support, so you would have to do this the old-fashioned way, i.e."),Object(i.b)("pre",null,Object(i.b)("code",n({parentName:"pre"},{}),"var layer = new L.WFS({\n    url: 'https://kartta.hel.fi/ws/geoserver/avoindata/wfs?',\n    typeNS: 'avoindata',\n    typeName: 'Kaupunginosajako',\n    crs: EPSG3879(),\n    style: {\n        color: 'blue',\n        weight: 2\n    }\n})\n")))}p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"docs/resources/maps.md"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---docs-resources-maps-md-0100ae0d3c2399e2a023.js.map