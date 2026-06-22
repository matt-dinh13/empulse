---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/User Interface for Service Management/{ADD}Service Limit/Validation Rules"
domain: "Modules"
element_id: 1710328
diagrams: 1
connections: 2
tags:
  - requirement
  - modules
---

# 📋 {MOD}Service limit validation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/User Interface for Service Management/{ADD}Service Limit/Validation Rules

## 📝 Notes

Value for specific service limit type must fulfill these validation

	
- Minimal Installments
in interval 0-72 Terms
Equal or lower than Maximal Installments
	
- Maximal Installments
in interval 0-72 Terms
Equal or higher than Minimal Installments
	
- {ADD PCG-3767}Minimal Credit Amount
must be equal or higher than 0
must be equal or lower than Maximal Credit Amount
	
- Maximal Credit Amount
must be equal or higher than 0
must be equal or higher than Minimal Credit Amount
{/ADD}

## 🔗 Connections (2)

- → Dependency: [[Terms (Requirement 1489254)]]
- → Dependency: [[Credit amount]]

## 📊 Appears In (1 diagrams)

- Custom: Validation Rules
