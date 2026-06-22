---
type: Class
stereotype: "Represntation"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog API in BSL/{ADD}Services/GRPER"
domain: "Modules"
element_id: 1500464
diagrams: 1
connections: 1
tags:
  - class
  - modules
---

# 🔷 GRPERData

> **Type**: Class · **Stereotype**: «Represntation»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog API in BSL/{ADD}Services/GRPER

## 📝 Notes

{ADD PCG-2095/}
Specific for Service.ServiceType = GRPER

## 🔗 Connections (1)

- → Realisation: [[{ADD}PaymentDisciplineParameters]]

## 📊 Appears In (1 diagrams)

- Logical: GRPER Data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| earlyRepymentAlgorithm | string |  |
| length | int |  |
| moratorium | int |  |
| paymentDisciplineParameters | PaymentDisciplineParameters |  |
| premiumInterestRate | percentage |  |
