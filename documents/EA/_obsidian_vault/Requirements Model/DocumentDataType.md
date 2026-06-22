---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-6201 Separate DSM from BSL/LOR-9328 - Remove unused HO_CONSENT_DATA elements"
domain: "Requirements Model"
element_id: 1817826
diagrams: 2
connections: 3
tags:
  - class
  - requirements-model
---

# 🔷 DocumentDataType

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-6201 Separate DSM from BSL/LOR-9328 - Remove unused HO_CONSENT_DATA elements

## 📝 Notes

Type represents structure for documents.

## 🔗 Connections (3)

- → Generalization «XSDextension»: [[DocumentTypeType]]
- → Dependency «use»: [[DocumentAttributesDataType]]
- ← Dependency «use»: [[DocumentsDataType]]

## 📊 Appears In (2 diagrams)

- Custom: LOR-9328 - Remove unused HO_CONSENT_DATA elements
- Logical: HO_CONSENT_DATA

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| documentAttributes | DocumentAttributesDataType |  |
