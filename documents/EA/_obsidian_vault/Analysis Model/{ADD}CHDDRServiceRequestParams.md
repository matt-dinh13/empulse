---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Service Requests/Contract CHDDR Service Requests"
domain: "Analysis Model"
element_id: 1561096
diagrams: 2
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 {ADD}CHDDRServiceRequestParams

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Service Requests/Contract CHDDR Service Requests

## 📝 Notes

{ADD CLM-1856 /}
A list of parameters for GET and PUT of CHDDRServiceRequest

## 🔗 Connections (2)

- ← Usage: [[{ADD}CHDDRServiceRequests]]
- ← Usage: [[{ADD}CHDDRServiceRequests]]

## 📊 Appears In (2 diagrams)

- Logical: Contract CHDDR Service Requests - create request
- Logical: Contract CHDDR Service Requests - get preview

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractNumber | string |  |
| installmentNumber | int |  |
| serviceId | string |  |
| newDueDay | int |  |
