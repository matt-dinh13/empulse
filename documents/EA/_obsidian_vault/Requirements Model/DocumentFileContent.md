---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-6201 Separate DSM from BSL/LOR-9328 - Remove unused HO_CONSENT_DATA elements"
domain: "Requirements Model"
element_id: 1878220
diagrams: 6
connections: 2
tags:
  - class
  - requirements-model
---

# 🔷 DocumentFileContent

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-6201 Separate DSM from BSL/LOR-9328 - Remove unused HO_CONSENT_DATA elements

## 📝 Notes

Entity representing a file content related to respective document.

## 🔗 Connections (2)

- ← Dependency «use»: [[ConsentDocumentType]]
- ← Generalization «XSDextension»: [[{MOD}DocumentFile]]

## 📊 Appears In (6 diagrams)

- Custom: LOR-9328 - Remove unused HO_CONSENT_DATA elements
- Custom: LOR-9359 - Completely remove sign pad feature
- Logical: HO_CONSENT_DATA
- Logical: HO_CONTRACT_DATA - client data
- Logical: HO_CONTRACT_DATA - contract data
- Logical: HO_GENERAL_TYPES

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| content | base64Binary |  |
