---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Loyalty system/Mapping rules"
domain: "Analysis Model"
element_id: 1032985
diagrams: 1
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Mapping CreateAccountRequest - LoyaltyManagementWS

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Loyalty system/Mapping rules

## 📝 Notes

This rule describes mapping data from contract and relates entities to CreateAccountRequest which used in LoyaltyManagementWS.

Input: 
- Contract

Mapping to CreateAccountRequest:
- externalAccountSource = ACM
- externalAccountNumber = Contract.Credit Account Number
- contractCode = Contract.code
- externalAccountCurrency = Contract->Product.currency
- customer = Contract->Deal->Client.CUID
- billingCycleFirstDay = Contract->Financial Parameters.Billing Date
- schemaCode = Contract->Contract Service->Loyalty Service.Reward Scheme  ...only one Loyalty Service should be associated

## 🔗 Connections (2)

- ← Dependency: [[CreateAccountRequest]]
- → Dependency: [[01.180 Sign contract manually (UseCase 1878503)]]

## 📊 Appears In (1 diagrams)

- Custom: LoyaltyManagementWS - mapping rules
