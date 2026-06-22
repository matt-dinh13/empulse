---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Service Requests/Contract FER Service Requests"
domain: "Analysis Model"
element_id: 1561079
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 {ADD}FERServiceRequest

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Service Requests/Contract FER Service Requests

## 📝 Notes

{ADD CLM-1460 /}
A FER request result structure

## 🔗 Connections (2)

- → Usage: [[EarlyRepaymentResult]]
- ← Usage: [[{ADD}FERServiceRequests]]

## 📊 Appears In (1 diagrams)

- Logical: Contract FER Service Requests - create request

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| loanServiceRequestId | string |  |
| resultData | EarlyRepaymentResult |  |
| notification | string |  |
