---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Service Requests/Contract FER Service Requests"
domain: "Analysis Model"
element_id: 1561078
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 {ADD}FERServiceRequestPreview

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Service Requests/Contract FER Service Requests

## 📝 Notes

{ADD CLM-1460 /}
A preview of FER service request data related to provided contract and date

## 🔗 Connections (3)

- → Usage: [[ReasonType]]
- → Dependency: [[EarlyRepaymentResult]]
- ← Usage: [[{ADD}FERServiceRequests]]

## 📊 Appears In (1 diagrams)

- Logical: Contract FER Service Requests - get preview

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| requestAvailability | boolean |  |
| resultPreview | EarlyRepaymentResult |  |
| notification | string |  |
