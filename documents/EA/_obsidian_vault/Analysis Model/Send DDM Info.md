---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Payments/DDM"
domain: "Analysis Model"
element_id: 1860543
diagrams: 2
connections: 2
tags:
  - usecase
  - analysis-model
---

# 🎯 Send DDM Info

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Payments/DDM

## 📝 Notes

Sendin DDM Info message is trigered by system events after DDM modification: 
- DDMUpdatedSE
- DDMReceivedSE
- DDMCancelledSE
- DDMConfirmationImportedSE
- DDMCreatedSE
- ContractSignSE

## 🔗 Connections (2)

- → Realisation: [[DDMInfoMessage]]
- ← Association: [[System event]]

## 📊 Appears In (2 diagrams)

- Logical: DDM Info
- Use Case: DDM Info
