---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Validation Rules/PH/Personal information/Contact to client"
domain: "Analysis Model"
element_id: 1465190
diagrams: 2
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Land phone number

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Validation Rules/PH/Personal information/Contact to client

## 📝 Notes

Land line phone number (without county code).
Validation: 
If first digit is 2, then second digit is 3-8, and fixed length is 9; following digits can be any number (0-9)
- If first digit is 3-8, then fixed length is 9; following digits can be any number (0-9)

## 🔗 Connections (2)

- ← Dependency: [[Home phone (Action 1465202)]]
- ← Dependency: [[Contact validation rule-PH]]

## 📊 Appears In (2 diagrams)

- Custom: Contact to client
- Custom: Validation rules - PH
