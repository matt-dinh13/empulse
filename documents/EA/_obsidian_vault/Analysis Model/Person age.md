---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Validation Rules/IN/Customer data"
domain: "Analysis Model"
element_id: 1770736
diagrams: 2
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Person Age

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Validation Rules/IN/Customer data

## 📝 Notes

VAL_0200
Client age must be:
PersonAgeLowerLimit <= (current date - date of birth) <= PersonAgeUpperLimit.
Where PersonAgeLowerLimit and PersonAgeUpperLimit are parameters with initial setting (parameters.properties):
PersonAgeLowerLimit = 18
PersonAgeUpperLimit = 70

## 🔗 Connections (2)

- ← Dependency: [[Client's date of birth]]
- ← Dependency: [[{MOD}Application validation rule - IN]]

## 📊 Appears In (2 diagrams)

- Custom: Personal data
- Custom: Validation rules - IN
