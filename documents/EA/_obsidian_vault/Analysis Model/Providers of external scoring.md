---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Business Rules/Product"
domain: "Analysis Model"
element_id: 1822844
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Providers of external scoring

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Business Rules/Product

## 📝 Notes

For each specified provider request is send in defined order.

KZ:

	
- generate new UUID (UUID version 4)
	
- System sends request ConsentManagementWS.SendConsentEnquiryRequest to Beeline
- phoneNumber - PRIMARY_MOBILE in AF
- externalId = UUID 
- operator = BEELINE
	
- If response from previous provider is different from "ctn in BlackList", then system sends request ConsentManagementWS.SendConsentEnquiryRequest to Kcell
- phoneNumber - PRIMARY_MOBILE in AF
- externalId = UUID
- operator = KCELL

## 🔗 Connections (1)

- ← Dependency: [[01.061 Send information to client by sms to process application form (UseCase 1821364)]]

## 📊 Appears In (1 diagrams)

- Custom: Product business rules
