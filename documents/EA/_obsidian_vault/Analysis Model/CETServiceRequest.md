---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Service Requests/Contract CET Service Requests"
domain: "Analysis Model"
element_id: 1750028
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 CETServiceRequest

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Service Requests/Contract CET Service Requests

## 📝 Notes

A CET request result structure

## 🔗 Connections (2)

- → Dependency: [[EarlyRepaymentResult]]
- ← Dependency: [[CETServiceRequests]]

## 📊 Appears In (1 diagrams)

- Logical: Contract CET Service Requests - create request

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| loanServiceRequestId | string |  |
| resultData | EarlyRepaymentResult |  |
| notification | string |  |
