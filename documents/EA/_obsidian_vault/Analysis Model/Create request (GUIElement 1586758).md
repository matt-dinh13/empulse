---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Contract Early Termination/User Interface Model"
domain: "Analysis Model"
element_id: 1586758
diagrams: 4
connections: 5
tags:
  - guielement
  - analysis-model
---

# 🖥️ Create request

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Contract Early Termination/User Interface Model

## 📝 Notes

- If ServiceType = FER and function Check ER request availability returns True then activate UC 03.050 Create Early repayment request
	
- If ServiceType = COP and function Check COP ER request availability returns True then activate UC 08.257 Create Cooling-off period request


Localization code: SER_CreateERRequest

## 🔗 Connections (5)

- → Dependency: [[{MOD}08.257 Create Cooling-off period request]]
- → Dependency: [[{MOD}03.221 Create REL Early repayment request]]
- → Dependency: [[08.271 Create CET repayment request (UseCase 1862246)]]
- → Dependency: [[03.050 Create Full Early repayment request manually]]
- → Association «navigate»: [[CET request parameters]]

## 📊 Appears In (4 diagrams)

- Custom: CET Early repayment
- Custom: COP Early repayment preview
- Custom: Early repayment preview
- Custom: Full Early Repayment
