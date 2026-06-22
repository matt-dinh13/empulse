---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Insurance and Service Origination/Validation rules"
domain: "Analysis Model"
element_id: 1640254
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Origination Service Inclusivity Rule

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Insurance and Service Origination/Validation rules

## 📝 Notes

Inputs:

	
- set of services assigned on product and their inclusionServices from external system


Algorithm:
1. For each service from set of services assigned on product system gets their inclusion services and creates all pairs of services
[service, serviceX] or [serviceX, service].
2. 
For each found pair, system checks if each service in the pair is selected
-- if true, algorithm continues with next pair

Offer recalculation:
-- if false, offer cannot be recalculated (it is considered as invalid)

## 🔗 Connections (1)

- ← Dependency: [[08.110 Select insurance services (UseCase 1819535)]]

## 📊 Appears In (1 diagrams)

- Custom: Validation rules
