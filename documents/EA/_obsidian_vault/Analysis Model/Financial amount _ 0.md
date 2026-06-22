---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Loan Restructuring/Business Rules"
domain: "Analysis Model"
element_id: 1789756
diagrams: 3
connections: 9
tags:
  - requirement
  - analysis-model
---

# 📋 Financial amount > 0

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Loan Restructuring/Business Rules

## 📝 Notes

Validations:

	
- Value must be financial amount higher than 0 and lower than or equal to 999.999.999


MSG_PositiveAmount

## 🔗 Connections (9)

- ← Dependency: [[Preferred monthly installment validation]]
- ← Dependency: [[Fixed amount]]
- ← Dependency: [[Max Cash_Down payment amount]]
- ← Dependency: [[Annuities (GUIElement 1803463)]]
- ← Dependency: [[Installment Prescription Min Limit]]
- ← Dependency: [[Min Cash_Down payment amount]]
- ← Dependency: [[Price (GUIElement 1823058)]]
- ← Dependency: [[Maximum monthly payment (GUIElement 1823030)]]
- ← Dependency: [[Fixed amount (GUIElement 1825323)]]

## 📊 Appears In (3 diagrams)

- Custom: Business Rules
- Custom: General rule tasks
- Custom: Validation Rules
