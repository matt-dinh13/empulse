---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Documents/GetContractDocumentsDetail_v2"
domain: "Analysis Model"
element_id: 1560736
diagrams: 2
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 DocumentProofCheck

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Documents/GetContractDocumentsDetail_v2

## 📝 Notes

A list of document proof checks

{ADD CLM-2546}The list source: Document -> Document Attributes of Document Attribute Type = PROOF_CHECK{/ADD}

## 🔗 Connections (2)

- ← Dependency: [[DocumentData (Class 1560735)]]
- ← Dependency: [[DocumentData (Class 1560681)]]

## 📊 Appears In (2 diagrams)

- Logical: Get Contract Documents detail v2
- Logical: SettingDocumentProofCheck_v2

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| checkedDate | Date |  |
| type | string |  |
| checkedBy | string |  |
