---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_CONTRACT_DATA"
domain: "Analysis Model"
element_id: 1821433
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 ContractDocumentsType

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_CONTRACT_DATA

## 📝 Notes

Object representing a list of contract documents (wrapping elements) related to the respective contract.

## 🔗 Connections (2)

- → Dependency «use»: [[ContractDocumentType]]
- ← Dependency «use»: [[ProductDetailsType]]

## 📊 Appears In (1 diagrams)

- Logical: HO_CONTRACT_DATA - contract data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractDocument | ContractDocumentType |  |
