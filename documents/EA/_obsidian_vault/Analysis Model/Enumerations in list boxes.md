---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/_General Rules/System behavior"
domain: "Analysis Model"
element_id: 1764655
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Enumerations in list boxes

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/_General Rules/System behavior

## 📝 Notes

Enumeration values are shown in order defined by SORT ORDER attribute of enumeration table. Values which doesn't contain any value in SORT ORDER attribute are displayed in alphabetical order. When some values in one table contain SORT ORDER and another don't, then values with filled SORT ORDER are shown first and values with null are shown after them. Values with the same SORT ORDER are shown in alphabetical order. 

Every selection from enumeration will contain empty value as well. When field is mandatory, then it has to be validated on submit, that value is inserted (i.e. user can't use empty value when field is marked as mandatory)

## 🔗 Connections (1)

- ← Dependency: [[General rules for user interfaces]]

## 📊 Appears In (1 diagrams)

- Custom: General rules for system behavior
