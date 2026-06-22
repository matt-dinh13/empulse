---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Service Requests/Contract CET Service Requests"
domain: "Analysis Model"
element_id: 1750027
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 CETServiceRequestPreview

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Service Requests/Contract CET Service Requests

## 📝 Notes

A preview of CET service request data related to provided contract and date

## 🔗 Connections (3)

- → Usage: [[EarlyRepaymentResult]]
- ← Usage: [[CETServiceRequests]]
- → Usage: [[ReasonType]]

## 📊 Appears In (1 diagrams)

- Logical: Contract CET Service Requests - get preview

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| availableReasons | ReasonType |  |
| requestAvailability | boolean |  |
| resultPreview | EarlyRepaymentResult |  |
| notification | string |  |
