---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Installment Schedule"
domain: "Modules"
element_id: 1741397
diagrams: 1
connections: 0
tags:
  - requirement
  - modules
---

# 📋 {ADD}Unpair payment request validation

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Installment Schedule

## 📝 Notes

{ADD CBL-29 IS}
System performs set of validation of the provided request:
Folowing atributes must be filled:
- request.sourceTransactionId

Check if sourceTransactionId is connected to any contract or installment part, if not call MSG_PaimentIsNotPairedToIs("Payment can't be unpaired because is not connected to any contract")

## 📊 Appears In (1 diagrams)

- Use Case: OVERVIEW - Installment Schedule
