---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_ALOP_DATA"
domain: "Analysis Model"
element_id: 1879501
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 PhoneNumber

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_ALOP_DATA

## 📝 Notes

Entity representing an instance of a single client's contact (mobile, phone).
Only official contacts are presented here

Source: data.phoneNumbers

## 🔗 Connections (1)

- ← Dependency: [[ClientDataDto (Class 1879504)]]

## 📊 Appears In (1 diagrams)

- Logical: HO_ALOP_DATA

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| type | string |  |
| number | string |  |
| extension | string |  |
