---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-11238 (BRPH-2104)  New Zeebe workflow for selfie esign updated signature logic"
domain: "Requirements Model"
element_id: 1878216
diagrams: 8
connections: 6
tags:
  - class
  - requirements-model
---

# 🔷 {MOD}DocumentType

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-11238 (BRPH-2104)  New Zeebe workflow for selfie esign updated signature logic

## 📝 Notes

DocumentType represents structure for documents.

## 🔗 Connections (6)

- ← Dependency «use»: [[DocumentsType (Class 1878261)]]
- → Dependency «use»: [[{MOD}DocumentFile]]
- ← Generalization «XSDextension»: [[DocumentWithBarCodePrefixType]]
- → Dependency «use»: [[DocumentAttributesType]]
- → Realisation: [[Requirement #3 - Call LAP in Sign contract externally]]
- ← Aggregation: [[DocumentTypeGroup]]

## 📊 Appears In (8 diagrams)

- Custom: LOR-11238 (BRPH-2104)  New Zeebe workflow for selfie esign updated signature logic
- Custom: LOR-8940 - Extend HO_CONTRACT_DATA with barcode prefix of included client and contract documents
- Custom: LOR-9045 DSM: Use HO_CONTRACT_DATA datasource for CFA
- Custom: LOR-9046 DSM: integrate Cabinet to get file data to HO_CONTRACT_DATA
- Custom: LOR-9328 - Remove unused HO_CONSENT_DATA elements
- Logical: External Reference
- Logical: HO_CONTRACT_DATA - client data
- Logical: HO_GENERAL_TYPES

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| documentAttributes | DocumentAttributesType |  |
| documentContent | DocumentFile |  |
| uuid | string |  |
