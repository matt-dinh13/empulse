---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-6201 Separate DSM from BSL/LOR-8940 - Extend HO_CONTRACT_DATA with barcode prefix of included client and contract documents"
domain: "Requirements Model"
element_id: 1878261
diagrams: 4
connections: 3
tags:
  - class
  - requirements-model
---

# 🔷 DocumentsType

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-6201 Separate DSM from BSL/LOR-8940 - Extend HO_CONTRACT_DATA with barcode prefix of included client and contract documents

## 📝 Notes

Object representing a list of documents (wrapping elements) related to some particular entity (e.g. application, contract, client, etc.).

## 🔗 Connections (3)

- ← Dependency «use»: [[PersonDataType]]
- ← Dependency «use»: [[{MOD}PersonalDetailsType]]
- → Dependency «use»: [[{MOD}DocumentType]]

## 📊 Appears In (4 diagrams)

- Custom: LOR-8940 - Extend HO_CONTRACT_DATA with barcode prefix of included client and contract documents
- Custom: LOR-9328 - Remove unused HO_CONSENT_DATA elements
- Logical: HO_CONSENT_DATA
- Logical: HO_GENERAL_TYPES

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| document | DocumentType |  |
