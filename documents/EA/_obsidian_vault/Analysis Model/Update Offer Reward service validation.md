---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Offer Management/Validation rules"
domain: "Analysis Model"
element_id: 1692197
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Update Offer Reward service validation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Offer Management/Validation rules

## 📝 Notes

- code - only values of CEL Reward services assigned to the offer(Product Offer Response- >Offer Financial Parameters-> Offer Service -> Service[Service type=CELREW].Code) are accepted
	
- rewardPaymentMethod - Mandatory, the value must one of the Reward payment method type enumeration (EXTRA_LOAN_REPAYMENT, DEBIT_CARD, CURRENT_ACCOUNT)

## 🔗 Connections (1)

- ← Dependency: [[{MOD}01.170 Update offer externally]]

## 📊 Appears In (1 diagrams)

- Custom: Validation rules
