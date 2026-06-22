---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Service Requests/Contract PER Service Requests"
domain: "Analysis Model"
element_id: 1874211
diagrams: 2
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 {ADD}PERServiceRequestParams

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Service Requests/Contract PER Service Requests

## 📝 Notes

{ADD CLM-1713 /}
A list of parameters for GET and PUT of PERServiceRequest

## 🔗 Connections (2)

- ← Usage: [[{ADD}PERServiceRequests]]
- ← Usage: [[{ADD}PERServiceRequests]]

## 📊 Appears In (2 diagrams)

- Logical: Contract PER Service Requests - create request
- Logical: Contract PER Service Requests - get preview

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractNumber | string |  |
| perType | PER Type |  |
| serviceId | string |  |
| clientAmount | money |  |
