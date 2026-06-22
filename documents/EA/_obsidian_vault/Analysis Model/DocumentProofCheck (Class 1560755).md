---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Documents/GetContractDocumentsDetail_v3"
domain: "Analysis Model"
element_id: 1560755
diagrams: 2
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 DocumentProofCheck

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Documents/GetContractDocumentsDetail_v3

## 📝 Notes

A list of document proof checks

{ADD CLM-2546}The list source: Document -> Document Attributes of Document Attribute Type = PROOF_CHECK{/ADD}

## 🔗 Connections (1)

- ← Dependency: [[{MOD}DocumentData]]

## 📊 Appears In (2 diagrams)

- Logical: {ADD}Get Contract Documents detail v3
- Logical: {ADD}SettingDocumentProofCheck_v3

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| checkedDate | Date |  |
| type | string |  |
| checkedBy | string |  |
