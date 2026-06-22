---
type: Class
stereotype: "resource"
package: "HomerSelect/BSL/Modules/Client center (CLC)/Interface Consumed/REST/{DEL}OSB/v1.0/getCommunicationHistory"
domain: "Modules"
element_id: 1814002
diagrams: 1
connections: 0
tags:
  - class
  - modules
---

# 🔷 {ADD}getCommunicationHistory

> **Type**: Class · **Stereotype**: «resource»
> **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Interface Consumed/REST/{DEL}OSB/v1.0/getCommunicationHistory

## 📝 Notes

{ADD CLM-3702}

curl --location --request POST 'https://osb.id00c1.id.infra/CLC/CommunicationHistoryRestService_v1' \
--header 'Authorization: Basic Y2xjX3VzZXI6Y2xjX3VzZXI=' \
--header 'Content-Type: application/json' \
--data-raw '{
    "cuid": 693073,
    "fromDate": "2020-04-21T22:00:00.000Z",
    "toDate": "2021-04-22T22:00:00.000Z",
    "unavailableSystem": [
        {
            "system": "VBOT"
        },
        {
            "system": "BSL"
        },
        {
            "system": "CCH"
        },
        {
            "system": "LCS"
        }
    ]
}'

## 📊 Appears In (1 diagrams)

- Logical: getCommunicationHistory
