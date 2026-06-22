---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-11243 (BRPH-2800) Discount Voucher: Apply Discounts in POS Loan Application"
domain: "Requirements Model"
element_id: 1881355
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#3: Update BSL REST API Financial parameters Endpoint V2 GET /v2.0/financial-parameters/detail to be able to return discount code, discount amount and Discounted Total Goods Price in its response body 

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-11243 (BRPH-2800) Discount Voucher: Apply Discounts in POS Loan Application

## 📝 Notes

{ADD LOR-11243} Update list of enums in code for DISCOUNT (financialParametersItems[].itemType parameter) {/ADD}

Response body Example:
"financialParametersItems": [ (already exists)
   {       
     "itemAmount": 0,       
     "itemCode": "string",       
     "itemType": "DISCOUNT"     
   }
],
"discountedGoodsPriceAmount: "string" (implemented by this requirement)

## 📊 Appears In (1 diagrams)

- Custom: LOR-11243 (BRPH-2800) Discount Voucher: Apply Discounts in POS Loan Application
