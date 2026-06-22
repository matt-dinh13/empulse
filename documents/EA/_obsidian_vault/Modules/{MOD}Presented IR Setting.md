---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Presented Interest Rates/Business Rules"
domain: "Modules"
element_id: 1796337
diagrams: 6
connections: 11
tags:
  - class
  - modules
---

# 🔷 {MOD}Presented IR Setting

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Presented Interest Rates/Business Rules

## 📝 Notes

Defines which algorithm is used for rounding of Presented interest rate.

## 🔗 Connections (11)

- → Dependency: [[Product Type (Enumeration 1879104)]]
- → Dependency: [[Presented IR Type]]
- → Dependency: [[Presented Interest Rate Case]]
- → Dependency: [[{MOD}Presented IR setting validation rules]]
- → Dependency: [[Rounding (Enumeration 1238151)]]
- ← Dependency: [[List of Presented IR]]
- ← Dependency: [[Calculation of Presented IR types]]
- ← Dependency: [[PIRSettingsDto]]
- ← Association: [[Loan Service Request Presented Interest Rate]]
- ← Association: [[Offer Presented Interest Rate]]
- ← Association: [[Contract Presented Interest Rate]]

## 📊 Appears In (6 diagrams)

- Custom: Evaluation of Presented interest rates
- Logical: Contract - Financial parameters
- Logical: Loan Service Request domain
- Logical: Offer Financial Parameters
- Logical: Presented interest rate - Setting
- Logical: Presented Interest Rate Settings

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| {DEL}Valid From | date |  |
| {DEL}Valid To | date |  |
| Product Type | Presented IR Type |  |
| Case | Presented Interest Rate Case |  |
| Presented IR Type | Presented IR Type |  |
| Display Name | text |  |
| Print Name | text |  |
| Order | int |  |
| Display in Offer | boolean |  |
| Display in Contract | boolean |  |
| Display in Printout | boolean |  |
| Rounding | Rounding |  |
| Rounding Scale | Rounding Scale Type |  |
| {ADD}Code | string |  |
| {ADD}Active | boolean |  |
