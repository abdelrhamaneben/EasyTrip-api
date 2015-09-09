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


## API Documentation

See doc folder.

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
