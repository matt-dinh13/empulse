---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-11252 (BRPH-2797) Trade-In Amount as part of Down payment in BSL Product Calculator"
domain: "Requirements Model"
element_id: 1881361
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#2 Update BSL REST API Customer Offer GET /v2.0/customerOffers to be able to return trade-in amount and Remaining cash payment in its response body

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-11252 (BRPH-2797) Trade-In Amount as part of Down payment in BSL Product Calculator

## 📝 Notes

{ADD LOR-11252} Update list of enums in code for AMOUNT (parameters[].arguments[].code parameter) and TRADE_IN (parameters[].type parameter) {/ADD}

Response body Example:
"parameters": [ (already exists)
    {
      "arguments": [
        {
          "code": "AMOUNT",
          "value": "string"  
        }
      ],
      "type": "TRADE_IN"
    },
  ]
"remainingCashPayment": "string" (to be created)

## 📊 Appears In (1 diagrams)

- Custom: LOR-11252 (BRPH-2797) Trade-In Amount as part of Down payment in BSL Product Calculator
