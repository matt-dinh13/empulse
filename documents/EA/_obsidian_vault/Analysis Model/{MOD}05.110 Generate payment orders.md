---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Process outgoing payments/Access Rights"
domain: "Analysis Model"
element_id: 1880955
diagrams: 6
connections: 10
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}05.110 Generate payment orders

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Process outgoing payments/Access Rights

## 📝 Notes

User executes this use case to realize outgoing payments through payment orders grouped to a file.
User has to marks all payment to be processed for payment orders and confirms his selection. System checks if all payments in the selection have recipient bank account determined. Payments without recipient account are removed from processing.
Next, chosen and valid payments are showed in a screen for payment orders generation - see Generate outgoing payment orders
User has to identify an outgoing bank account (HC account types) and next runs generation of payment orders - see 05.230 Process outgoing payments use case. 

Frequency of usage:
Several times a day
Actor:
User role authorized to run the UC

## 🔗 Connections (9)

- ← Dependency: [[Generate outgoing payment orders]]
- ← Dependency: [[Generate orders]]
- ← Association: [[User (Actor 1880892)]]
- → UseCase «include»: [[05.100 Browse outgoing payments (UseCase 1459046)]]
- → Realisation: [[Creating a payment order file]]
- → UseCase «invoke»: [[{MOD}05.230 Process outgoing payments]]
- → Realisation: [[REQ#2 Maximum number of displayed outgoing payments]]
- → Realisation: [[05.110 Generate payment orders]]
- → Dependency: [[{MOD}Get recipient data]]

## 📊 Appears In (6 diagrams)

- Custom: Access Rights
- Custom: Browse outgoing payments screen
- Custom: Generate outgoing payment orders screen
- Custom: PAYM-1347 (CBL-3618) Automate outgoing payment orders generation
- Custom: PAYM-1488 (CBL-3570) - Joint lending support in Outgoing payments
- Use Case: Process outgoing payments
