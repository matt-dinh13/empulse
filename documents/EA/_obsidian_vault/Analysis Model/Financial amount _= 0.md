---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Validation Rules/PH/Contact information"
domain: "Analysis Model"
element_id: 1465179
diagrams: 3
connections: 6
tags:
  - requirement
  - analysis-model
---

# 📋 Financial amount >= 0

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Validation Rules/PH/Contact information

## 📝 Notes

Validations:

	
- Value must be financial amount equal or greater than 0 and lower or equal to 999.999.999 (MSG_AmountGreaterZero)

## 🔗 Connections (6)

- ← Dependency: [[Amount (Action 1351163)]]
- ← Dependency: [[Monthly amount of other debts (Action 1513075)]]
- ← Dependency: [[Additional net income (Action 1513074)]]
- ← Dependency: [[Net income (Action 1513068)]]
- ← Dependency: [[Remittance Data validation rule]]
- ← Dependency: [[{MOD}Application validation rule-PH]]

## 📊 Appears In (3 diagrams)

- Custom: Contact information
- Custom: Employment information
- Custom: Validation rules - PH
