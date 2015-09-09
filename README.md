#
# EasyTrip API
#

## Initialize package dependencies

```
cd api/
npm install
```

## Launch server

```
cd api/bin/
./www
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
