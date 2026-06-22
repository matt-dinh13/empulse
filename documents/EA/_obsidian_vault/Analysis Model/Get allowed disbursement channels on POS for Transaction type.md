---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Sales Network Management/Salesroom/COMMON for Salesroom/Business Rules/Common for all variants"
domain: "Analysis Model"
element_id: 1627477
diagrams: 1
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Get allowed disbursement channels on POS for Transaction type

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/Salesroom/COMMON for Salesroom/Business Rules/Common for all variants

## 📝 Notes

Input:
- Product_Transaction_Type
- Salesroom
- Product_Type

Algorithm:
List of disbursement channels for salesroom / partner:
If at least one disbursement channel is defined for salesroom, then salesroom's channels will be used. Otherwise partner's channels will be used.
Salesroom's channels:

	
- All channels (PAYMENT_CHANNEL_TYPE) for whose exists relation between that particular channel type, product type, transaction type and appropriate salesroom (exists record in SALESROOM_DISBURSEMENT_CHANNEL)

Partner's channels:

	
- All channels (PAYMENT_CHANNEL_TYPE) for whose exists relation between that particular channel type, product type, transaction type and appropriate partner (exists record in PARTNER_DISBURSEMENT_CHANNEL) 


Output:
List of allowed Payment channel types

## 🔗 Connections (2)

- → Dependency: [[REQ#2 Create Revolving transaction supplement]]
- ← Dependency: [[Remotely created application to process]]

## 📊 Appears In (1 diagrams)

- Custom: Get Salesroom Properties - business rules
