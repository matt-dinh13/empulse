---
type: Class
stereotype: "structure"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Address/Logical Data Model"
domain: "Analysis Model"
element_id: 1851454
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 KeyOrValue Type

> **Type**: Class · **Stereotype**: «structure»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Address/Logical Data Model

## 📝 Notes

It represents one entity attribute type (e.g. attribute of Address, Bank Account). It contains named value of an attribute (e.g. town name)  and code list value identifier (e.g. code of town from a code list).
If a value is chosen from entity specific code list (register), it is only stored in the Address.code attribute. For manually entered value, only Address.name is filled.

## 🔗 Connections (2)

- ← Dependency «use»: [[Address]]
- ← Dependency: [[DDM (Class 1869699)]]

## 📊 Appears In (1 diagrams)

- Logical: Address - CORE

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| name | string |  |
