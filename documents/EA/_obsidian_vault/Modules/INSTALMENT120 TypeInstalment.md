---
type: DataType
stereotype: "Enumeration"
package: "HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Installment Schedule/Communication model/Communication tables"
domain: "Modules"
element_id: 1224903
diagrams: 1
connections: 1
tags:
  - datatype
  - modules
---

# 📐 INSTALMENT120 TypeInstalment

> **Type**: DataType · **Stereotype**: «Enumeration»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Installment Schedule/Communication model/Communication tables

## 📝 Notes

Enumeration with possible types of installment parts for CEL.
It is used even for transformation from

	
- installment part type --> code known by OBS in case of Interest, Principal, Overpayment


	
- tariff item type code of installment part --> code known by OBS in case of Fee and Penalty

## 🔗 Connections (1)

- ← Dependency «use»: [[INSTALMENT120]]

## 📊 Appears In (1 diagrams)

- Logical: CEL Installment schedule - Communication tables

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | string |  |
| Value | string |  |
