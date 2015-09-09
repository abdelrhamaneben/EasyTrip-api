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
        categories: [
            {
                id: 12,
                name: "Sport",
                description: “Défouloir”
            },
            {
                id: 23,
                name: "Voyage",
                description: “Dépaysement”
            }
        ]
    }```


* **Error Response:**

  * **Code:** 444 NO RESPONSE <br />
    **Content:** `{ error : "No data" }`
