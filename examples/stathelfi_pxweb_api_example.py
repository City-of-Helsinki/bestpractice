# -*- coding: utf-8 -*-
"""
Created on Wed Nov 10 13:01:58 2021
@author: cbergroth
Thanks to SSB: https://www.ssb.no/en/omssb/tjenester-og-verktoy/api/px-api/_attachment/425961?_ts=1730eb9c350

DEMO: fetch data from Aluesarjat statistical database using stat.hel.fi PxWeb API and plot data

"""

#----------------------------------------------
''' IMPORT NECESSARY MODULES '''
#----------------------------------------------

from pyjstat import pyjstat
import requests
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns


#----------------------------------------------
''' QUERY '''
#----------------------------------------------

#url
POST_URL = "https://stat.hel.fi:443/api/v1/fi/Aluesarjat/vrm/vaerak/umkun/Hginseutu_VA_VR01_Vakiluku_ika.px"


json_q = {
  "query": [
    {
      "code": "Alue",
      "selection": {
        "filter": "item",
        "values": [
          "091"
        ]
      }
    },
    {
      "code": "Sukupuoli",
      "selection": {
        "filter": "item",
        "values": [
          "all"
        ]
      }
    },
    {
      "code": "Ikä",
      "selection": {
        "filter": "item",
        "values": [
          "99V"
        ]
      }
    },
    #select all years that end with 0
    {
      "code": "Vuosi",
      "selection": {
        "filter": "all",
        "values": [
          "*0"
        ]
      }
    }
  ],
  "response": {
    "format": "json-stat"
  }
}

# Post query
result = requests.post(POST_URL, json=json_q)

# Read JSON-stat result using pyjstat
ds = pyjstat.Dataset.read(result.text)

# save as pandas dataframe
df = ds.write('dataframe')


#----------------------------------------------
''' PROCESS DATA '''
#----------------------------------------------

#if needed, we will skip this step.

#----------------------------------------------
''' PLOT DATA '''
#----------------------------------------------

sns.set_style("whitegrid")

#create simple lineplot
ax = sns.lineplot(x = df['Vuosi'], y = df['value'])
ax.set(xlabel='Year', ylabel='Population')
ax.set_title('DEMO PLOT')
plt.ylim(0)
plt.show()
