---
type: Requirement
stereotype: "Business rule"
package: "HomerSelect/BSL/Analysis Model/Sales Network Management/COMMON for Sales Network Management/SN Address/Use Case"
domain: "Analysis Model"
element_id: 924099
diagrams: 1
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 SNM Address rules

> **Type**: Requirement · **Stereotype**: «Business rule»
> **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/COMMON for Sales Network Management/SN Address/Use Case

## 📝 Notes

For partner:

	
- If address type is set to “Registration”(REG) no other address of the same type exists.
	
- At least one address of type "Registration" is mandatory in status "Active"


For salesroom:

	
- If address type is set to “Business place”(BP) no other address of same type exists.
	
- At least one address of type "Business place" is mandatory in status "Active" (MSG_037)

## 🔗 Connections (2)

- ← Dependency: [[09.090 Create address]]
- ← Dependency: [[09.100 Update address]]

## 📊 Appears In (1 diagrams)

- Use Case: Manage addresses
