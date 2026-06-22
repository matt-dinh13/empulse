---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Sales Network Management/Salesroom/COMMON for Salesroom/Business Rules/Common for all variants"
domain: "Analysis Model"
element_id: 1627475
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Get allowed Product Transaction Types on POS for Product Type

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/Salesroom/COMMON for Salesroom/Business Rules/Common for all variants

## 📝 Notes

Input:
- Salesroom
- Product_Type

Algorithm:
List of transaction types for salesroom / partner:
If at least one disbursement channel is defined for salesroom, then salesroom's channels will be used. Otherwise partner's channels will be used.
Salesroom's channels:

	
- All transaction types (PRODUCT_TRANSACTION_TYPE) for whose exists relation between that product type, transaction type and appropriate salesroom (exists record in SALESROOM_DISBURSEMENT_CHANNEL)

Partner's channels:

	
- All transaction types (PRODUCT_TRANSACTION_TYPE) for whose exists relation between that product type, transaction type and appropriate partner (exists record in PARTNER_DISBURSEMENT_CHANNEL) 


Output:
List of allowed Product transaction types

## 🔗 Connections (1)

- → Dependency: [[REQ#2 Create Revolving transaction supplement]]

## 📊 Appears In (1 diagrams)

- Custom: Get Salesroom Properties - business rules
