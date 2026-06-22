---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Insurance Services/v1.0"
domain: "Analysis Model"
element_id: 1833150
diagrams: 3
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 DocumentFile

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Insurance Services/v1.0

## 📝 Notes

LDM: 
service-request
Contract -> Contract Service -> Loan Service Request -> ER Request Document -> Document.Printout -> DMS File

service
Contract -> Contract Document / Contract Service Document -> Document.Printout Id/DMS File Id -> DMS File

contract
Contract -> Contract Document -> Document.Printout Id/DMS File Id -> DMS File

## 🔗 Connections (1)

- → Aggregation: [[Document (Class 1833149)]]

## 📊 Appears In (3 diagrams)

- Logical: Contract Insurance Services - POST: Contract Insurance Service
- Logical: Documents (DEPRECATED)
- Logical: Set Document File v2

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| documentFileType | string |  |
| externalId | string |  |
