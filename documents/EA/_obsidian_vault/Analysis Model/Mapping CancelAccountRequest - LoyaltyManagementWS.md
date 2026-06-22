---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Loyalty system/Mapping rules"
domain: "Analysis Model"
element_id: 1032984
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Mapping CancelAccountRequest - LoyaltyManagementWS

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Loyalty system/Mapping rules

## 📝 Notes

This rule describes mapping data from contract and relates entities to CancelAccountRequest which used in LoyaltyManagementWS.

Input: 
- Contract

Mapping to CreateAccountRequest:
- externalAccountSource = ACM
- externalAccountNumber = Contract.Credit Account Number

## 🔗 Connections (1)

- ← Dependency: [[CancelAccountRequest]]

## 📊 Appears In (1 diagrams)

- Custom: LoyaltyManagementWS - mapping rules
