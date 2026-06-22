---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Salesroom assignment/Validation Rules"
domain: "Modules"
element_id: 1873187
diagrams: 2
connections: 1
tags:
  - requirement
  - modules
---

# 📋 Salesroom products - validation

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Salesroom assignment/Validation Rules

## 📝 Notes

{ADD PCG-2916/}

SalesroomProductInputDto 

	
- salesroomCode
mandatory [REQUIRED]


SalesroomProductsCommodityDto 

	
- commodityTypeCode
mandatory [REQUIRED]
	
- price
mandatory [REQUIRED]
greater than 0 [INVALID_NUMBER]

## 🔗 Connections (1)

- ← Dependency: [[POST salesroom-products]]

## 📊 Appears In (2 diagrams)

- Custom: Validation Rules
- Use Case: Use Case
