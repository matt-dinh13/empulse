---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-8652 (CLM-2697) Enhancement API ContractDocument"
domain: "Requirements Model"
element_id: 1560735
diagrams: 4
connections: 5
tags:
  - class
  - requirements-model
---

# 🔷 DocumentData

> **Type**: Class
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-8652 (CLM-2697) Enhancement API ContractDocument

## 🔗 Connections (5)

- ← Dependency: [[ContractDocument]]
- → Aggregation: [[SetDocumentProofCheckResponse (Class 1560740)]]
- → Dependency: [[DocumentAttribute]]
- → Dependency: [[DocumentProofCheck]]
- → Aggregation: [[SetDocumentProofCheckResponse]]

## 📊 Appears In (4 diagrams)

- Custom: CBL-8652 (CLM-2697) Enhancement API ContractDocument
- Custom: REQ #4 - Update Document REST API services to use UUID instead of DOCUMENT_REF
- Logical: Get Contract Documents detail v2
- Logical: SettingDocumentProofCheck_v2

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
