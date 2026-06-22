---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Scheme/Provided Services/Validation Rules"
domain: "Modules"
element_id: 1668712
diagrams: 4
connections: 4
tags:
  - class
  - modules
---

# 🔷 CoolingOff Period Scheme

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Scheme/Provided Services/Validation Rules

## 📝 Notes

Definition of Cooling-off period for transformation of Transaction to Installment Plan.

## 🔗 Connections (4)

- ← Dependency: [[CoolingOffPeriodScheme]]
- ← Dependency: [[FinancingSchemeValues - validation rules]]
- → Dependency: [[Period Unit]]
- ← Dependency: [[Financing Scheme (Class 1668708)]]

## 📊 Appears In (4 diagrams)

- Custom: Financing Scheme Values - validation Rules
- Logical: CoolingOff Period Scheme
- Logical: Financing Scheme
- Logical: GetFinancingSchemeCodeLists

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | string |  |
| Name | string |  |
| Active | boolean | True |
| Is Default | boolean | False |
| Description | string |  |
| Length | int |  |
| Unit | string |  |
| AIR | decimal |  |
