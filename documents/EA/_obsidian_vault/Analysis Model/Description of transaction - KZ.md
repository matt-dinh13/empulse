---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Account management/Account detail/Business rule"
domain: "Analysis Model"
element_id: 1154708
diagrams: 2
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Description of transaction - KZ

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Account management/Account detail/Business rule

## 📝 Notes

Country specific for KZ: 

If any of these values
- AccountItem.cardAcceptorCity
- AccountItem.cardAcceptroName
- AccountItem.cardAcceptorState 
- AccountItem.cardAcceptorCountryCode

are send from CABUS, system fills in Description <AccountItem.cardAcceptroName>,<AccountItem.cardAcceptorCity>,<AccountItem.cardAcceptorState>, <AccountItem.cardAcceptorCountryCode>.

Else display translated value of BasicAccountItem.tariffItemtypeCode

## 🔗 Connections (1)

- → Generalization: [[Description of transaction]]

## 📊 Appears In (2 diagrams)

- Custom: Business rule
- Custom: CBL-9554 (CLM-3032) CREL Payhol - show new tariffs in transaction history
