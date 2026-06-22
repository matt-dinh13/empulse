---
type: Class
stereotype: "DWH interface"
package: "HomerSelect/BSL/Analysis Model/_Interface/DWH tables/PCG/Product Catalogue"
domain: "Analysis Model"
element_id: 1371218
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 HOM_SERV_EXCLUSIV_RULE_001

> **Type**: Class · **Stereotype**: «DWH interface»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/DWH tables/PCG/Product Catalogue

## 📝 Notes

Defines pairs of services which are mutually exclusive (cannot be adjusted together on a single contract). Exclusivity is defined between services regardless of their versions

## 🔗 Connections (2)

- → Dependency: [[HOM_SERVICE_001]]
- → Dependency: [[HOM_SERVICE_001]]

## 📊 Appears In (1 diagrams)

- Logical: Service (DWH Interface)

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| service code 1 | HOM_SERVICE_001 |  |
| service code 2 | HOM_SERVICE_001 |  |
| archived | boolean |  |
