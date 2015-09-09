**Show Activities**
----
  Returns json data about all activities.


* **URL**

  /activities


* **Method:**

  `GET`


*  **URL Params**

  None


* **Data Params**

  None


* **Success Response:**

  * **Code:** 200 <br />
    **Content:**
    ```
    {
        activities: [
            {
                id: 12,
                name: "Sport extrême",
                description: “Sensationnel”
            },
            {
                id: 23,
                name: "Plage",
                description: “Ensoleillé”
            }
        ]
    }```


* **Error Response:**

  * **Code:** 444 NO RESPONSE <br />
    **Content:** `{ error : "No data" }`
