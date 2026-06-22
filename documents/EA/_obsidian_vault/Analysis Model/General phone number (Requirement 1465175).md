---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Validation Rules/PH/Common for AF"
domain: "Analysis Model"
element_id: 1465175
diagrams: 4
connections: 4
tags:
  - requirement
  - analysis-model
---

# 📋 General phone number

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Validation Rules/PH/Common for AF

## 📝 Notes

Phone number. (Mobile or land line; without country code)
Validation: 
- If first digit is 2, then second digit is 3-8, and fixed length is 9; following digits can be any number (0-9)
- If first digit is 3-7, then fixed length is 9; following digits can be any number (0-9)
- If first digit is 8, then fixed length is 9-10; following digits can be any number (0-9)
- If first digit is  9 then fixed length is 10 ; following digits can be any number (0-9)

## 🔗 Connections (4)

- ← Dependency: [[Phone (Action 1351171)]]
- ← Dependency: [[Any phone (Action 1465183)]]
- ← Dependency: [[Employment phone (Action 1513071)]]
- ← Dependency: [[Contact validation rule-PH]]

## 📊 Appears In (4 diagrams)

- Custom: Common for AF
- Custom: Contact information
- Custom: Employment information
- Custom: Validation rules - PH
