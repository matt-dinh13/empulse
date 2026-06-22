---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Service Requests/Loan Service Requests"
domain: "Analysis Model"
element_id: 1611046
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 {ADD}RequestDocument

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Service Requests/Loan Service Requests

## 📝 Notes

{ADD CSI-727/}
A contract supplement document

## 🔗 Connections (2)

- → Dependency: [[{ADD}DmsFile (Class 1611049)]]
- ← Dependency: [[{ADD}LoanServiceRequest]]

## 📊 Appears In (1 diagrams)

- Logical: Loan Service Requests - Document acceptation

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| documentId | string |  |
| files | {ADD}DmsFile |  |
| signatureRequired | boolean |  |
| documentTypeCode | string |  |
