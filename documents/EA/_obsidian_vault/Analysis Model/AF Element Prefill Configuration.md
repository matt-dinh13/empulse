---
type: Class
stereotype: "abstract"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Logical Data Model/AF configuration"
domain: "Analysis Model"
element_id: 1738688
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 AF Element Prefill Configuration

> **Type**: Class · **Stereotype**: «abstract»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Logical Data Model/AF configuration

## 📝 Notes

Configuration of one application form GUI element in a relation with particular source for its prefilling.

## 🔗 Connections (2)

- → Dependency: [[AF Prefill Source]]
- → Aggregation: [[AF Element Configuration]]

## 📊 Appears In (1 diagrams)

- Logical: AF configuration

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Editable | boolean |  |
| Prefill source | AF Prefill Source |  |
| Prefill source priority | int |  |
| Default value | string |  |
