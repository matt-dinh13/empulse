---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules"
domain: "Modules"
element_id: 1855361
diagrams: 4
connections: 3
tags:
  - requirement
  - modules
---

# 📋 Service Inclusivity Check

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules

## 📝 Notes

Inputs:

	
- product


	
- set of services assigned on product


Algorithm:
1. 
For each service from set of services assigned on product system finds all pairs [service, serviceX] or [serviceX, service] in ServiceRelation with service.ServiceRelation.ServiceRelationType = INCLUSION. 

2. 
For each found pair, system checks if serviceX is present in set of services assigned on product:
-- if true, algorithm continues with next pair

Offer calculation:
-- if false, system checks If type of service is mandatory for product (Product.ProductToServiceType.ServiceTypeAdjustmentRule = MANDATORY):
     -- if true, offer cannot be calculated (it is considered as invalid)
     -- if false, service and service tariff items are removed from set of services assigned on product and this algorithm run again from the beginning

Offer recalculation:
-- if false, offer cannot be recalculated (it is considered as invalid)

## 🔗 Connections (3)

- ← Dependency: [[08.110 Select insurance services (UseCase 1819535)]]
- ← Dependency: [[{MOD}Offer recalculation]]
- ← Dependency: [[{MOD}Calculate product offer]]

## 📊 Appears In (4 diagrams)

- Custom: Calculate product offer
- Custom: Offer recalculation
- Custom: Validation Rules
- Use Case: Select insurance services
