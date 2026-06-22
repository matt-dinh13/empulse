---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-6201 Separate DSM from BSL/LOR-9328 - Remove unused HO_CONSENT_DATA elements"
domain: "Requirements Model"
element_id: 1817823
diagrams: 2
connections: 2
tags:
  - class
  - requirements-model
---

# 🔷 DocumentsDataType

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-6201 Separate DSM from BSL/LOR-9328 - Remove unused HO_CONSENT_DATA elements

## 📝 Notes

Object representing a list of documents (wrapping elements) related to some particular entity (e.g. application, contract, client, etc.).

## 🔗 Connections (2)

- ← Dependency «use»: [[PersonDataType]]
- → Dependency «use»: [[DocumentDataType]]

## 📊 Appears In (2 diagrams)

- Custom: LOR-9328 - Remove unused HO_CONSENT_DATA elements
- Logical: HO_CONSENT_DATA

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| document | DocumentDataType |  |
