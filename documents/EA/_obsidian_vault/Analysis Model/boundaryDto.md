---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/CSD/Boundary"
domain: "Analysis Model"
element_id: 1463896
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 boundaryDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/CSD/Boundary

## 🔗 Connections (3)

- ← Dependency: [[BoundarySearchResponse]]
- → Dependency: [[boundaryTypeDto]]
- → Dependency: [[boundaryExtDto]]

## 📊 Appears In (1 diagrams)

- Logical: Boundary

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| activeYn | boolean |  |
| name | string |  |
| id | long |  |
| extensions | boundaryExtDto |  |
| description | string |  |
| boundaryTypeDto | boundaryTypeDto |  |
| audit | audit |  |
| code | string |  |
