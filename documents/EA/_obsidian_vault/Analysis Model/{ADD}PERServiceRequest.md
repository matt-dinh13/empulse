---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Service Requests/Contract PER Service Requests"
domain: "Analysis Model"
element_id: 1874215
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 {ADD}PERServiceRequest

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Service Requests/Contract PER Service Requests

## 📝 Notes

{ADD CLM-1713 /}
A PER request result structure

## 🔗 Connections (2)

- → Dependency: [[PERResult]]
- ← Usage: [[{ADD}PERServiceRequests]]

## 📊 Appears In (1 diagrams)

- Logical: Contract PER Service Requests - create request

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| loanServiceRequestId | string |  |
| resultPreview | EarlyRepaymentResult |  |
| notification | string |  |
