**Show Services**
----
  Returns json data about a service.


* **URL**

  /services/:id


* **Method:**

  `GET`


*  **URL Params**

  **Required:**

    `id=[number]`


* **Data Params**

  None


* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:**
    ```
    {
        id: 23,
        name: “Plongée sous-marine”,
        description: “Les requins vous fascinent ?",
        pos-geo: {
            lat: "51.05",
            lon: "2.3667"
        },
        address: {
            street: "Rue de la mer",
            num1: "23",
            num2: "",
            city: "Dunkerque",
            zip-code: "59240",
            country-code: "33"
        },
        contact-up: {
            firstname: "Michel",
            lastname: "DUMONT",
            tel: "0600000000",
            email: "michel.dumont@example.com"
        },
        contact-ue: {
            firstname: "Michel",
            lastname: "DUMONT",
            tel: "0600000000",
            email: "michel.dumont@example.com"
        }
    }```


* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "Service doesn't exist" }`


**Search for Services**
----
  Returns json data about services available in area.


* **URL**

  /services/?... //TODO


* **Method:**

  `GET`


*  **URL Params**

    **Required:**

      `lat=[number]` <br />
      `lon=[number]` <br />
      `cat=[string]` <br />
      `act=[string]` <br />


* **Data Params**

    None


* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:**
    ```
    {
        services: [
            {
                id: 23,
                name: “Plongée sous-marine”,
                description: “Les requins vous fascinent ?",
                pos-geo: {
                    lat: "51.05",
                    lon: "2.3668"
                }
            },
            {
                id: 48,
                name: “Char à voile”,
                description: “Sur les Dunes de Flandre !",
                pos-geo: {
                    lat: "51.05",
                    lon: "2.3668"
                }
            }
        ]
      }```


* **Error Response:**

    * **Code:** 404 NOT FOUND <br />
      **Content:** `{ error : "Category or activity doesn't exist" }`

    * **Code:** 444 NO RESPONSE <br />
      **Content:** `{ error : "No data" }`
