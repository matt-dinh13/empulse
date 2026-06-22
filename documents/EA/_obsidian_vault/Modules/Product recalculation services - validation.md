---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Product Recalculation Data/Validation Rules"
domain: "Modules"
element_id: 1616225
diagrams: 2
connections: 1
tags:
  - requirement
  - modules
---

# 📋 Product recalculation services - validation

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Product Recalculation Data/Validation Rules

## 📝 Notes

POST product-recalculation-services 

	
- productCode
mandatory
must exist Product in Product where VersionStatus = ACTIVE
[INVALID_PRODUCT]
	
- salesroomCode
mandatory
[INVALID_SALESROOM]

## 🔗 Connections (1)

- ← Dependency: [[POST product recalculation data - service]]

## 📊 Appears In (2 diagrams)

- Custom: Validation Rules
- Use Case: Use Case
