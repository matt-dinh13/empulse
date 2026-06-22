---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Analysis Model/Client Management/Communication/Manage communication/User Interface/Create communication"
domain: "Analysis Model"
element_id: 1716033
diagrams: 1
connections: 2
tags:
  - guielement
  - analysis-model
---

# 🖥️ Instalment schedule

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Analysis Model/Client Management/Communication/Manage communication/User Interface/Create communication

## 📝 Notes

- Button is disabled when field Contract number is empty.
	
- Button is always enabled when Contract.ContractType = REL.
	
- When Contract.ContractType in (CEL, SAI) and exists at least one Contract -> Installment.ActiveFlag = 1 then button is enabled otherwise disabled.


After clicking the button is called: 

- For CEL contract types, it runs 03.020 Show installment schedule use case

- For REL contract types, it runs 03.021 Show REL installment schedule use case


Repayment schedule of the client's contract can be shown if field "Contract number" (parameter to UC - 03.020) is filled.



Localization code: COM_SwitchInstallmentSchedule

## 🔗 Connections (2)

- → Dependency: [[03.021 Show REL installment schedule (UseCase 1878580)]]
- → Dependency: [[03.020 Show installment schedule (UseCase 1879461)]]

## 📊 Appears In (1 diagrams)

- Custom: Create communication
