---
type: Enumeration
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Contract/Contract Payment Channel Management"
domain: "Analysis Model"
element_id: 1710616
diagrams: 7
connections: 2
tags:
  - enumeration
  - analysis-model
---

# 📝 DDMStatusTypeDto

> **Type**: Enumeration
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Contract/Contract Payment Channel Management

## 📝 Notes

{ADD CBL-991 PAY /}

## 🔗 Connections (2)

- ← Dependency: [[DDMInfoBaseDto]]
- ← Dependency: [[DDMInfoBaseDto (Class 1710851)]]

## 📊 Appears In (7 diagrams)

- Logical: ContractPaymentChannelManagementWS - GetContractDDMList
- Logical: DDM Info
- Logical: DirectDebitService.getDDMByCode
- Logical: DirectDebitService.getDDMByContract
- Logical: DirectDebitService.getDDMByCUID
- Logical: DirectDebitServiceV5 - Get DDM by contract
- Logical: DirectDebitServiceV5 - Get DDM by CUID

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| AVAIL (Available) |  |  |
| SUS (Suspended) |  |  |
| CEG (Confirmation export generating) |  |  |
| CNC (Canceled) |  |  |
| FIN (Finished) |  |  |
| NEW (New) |  |  |
| RFC (Received from confirmation) |  |  |
| SFC (Sent for confirmation) |  |  |
