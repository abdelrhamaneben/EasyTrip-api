# API
## Base URL
`/v1/<resources>`
## URL
`GET` */categories* <br />
`GET` */categories/:id/activities* <br />
`GET` */services/:id* <br />
`GET` */search*

----

## Show Categories
Returns json data about all categories.
### URL
/categories
### Method
`GET`
### URL Params
None
### Data Params
None
### Success Response
**Code:** 200 OK <br />
**Content:**
```
{
    categories: [
        {
            "id": 12,
            "name": "Sport extrême"
        },
        {
            "id": 23,
            "name": "Plage"
        }
    ]
}
```
### Error Response
**Code:** 444 NO RESPONSE <br />
**Content:** `{ "error" : "No data" }`

----

## Show Activities for a category
Returns json data about all activities of one category.
### URL
/categories/:id/activities
### Method
`GET`
### URL Params
`id=[number]`
### Data Params
None
### Success Response
**Code:** 200 OK <br />
**Content:**
```
{
    activities: [
        {
            "id": 12,
            "name": "Parachutisme"
        },
        {
            "id": 23,
            "name": “Fumnambulisme”
        }
    ]
}
```
### Error Response
**Code:** 404 NOT FOUND <br />
**Content:** `{ "error" : "Category doesn't exist" }`

**Code:** 444 NO RESPONSE <br />
**Content:** `{ "error" : "No data" }`

----

## Show Services
Returns json data about a service.
### URL
/services/:id
### Method:
`GET`
### URL Params
`id=[number]`
### Data Params
None
### Success Response
**Code:** 200 OK <br />
**Content:**
```
{
    id: 23,
    name: “Plongée sous-marine”,
    description: “Les requins vous fascinent ?",
    pos-geo: {
        "lat": "51.05",
        "lon": "2.3667"
    },
    address: {
        "street: "Rue de la mer",
        "num1": "23",
        "num2": "",
        "city": "Dunkerque",
        "zip-code": "59240",
        "country-code": "33"
    },
    contact-up: {
        "firstname": "Michel",
        "lastname": "DUMONT",
        "tel": "0600000000",
        "email": "michel.dumont@example.com"
    },
    contact-ue: {
        "firstname": "Michel",
        "lastname": "DUMONT",
        "tel": "0600000000",
        "email": "michel.dumont@example.com"
    }
}
```
### Error Response
**Code:** 404 NOT FOUND <br /> 
**Content:** `{ "error" : "Service doesn't exist" }`

----

## Search for Services
Returns json data about services available in area for a category or an activity.
### URL
/search
### Method
`GET`
### URL Params
None
### Data Params
`activity=[number]` <br />
`city=[string]` <br />
`category=[number]` <br />
`area=[number] in minute` <br />

**Content:**
```
{
    "city": "Dunkerque",
    "category": 24,
    "area": 60,
    ["activity": 23]
}
```
### Success Response
**Code:** 200 OK <br />
**Content:**
```
{
    services: [
        {
            "id": 23,
            "name": “Plongée sous-marine”,
            "description": “Les requins vous fascinent ?",
            "pos-geo": {
                "lat": "51.05",
                "lon": "2.3668"
            }
        },
        {
            "id": 48,
            "name": “Plongée en mer”,
            "description": “Découvrez le grand bleu !",
            "pos-geo": {
                "lat": "51.05",
                "lon": "2.3668"
            }
        }
    ]
}
```
### Error Response
**Code:** 404 NOT FOUND <br />
**Content:** `{ "error" : "Category or activity doesn't exist" }`

**Code:** 444 NO RESPONSE <br />
**Content:** `{ "error" : "No data" }`
