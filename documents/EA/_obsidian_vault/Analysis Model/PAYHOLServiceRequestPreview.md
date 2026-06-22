---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Service Requests/Contract PAYHOL Service Requests"
domain: "Analysis Model"
element_id: 1608932
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 PAYHOLServiceRequestPreview

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Service Requests/Contract PAYHOL Service Requests

## 📝 Notes

A preview of PAYHOL service request data related to provided contract and deferral periods

## 🔗 Connections (2)

- ← Usage: [[PAYHOLServiceRequests (Interface 1608930)]]
- → Dependency: [[PAYHOLResult]]

## 📊 Appears In (1 diagrams)

- Logical: Contract PAYHOL Service Requests - get preview

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| requestAvailability | boolean |  |
| resultPreview | EarlyRepaymentResult |  |
| notification | string |  |
