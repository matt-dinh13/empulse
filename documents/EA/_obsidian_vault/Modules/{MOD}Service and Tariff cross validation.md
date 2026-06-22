---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/User Interface for Service Management/Service Root/Validation Rules"
domain: "Modules"
element_id: 1855358
diagrams: 2
connections: 3
tags:
  - requirement
  - modules
---

# 📋 {MOD}Service and Tariff cross validation

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/User Interface for Service Management/Service Root/Validation Rules

## 📝 Notes

Validations:

	
- Service and related tariff must have same currency


	
- {ADD PCG-3804}If Service.ServiceType = MTCACC then Service.Tariff is mandatory.{/ADD}

## 🔗 Connections (3)

- ← Dependency: [[Tariff (GUIElement 1867447)]]
- ← Dependency: [[Currency (GUIElement 1867440)]]
- ← Dependency: [[Service - validation]]

## 📊 Appears In (2 diagrams)

- Custom: Validation Rules
- Custom: Validation Rules
