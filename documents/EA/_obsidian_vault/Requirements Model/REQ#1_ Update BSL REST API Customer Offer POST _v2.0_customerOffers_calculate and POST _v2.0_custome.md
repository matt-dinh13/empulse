---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-11243 (BRPH-2800) Discount Voucher: Apply Discounts in POS Loan Application"
domain: "Requirements Model"
element_id: 1881354
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#1: Update BSL REST API Customer Offer POST /v2.0/customerOffers/calculate and POST /v2.0/customerOffers/recalculate to be able to receive and save discount code and discount amount in its request body 

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-11243 (BRPH-2800) Discount Voucher: Apply Discounts in POS Loan Application

## 📝 Notes

{ADD LOR-11243} Update enum in code for AMOUNT, CODE (parameters[].arguments[].code parameter) and DISCOUNT (parameters[].type parameter) {/ADD}

Request Body Example:
"parameters": [
    {
      "arguments": [
       {"code": "AMOUNT",           
        "value": ==discount amount==         
       },
       {"code": "CODE",           
        "value": ==discount code==         
       }
      ],
      "type": "DISCOUNT"
    }
]

## 📊 Appears In (1 diagrams)

- Custom: LOR-11243 (BRPH-2800) Discount Voucher: Apply Discounts in POS Loan Application
