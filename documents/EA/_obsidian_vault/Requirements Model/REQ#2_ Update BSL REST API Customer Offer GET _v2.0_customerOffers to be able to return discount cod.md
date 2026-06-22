---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-11243 (BRPH-2800) Discount Voucher: Apply Discounts in POS Loan Application"
domain: "Requirements Model"
element_id: 1881352
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#2: Update BSL REST API Customer Offer GET /v2.0/customerOffers to be able to return discount code, discount amount and Discounted Total Goods Price in its response body

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-11243 (BRPH-2800) Discount Voucher: Apply Discounts in POS Loan Application

## 📝 Notes

{ADD LOR-11243} Update list of enums in code for AMOUNT, CODE (parameters[].arguments[].code parameter) and DISCOUNT (parameters[].type parameter) {/ADD}

Response body Example:
"parameters": [ (already existed)
    {
      "arguments": [
        {
         "code": "AMOUNT",           
         "value": "string"           
        },
        { 
         "code": "CODE",           
         "value": "string"         
        }
      ],
      "type": "DISCOUNT"
    }
  ],
"discountedTotalPrice: "string" (implemented by this requirement)

## 📊 Appears In (1 diagrams)

- Custom: LOR-11243 (BRPH-2800) Discount Voucher: Apply Discounts in POS Loan Application
