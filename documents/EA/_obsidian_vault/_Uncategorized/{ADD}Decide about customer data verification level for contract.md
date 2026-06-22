---
type: Requirement
stereotype: "Functional"
package: ""
domain: "_Uncategorized"
element_id: 1688811
diagrams: 0
connections: 1
tags:
  - requirement
  - _uncategorized
---

# 📋 {ADD}Decide about customer data verification level for contract

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: N/A

## 📝 Notes

{ADD CLM-3051/}
For all entities except the phone numbers of customer's related persons, system uses verificationLevel = 7

For the phone numbers of customer's related persons:

a) If global parameter customerData.customRelatedPersonPhoneNumberVerificationLevelEnabled = TRUE, then system uses verificationLevel = value of global parameter customerData.customRelatedPersonPhoneNumberVerificationLevelValue.

b) Otherwise system uses verificationLevel = 7

## 🔗 Connections (1)

- ← Dependency: [[06.021 Update client data from contract]]
