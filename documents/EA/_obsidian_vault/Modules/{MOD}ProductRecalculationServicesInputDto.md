---
type: Class
stereotype: "Represntation"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Product Recalculation Data"
domain: "Modules"
element_id: 1710378
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 {MOD}ProductRecalculationServicesInputDto

> **Type**: Class · **Stereotype**: «Represntation»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Product Recalculation Data

## 🔗 Connections (2)

- → Dependency: [[QualificationCriteria]]
- ← Dependency: [[service]]

## 📊 Appears In (1 diagrams)

- Logical: Product Recalculation Data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| productCode | string |  |
| productVersion | int |  |
| salesroomCode | string |  |
| terms | int |  |
| qualificationCriteria | QualificationCriteria |  |
| withLogs | boolean |  |
| {MOD}creditAmount | int |  |
