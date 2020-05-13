---
name: Statistics
menu: APIs
route: /apis/statistics
---


# Statistics

Query the city's statistical databases

* API location: [dev.hel.fi/stats/resources/](http://dev.hel.fi/stats/resources/](http://dev.hel.fi/stats/resources/](http://dev.hel.fi/stats/resources/)

## Documentation

The [API documentation](http://dev.hel.fi/stats/) is primarily in Finnish. English descriptions are found below.

More detailed information and installation instructions can be found in the Github page of statcubeserver, which is a thin wrapper around the datafile-handler pydatacube.

Browse datasets with a browser: 

```
    /browser/
```

Preview a dataset and see available methods: 

```
    /browser/?resource=[resource uri]
```

Get available datasets: 

```
    /resources/
```

Get dataset metadata and methods: 

```
    /resources/[resource id]
```

Get a filtered dataset: 

```
    /resources/[resource_id]/filter[&col1=cat1,cat2&col2=cat3 ...
```

Get dataset's data (can be filtered) as "entries": 

```
    /resources/[dataset path]/entrie
```

Get data as "table": 

```
    /resources/[dataset path]/table[?start=firstrow&end=lastrow
```

Get data as "columns": 

```
    /resources/[dataset path]/column
```

Get grouped data ("pivot") as columns: 

```
    /resources/[dataset path]/group_for_columns?as_values=[col1,col2...
```

Get data as JSON-stat: 

```
    /resources/[dataset path]/jsonsta
```
