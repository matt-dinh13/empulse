---
type: Class
stereotype: "Represntation"
package: "HomerSelect/BSL/Requirements Model/Finished/PCG/PCG-5137 (PH) Unique identifier for product service"
domain: "Requirements Model"
element_id: 1845774
diagrams: 8
connections: 8
tags:
  - class
  - requirements-model
---

# 🔷 SalesDescriptionDto

> **Type**: Class · **Stereotype**: «Represntation»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/PCG/PCG-5137 (PH) Unique identifier for product service

## 🔗 Connections (8)

- ← Dependency: [[{MOD}FinancingSchemeDto]]
- ← Dependency: [[SalesDescriptionResponse]]
- → Dependency: [[SalesDescriptionAttributeDto]]
- → Dependency: [[{MOD}SalesDescriptionAssignmentDto]]
- ← Dependency: [[{MOD}ProductDto]]
- ← Dependency: [[FinancingPackageDto]]
- ← Dependency: [[TariffDto (Class 1867105)]]
- ← Dependency: [[{MOD}ServiceDto]]

## 📊 Appears In (8 diagrams)

- Custom: One Level Requirement Hierarchy
- Logical: FinancingPackageDto
- Logical: FinancingSchemeDto
- Logical: ProductDto
- Logical: Sales Descriptions
- Logical: SalesDescriptionDto
- Logical: ServiceDto
- Logical: TariffDto

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| name | string |  |
| attributes | SalesDescriptionAttributeDto |  |
| assignments | {MOD}Sales Description Assignment |  |
