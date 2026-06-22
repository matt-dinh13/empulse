---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Documents/SettingDocumentProofCheck_v1"
domain: "Analysis Model"
element_id: 1560681
diagrams: 1
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 DocumentData

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Documents/SettingDocumentProofCheck_v1

## 🔗 Connections (4)

- → Aggregation: [[SetDocumentProofCheckResponse (Class 1560740)]]
- → Aggregation: [[SetDocumentProofCheckResponse]]
- → Dependency: [[DocumentProofCheck]]
- → Dependency: [[DocumentAttribute]]

## 📊 Appears In (1 diagrams)

- Logical: SettingDocumentProofCheck_v1

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| attributes | DocumentAttribute |  |
| documentId | string |  |
| proofChecks | DocumentProofCheck |  |
| documentType | string |  |
| fileUuid | string |  |
| relatedTo | string |  |
| registrationDate | date |  |
