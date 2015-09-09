#
# EasyTrip API
#

## Initialize package dependencies

```
npm install
```

## Launch server

```
npm start
```

Go to http://0.0.0.0:3000


## Requests spec

| TYPE     | PATH               | PARAMETERS         | REPLY  
| ---------|:------------------:|:------------------:| -------------------:
| GET      | /                  |                	 | 
| GET      | /v1/themes         |                    |
| GET      | /v1/activities     |                    |
| GET      | /v1/services       |                    |



## DataBusinessObject Structure

	theme : {
		id: Integer ,
    		name: String
	}

	activity : {
		id: Integer ,
    		name: String ,
    		theme : object
	}

	service: {
		id: Integer ,
    		activity : object ,
    		amount: Double ,
		localisation: String ,
		contact: String
	}
