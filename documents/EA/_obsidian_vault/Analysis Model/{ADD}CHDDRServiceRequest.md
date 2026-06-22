---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Service Requests/Contract CHDDR Service Requests"
domain: "Analysis Model"
element_id: 1561097
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 {ADD}CHDDRServiceRequest

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Service Requests/Contract CHDDR Service Requests

## 📝 Notes

{ADD CLM-1856 /}
A CHDDR request result structure

## 🔗 Connections (2)

- ← Usage: [[{ADD}CHDDRServiceRequests]]
- → Dependency: [[{ADD}CHDDRResult]]

## 📊 Appears In (1 diagrams)

- Logical: Contract CHDDR Service Requests - create request

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| loanServiceRequestId | string |  |
| resultPreview | EarlyRepaymentResult |  |
| notification | string |  |
