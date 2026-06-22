---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-6201 Separate DSM from BSL/LOR-8940 - Extend HO_CONTRACT_DATA with barcode prefix of included client and contract documents"
domain: "Requirements Model"
element_id: 1821403
diagrams: 2
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

- → Dependency «use»: [[DocumentWithBarCodePrefixType]]
- ← Dependency: [[{MOD}AdditionalPersonType]]
- ← Dependency: [[{MOD}PersonalDetailsType]]

## 📊 Appears In (2 diagrams)

- Custom: LOR-8940 - Extend HO_CONTRACT_DATA with barcode prefix of included client and contract documents
- Logical: HO_CONTRACT_DATA - client data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| document | DocumentWithBarCodePrefixType |  |
