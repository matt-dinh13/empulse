---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/Adding Insurance on running contract/Use Case Model"
domain: "Analysis Model"
element_id: 1876170
diagrams: 3
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Expected date of Billing period

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/Adding Insurance on running contract/Use Case Model

## 📝 Notes

This rule describes obtaining expected future billing date needed to determining end of insurance period

Input:

	
- Contract
	
- ReferenceDate


Output:

	
- ExpectedBillingDate (Date)


ExpectedBillingDate = Contract->Financial Parameters.Billing Day + Month(ReferenceDate) + Year(ReferenceDate)
If ReferenceDate >= ExpectedBillingDate then add month to ExpectedBillingDate

## 🔗 Connections (2)

- ← Dependency: [[11.772 Activate insurance on Contract event notification]]
- ← Dependency: [[08.345 Add Insurance on Contract (UseCase 1879841)]]

## 📊 Appears In (3 diagrams)

- Use Case: Adding Insurance Service on REL contract
- Use Case: Insurance based on EOM message
- Use Case: Insurance on REL Contract management
