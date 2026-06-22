---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules"
domain: "Modules"
element_id: 1855360
diagrams: 11
connections: 8
tags:
  - requirement
  - modules
---

# 📋 Service Exclusivity Check

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules

## 📝 Notes

Inputs:

	
- Service
	
- Set of Other Services


For each ServiceX from the Set of Other Services
-- If exists a pair [Service, ServiceX] or [ServiceX, Service] in then list of exclusive services (ServiceRelation) with Service.ServiceRelation.ServiceRelationType = EXCLUSION then return false
end for each

return true

## 🔗 Connections (8)

- ← Dependency: [[{MOD}Eligible Insurance Service]]
- ← Dependency: [[{ADD}Insurance service eligibility check]]
- ← Dependency: [[Assign Services]]
- ← Dependency: [[08.110 Select insurance services (UseCase 1819535)]]
- ← Dependency: [[{DEL}Service determination]]
- ← Dependency: [[{MOD}NEW Service determination]]
- ← Dependency: [[ProductServiceDto - validation]]
- ← Dependency: [[08.344 Generate insurance offers for contract (UseCase 1879848)]]

## 📊 Appears In (11 diagrams)

- Custom: Calculate product offer
- Custom: Eligible Insurance Service
- Custom: Product and Service selection
- Custom: Service or Insurance-Assign
- Custom: Validation Rules
- Custom: Validation Rules
- Use Case: Insurance Service Offers API - Use Case Model
- Use Case: Insurance Service Offers UI - Use Case Model
- Use Case: Loan Service - Add a Service to Contract
- Use Case: Select insurance services
- Use Case: Service - Contract Service management via UI
