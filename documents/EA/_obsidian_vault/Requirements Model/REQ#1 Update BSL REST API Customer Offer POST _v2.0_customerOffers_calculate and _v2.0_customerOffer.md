---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-11252 (BRPH-2797) Trade-In Amount as part of Down payment in BSL Product Calculator"
domain: "Requirements Model"
element_id: 1881360
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#1 Update BSL REST API Customer Offer POST /v2.0/customerOffers/calculate and /v2.0/customerOffers/recalculate to be able to receive and save trade-in amount in its request body

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-11252 (BRPH-2797) Trade-In Amount as part of Down payment in BSL Product Calculator

## 📝 Notes

{ADD LOR-11252} Update enum in code for AMOUNT (parameters[].arguments[].code parameter) and TRADE_IN (parameters[].type parameter) {/ADD}

Request Body Example:
"parameters": [
    {
      "arguments": [
        {
          "code": "AMOUNT",
          "value": ==trade-in amount==
        }     
     ],
      "type": "TRADE_IN"
    },
  ]

## 📊 Appears In (1 diagrams)

- Custom: LOR-11252 (BRPH-2797) Trade-In Amount as part of Down payment in BSL Product Calculator
