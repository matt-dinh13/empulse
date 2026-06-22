---
type: Class
stereotype: "Represntation"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Services/Service Type Specific Extension/GRPER"
domain: "Modules"
element_id: 1563192
diagrams: 2
connections: 1
tags:
  - class
  - modules
---

# 🔷 ServiceParametersGRPER

> **Type**: Class · **Stereotype**: «Represntation»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Services/Service Type Specific Extension/GRPER

## 📝 Notes

{ADD PCG-2095/}
Specific for Service.ServiceType = GRPER

## 🔗 Connections (1)

- ← Dependency: [[{MOD}ServiceTypeDto]]

## 📊 Appears In (2 diagrams)

- Logical: GRPER Data
- Logical: Service Type Specific Extension

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| earlyRepymentAlgorithm | string |  |
| length | int |  |
| moratorium | int |  |
| paymentDisciplineParameters | PaymentDisciplineParameters |  |
| premiumInterestRate | percentage |  |
