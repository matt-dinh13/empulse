---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Value Added Services (VAS)/Analytical Model/VAS Deal/Use Case Model"
domain: "Modules"
element_id: 1827546
diagrams: 3
connections: 1
tags:
  - requirement
  - modules
---

# 📋 Get Expected date of Billing period

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Analytical Model/VAS Deal/Use Case Model

## 📝 Notes

This rule describes obtaining expected future billing date needed to determining end of insurance period

Input:

	
- billingDay
	
- ReferenceDate


Output:

	
- ExpectedBillingDate (Date)


ExpectedBillingDate = billingDay + Month(ReferenceDate) + Year(ReferenceDate)
If ReferenceDate >= ExpectedBillingDate then add month to ExpectedBillingDate

## 🔗 Connections (1)

- ← Dependency: [[11.040 Activate Deal (VAS)]]

## 📊 Appears In (3 diagrams)

- Use Case: Activate Deal - Use Case Model
- Use Case: CSI-2918 VAS Deal activation method
- Use Case: Deal management - Use Case Model
