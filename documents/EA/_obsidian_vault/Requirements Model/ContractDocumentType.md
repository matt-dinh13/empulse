---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-6201 Separate DSM from BSL/LOR-8940 - Extend HO_CONTRACT_DATA with barcode prefix of included client and contract documents"
domain: "Requirements Model"
element_id: 1821424
diagrams: 3
connections: 2
tags:
  - class
  - requirements-model
---

# 🔷 ContractDocumentType

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-6201 Separate DSM from BSL/LOR-8940 - Extend HO_CONTRACT_DATA with barcode prefix of included client and contract documents

## 📝 Notes

Object containing data about some particular contract document.

## 🔗 Connections (2)

- → Generalization «XSDextension»: [[DocumentSignatureType]]
- ← Dependency «use»: [[ContractDocumentsType]]

## 📊 Appears In (3 diagrams)

- Custom: LOR-8940 - Extend HO_CONTRACT_DATA with barcode prefix of included client and contract documents
- Custom: LOR-9045 DSM: Use HO_CONTRACT_DATA datasource for CFA
- Logical: HO_CONTRACT_DATA - contract data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| name | string |  |
| barCodePrefix | string |  |
| origination | string |  |
| copies | int |  |
