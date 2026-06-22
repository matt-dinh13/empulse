---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-6201 Separate DSM from BSL/LOR-9328 - Remove unused HO_CONSENT_DATA elements"
domain: "Requirements Model"
element_id: 1878248
diagrams: 4
connections: 2
tags:
  - class
  - requirements-model
---

# 🔷 DocumentAttributeBaseType

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-6201 Separate DSM from BSL/LOR-9328 - Remove unused HO_CONSENT_DATA elements

## 📝 Notes

Object containing the base data of a document's attribute.

## 🔗 Connections (2)

- ← Dependency «use»: [[DocumentAttributesDataType]]
- ← Generalization «XSDextension»: [[{MOD}DocumentAttributeType]]

## 📊 Appears In (4 diagrams)

- Custom: LOR-9328 - Remove unused HO_CONSENT_DATA elements
- Logical: HO_CONSENT_DATA
- Logical: HO_CONTRACT_DATA - client data
- Logical: HO_GENERAL_TYPES

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| value | string |  |
