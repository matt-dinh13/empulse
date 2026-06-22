---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/Sales Network Management/COMMON for Sales Network Management/«functionality» COMMON for Common for Sales Network Management/{ADD}Sales Features/Validation rules"
domain: "Analysis Model"
element_id: 1401688
diagrams: 2
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 GetDataForProductCalculatorRequest - validation rules

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/COMMON for Sales Network Management/«functionality» COMMON for Common for Sales Network Management/{ADD}Sales Features/Validation rules

## 📝 Notes

{ADD PCG-1745/}
// Validation of GetDataForProductCalculatorRequest 
If any validation fails for attribute then
Add new record with
- resultCode (defined in brackets)
- description (if defined)
into GetDataForProductCalculatorResponse 

Validations:

	
- salesroomCode
Salesroom must exist [INVALID_SALESROOM]

## 🔗 Connections (1)

- ← Dependency: [[{ADD}09.502 Get Data For Product Calculator]]

## 📊 Appears In (2 diagrams)

- Logical: Validation rules
- Use Case: Sales Features
