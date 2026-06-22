---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract write-off/Business rules"
domain: "Analysis Model"
element_id: 1834845
diagrams: 4
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Process ContractWrittenOff event notification

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract write-off/Business rules

## 📝 Notes

Input: ContractWrittenOffSE system event

1. If global parameter generateWriteOffNotification = false then business rule ends.
2. System finds contract based on contract code passed in the system event.
3. System creates WriteOffNotification using {ADD}WriteOffNotificationDto with values:
- contractCode = contract.Code
- contractWriteOffDate = current date (date of receiving ContractWrittenOffSE)
- writeOffType = "IFRS"
- installments - set of all contract->Installment where Installment.ActiveFlag = true with values same as for ISIR
-- installmentParts - set of all contract->Installment->Installment Part with values same as for ISIR
4. System sends the Rabbit message.

## 🔗 Connections (1)

- → Dependency: [[{ADD}WriteOffNotificationDto]]

## 📊 Appears In (4 diagrams)

- Custom: Business rules
- Logical: Generated messages - WriteOffNotification
- Use Case: Write-off CEL contract
- Use Case: Write-off REL contract
