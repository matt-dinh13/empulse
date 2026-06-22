---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9023 Secure Cash Loan - Allow CFA regeneration with the updated data after the signing process/LOR-9046 DSM: integrate Cabinet to get file data to HO_CONTRACT_DATA"
domain: "Requirements Model"
element_id: 1878266
diagrams: 7
connections: 5
tags:
  - class
  - requirements-model
---

# 🔷 {MOD}DocumentFile

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9023 Secure Cash Loan - Allow CFA regeneration with the updated data after the signing process/LOR-9046 DSM: integrate Cabinet to get file data to HO_CONTRACT_DATA

## 📝 Notes

Entity representing a file related to respective document.

## 🔗 Connections (5)

- ← Dependency «use»: [[ConsentDocumentType]]
- ← Dependency «use»: [[{MOD}DocumentData (Class 1821417)]]
- → Dependency: [[01.008 Download file from document archive (UseCase 1851467)]]
- → Generalization «XSDextension»: [[DocumentFileContent]]
- ← Dependency «use»: [[{MOD}DocumentType]]

## 📊 Appears In (7 diagrams)

- Custom: LOR-9046 DSM: integrate Cabinet to get file data to HO_CONTRACT_DATA
- Custom: LOR-9328 - Remove unused HO_CONSENT_DATA elements
- Custom: LOR-9359 - Completely remove sign pad feature
- Logical: HO_CONSENT_DATA
- Logical: HO_CONTRACT_DATA - client data
- Logical: HO_CONTRACT_DATA - contract data
- Logical: HO_GENERAL_TYPES

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| creationDate | dateTime |  |
