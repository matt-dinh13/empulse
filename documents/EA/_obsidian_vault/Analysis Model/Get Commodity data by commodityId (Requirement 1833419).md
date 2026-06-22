---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Card management support/Card operations/Business rules/Authentication questions"
domain: "Analysis Model"
element_id: 1833419
diagrams: 2
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Get Commodity data by commodityId

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Card management support/Card operations/Business rules/Authentication questions

## 📝 Notes

This rule describes obtaining Commodity data based on its identifier (commodityId)
 

	
- System calls GET method of .../openapi/v1/commodities/{commodityId}
	
- If call is successful (200 OK), Commodity data is returned

## 🔗 Connections (2)

- ← Dependency: [[Name of goods purchased]]
- ← Dependency: [[{MOD}11.010 Create insurance contract]]

## 📊 Appears In (2 diagrams)

- Custom: Authentication questions
- Use Case: Create and Sign Insurance contract
