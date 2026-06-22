---
type: GUIElement
stereotype: "label"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/COMMON for Early Repayment/User Interface/ER request preview"
domain: "Analysis Model"
element_id: 1586760
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Conditions for ER fulfilled

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/COMMON for Early Repayment/User Interface/ER request preview

## 📝 Notes

Visible only for ServiceType in (FER, COP)

	
- If ServiceType = FER and function Check ER request availability returns false then display 'No'
	
- If ServiceType = COP and function Check COP ER request availability returns false then display 'No'


	
- If ServiceType = CET and function Check CET request availability returns false then display 'No'.


	
- otherwise display 'Yes'.


Not editable
Localization code: SER_FERConditionFulfilled

## 📊 Appears In (1 diagrams)

- Custom: Early repayment preview
