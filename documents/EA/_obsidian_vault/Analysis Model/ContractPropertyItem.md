---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Collections system interfaces"
domain: "Analysis Model"
element_id: 735968
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 ContractPropertyItem

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Collections system interfaces

## 🔗 Connections (2)

- → Dependency: [[ContractStatus]]
- ← Dependency: [[ContractPropertyRQ]]

## 📊 Appears In (1 diagrams)

- Logical: LCS interface - Contract Property Service

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractNumber | string |  |
| propertyID | string |  |
| validTo | date |  |
| status | ContractStatus |  |
