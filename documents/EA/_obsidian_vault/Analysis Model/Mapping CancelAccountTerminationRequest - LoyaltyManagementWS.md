---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Loyalty system/Mapping rules"
domain: "Analysis Model"
element_id: 1032987
diagrams: 1
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Mapping CancelAccountTerminationRequest - LoyaltyManagementWS

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Loyalty system/Mapping rules

## 📝 Notes

This rule describes mapping data from contract and relates entities to CancelAccountTerminationRequest which used in LoyaltyManagementWS.

Input: 
- Contract

Mapping to CancelAccountTerminationRequest:
- externalAccountSource = ACM
- externalAccountNumber = Contract.Credit Account Number

## 🔗 Connections (2)

- ← Dependency: [[CancelAccountTerminationRequest]]
- ← Dependency: [[01.172 Cancel REL contract termination request manually (UseCase 1852812)]]

## 📊 Appears In (1 diagrams)

- Custom: LoyaltyManagementWS - mapping rules
