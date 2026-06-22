---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Contract Early Termination/User Interface Model"
domain: "Analysis Model"
element_id: 1701748
diagrams: 1
connections: 2
tags:
  - guielement
  - analysis-model
---

# 🖥️ Expiration Date

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Contract Early Termination/User Interface Model

## 📝 Notes

CET Expiration Date
Format: date
Default value: current date + ExpirationDateMaxLimit 
ExpirationDateMaxLimit is parameter of corresponding ContractService.Service.ContractEarlyTerminationService

Localization code: SER_CETExpirationDate

## 🔗 Connections (2)

- → Dependency: [[Expiration Date of CET - validation]]
- → Dependency: [[Mandatory (Requirement 1789779)]]

## 📊 Appears In (1 diagrams)

- Custom: CET Early repayment
