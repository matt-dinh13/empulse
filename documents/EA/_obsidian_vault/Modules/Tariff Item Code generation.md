---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Tariff/User Interface for Tariff Management/Tariff Item/Business Rules"
domain: "Modules"
element_id: 1870821
diagrams: 2
connections: 1
tags:
  - requirement
  - modules
---

# 📋 Tariff Item Code generation

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Tariff/User Interface for Tariff Management/Tariff Item/Business Rules

## 📝 Notes

Tariff Item Code is generated automatically by following rules:
"%s-%d", where

	
- %s =Tariff.Code from the Tariff where Tariff Item is created
	
- %d = Number from database sequence


	
- Max.length = 30

The code has to be unique.

## 🔗 Connections (1)

- ← Dependency: [[{DEL}04.020 Create tariff item (UseCase 1862901)]]

## 📊 Appears In (2 diagrams)

- Custom: Business Rules
- Use Case: Tariff Items
