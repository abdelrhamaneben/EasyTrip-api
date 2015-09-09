**Show Categories**
----
  Returns json data about all categories.


* **URL**

  /categories


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
