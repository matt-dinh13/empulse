---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Service Requests/Contract PER Service Requests"
domain: "Analysis Model"
element_id: 1874214
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 {ADD}PERServiceRequestPreview

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Service Requests/Contract PER Service Requests

## 📝 Notes

{ADD CLM-1713 /}
A preview of PER service request data related to provided contract and date

## 🔗 Connections (2)

- → Dependency: [[PERResult]]
- ← Usage: [[{ADD}PERServiceRequests]]

## 📊 Appears In (1 diagrams)

- Logical: Contract PER Service Requests - get preview

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| requestAvailability | boolean |  |
| resultPreview | EarlyRepaymentResult |  |
| notification | string |  |
