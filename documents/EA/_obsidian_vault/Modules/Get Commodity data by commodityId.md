---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Value Added Services (VAS)/Analytical Model/VAS Deal/Business rules"
domain: "Modules"
element_id: 1827557
diagrams: 4
connections: 1
tags:
  - requirement
  - modules
---

# 📋 Get Commodity data by commodityId

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Analytical Model/VAS Deal/Business rules

## 📝 Notes

This rule describes obtaining Commodity data based on its identifier (commodityId)
 

	
- System calls GET method of .../openapi/v1/commodities/{commodityId}
	
- If call is successful (200 OK), Commodity data is returned

## 🔗 Connections (1)

- ← Dependency: [[11.010 Create deal (VAS) (UseCase 1829623)]]

## 📊 Appears In (4 diagrams)

- Custom: Business rules
- Custom: CSI-1454 Create Deal method implementation
- Custom: CSI-1806 Create Deal method modification
- Use Case: Deal management - Use Case Model
