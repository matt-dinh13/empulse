---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-6201 Separate DSM from BSL/LOR-8940 - Extend HO_CONTRACT_DATA with barcode prefix of included client and contract documents"
domain: "Requirements Model"
element_id: 1878253
diagrams: 3
connections: 2
tags:
  - class
  - requirements-model
---

# 🔷 DocumentWithBarCodePrefixType

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-6201 Separate DSM from BSL/LOR-8940 - Extend HO_CONTRACT_DATA with barcode prefix of included client and contract documents

## 📝 Notes

Object containing the data of some particular document including the barcode prefix of the corresponding document type.

## 🔗 Connections (2)

- ← Dependency «use»: [[DocumentsType]]
- → Generalization «XSDextension»: [[{MOD}DocumentType]]

## 📊 Appears In (3 diagrams)

- Custom: LOR-8940 - Extend HO_CONTRACT_DATA with barcode prefix of included client and contract documents
- Logical: HO_CONTRACT_DATA - client data
- Logical: HO_GENERAL_TYPES

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| barCodePrefix | string |  |
