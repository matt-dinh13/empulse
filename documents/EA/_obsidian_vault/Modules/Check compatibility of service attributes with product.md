---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Service Assignment/User Interface"
domain: "Modules"
element_id: 1803036
diagrams: 2
connections: 2
tags:
  - requirement
  - modules
---

# 📋 Check compatibility of service attributes with product

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Service Assignment/User Interface

## 📝 Notes

Allow only services which satisfy following conditions:

MCTACC

	
- If ProductProfile.ProductType = CEL or SAI then no MTCACC service are displayed.
	
- If ProductProfile.ProductType = REL and ProductProfile.IsDebit = true then only MTCACC with MTCACC.AccountType = CURRENT_ACCOUNT are displayed.
	
- If ProductProfile.ProductType = REL and ProductProfile.IsDebit = false then only MTCACC with MTCACC.AccountType NOT in CURRENT_ACCOUNT) are displayed.

## 🔗 Connections (2)

- ← Dependency: [[Assign Services]]
- ← Dependency: [[ProductServiceDto - validation]]

## 📊 Appears In (2 diagrams)

- Custom: Service or Insurance-Assign
- Custom: Validation Rules
