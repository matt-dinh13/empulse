---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Service Requests/Contract PAYHOL Service Requests"
domain: "Analysis Model"
element_id: 1608929
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 {ADD}DocumentPrintout

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Service Requests/Contract PAYHOL Service Requests

## 📝 Notes

{ADD CSI-726 /}
Printout data structure related to the Loan Service Request

## 🔗 Connections (1)

- ← Usage: [[PAYHOLServiceRequest]]

## 📊 Appears In (1 diagrams)

- Logical: Contract PAYHOL Service Requests - create request

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| documentType | string |  |
| signatureRequired | boolean |  |
| documentId | string |  |
| print | base64 |  |
