---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/Sales Network Management/COMMON for Sales Network Management/SN Contact Person/Use Case"
domain: "Analysis Model"
element_id: 929657
diagrams: 1
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 SN Contact person validation rules - GUI


> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/COMMON for Sales Network Management/SN Contact Person/Use Case

## 📝 Notes

- Person age must be:
PersonAgeLowerLimit <= (current date - date of birth) >= PersonAgeUpperLimit (parameters.properties)
	
- Date of document issue has to be between Birth date of contact person and current date
	
- SN Contact person validation rules 


For additive rules see country specific definition.

## 🔗 Connections (2)

- ← Dependency: [[09.190 Update contact person (UseCase 922677)]]
- ← Dependency: [[09.180 Create contact person (UseCase 922676)]]

## 📊 Appears In (1 diagrams)

- Use Case: Manage contact persons
