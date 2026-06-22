---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Insurance Services/v1.0"
domain: "Analysis Model"
element_id: 1853847
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 ContractInsuranceCancelPreview

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Insurance Services/v1.0

## 📝 Notes

Response structure for contract insurance cancellation

## 🔗 Connections (3)

- ← Usage: [[Contract Insurance Services (Interface 1853845)]]
- → Usage: [[ReasonType]]
- → Usage: [[ContractDataChanged]]

## 📊 Appears In (1 diagrams)

- Logical: Contract Insurance Change Requests - GET: ContractInsuranceCancelPreview

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| availableReasons | ReasonType |  |
| contractDataChanged | ContractDataChanged |  |
| notification | string |  |
