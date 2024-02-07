---
sidebar_position: 2
---

# Basic Flow 

Below is the sequence of API calls to create a merchant and assign a terminal to the newly created merchant.

1. [Authenticate against the API](/tmsapi/login)
2. [Create terminals](/tmsapi/create-unassigned-terminal)
3. [Create a merchant](/tmsapi/create-merchant)
4. [Assign a terminal to a merchant](/tmsapi/assign-terminal)
5. [Publish the terminal config to the gateway](/tmsapi/publish-terminal)

After step 5. the payment terminal is ready to take transactions, it will download its necessary configuration upon starting up. 
      