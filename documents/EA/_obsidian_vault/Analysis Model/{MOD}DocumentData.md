---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Documents/GetContractDocumentsDetail_v3"
domain: "Analysis Model"
element_id: 1560747
diagrams: 2
connections: 6
tags:
  - class
  - analysis-model
---

# 🔷 {MOD}DocumentData

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Documents/GetContractDocumentsDetail_v3

## 🔗 Connections (6)

- → Aggregation: [[SetDocumentProofCheckResponse (Class 1560740)]]
- → Dependency: [[DocumentProofCheck (Class 1560755)]]
- → Dependency: [[DocumentAttribute (Class 1560754)]]
- → Dependency: [[{ADD}DmsFile]]
- ← Dependency: [[ContractDocument (Class 1560750)]]
- → Aggregation: [[SetDocumentProofCheckResponse]]

## 📊 Appears In (2 diagrams)

- Logical: {ADD}Get Contract Documents detail v3
- Logical: {ADD}SettingDocumentProofCheck_v3

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| attributes | DocumentAttribute |  |
| documentId | string |  |
| proofChecks | DocumentProofCheck |  |
| documentType | string |  |
| {DEL}fileUuid | string |  |
| relatedTo | string |  |
| registrationDate | date |  |
| {ADD}files | DmsFile |  |
