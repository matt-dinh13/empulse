---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Business rules"
domain: "Analysis Model"
element_id: 1772622
diagrams: 1
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Is offer unblock

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Business rules

## 📝 Notes

Inputs:

	
- marketing_offer_id


Output: 

	
- error message - optional


System checks if the marketing offer is not already blocked or deactivated (call respective REST API provided by Offer Store module (i.e. GET Offer) with marketing_offer_id on input and check response OFS.Get.Offers.status<>ACTIVE).
If yes, then error message MSG_INCONSISTENT_MARKETING_OFFER is return in output.

## 🔗 Connections (2)

- ← Dependency: [[01.311 Update offer to application and evaluate (UseCase 1879293)]]
- ← Dependency: [[01.095 Create and evaluate application]]

## 📊 Appears In (1 diagrams)

- Custom: Business rules
