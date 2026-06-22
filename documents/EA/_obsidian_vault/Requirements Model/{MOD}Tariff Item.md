---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/In process/PCG/PH/PCG-5511/PCG-5517 CBL-29642 BRPH-2099 - Create New Service Type: Interest Back"
domain: "Requirements Model"
element_id: 1867088
diagrams: 19
connections: 43
tags:
  - class
  - requirements-model
---

# 🔷 {MOD}Tariff Item

> **Type**: Class
> **Package**: HomerSelect/BSL/Requirements Model/In process/PCG/PH/PCG-5511/PCG-5517 CBL-29642 BRPH-2099 - Create New Service Type: Interest Back

## 📝 Notes

The entity keeps financial definition of individual Tariff Item (fee/penalty) of a Tariff on basis of a Tariff Item Type

## 🔗 Connections (43)

- ← Dependency: [[Tariff Item (Class 1152473)]]
- ← Dependency: [[Tariff Item (Class 1152473)]]
- ← Dependency: [[Tariff Item (Class 1152473)]]
- ← Dependency: [[Tariff Item (Class 1152473)]]
- ← Dependency: [[Tariff Item (Class 1152473)]]
- ← Dependency: [[Tariff Item (Class 1152473)]]
- ← Dependency: [[Tariff Item (Class 1152473)]]
- ← Dependency: [[Tariff Item (Class 1152473)]]
- ← Dependency: [[Tariff Item (Class 1152473)]]
- ← Dependency: [[Tariff Item (Class 1152473)]]
- ← Dependency: [[Tariff Item (Class 1152473)]]
- ← Dependency: [[Tariff Item (Class 1152473)]]
- ← Dependency: [[Tariff Item (Class 1152473)]]
- ← Dependency: [[Tariff Item (Class 1152473)]]
- ← Dependency: [[Tariff Item (Class 1152473)]]
- ← Dependency: [[Tariff Item (Class 1152473)]]
- ← Dependency: [[Tariff Item (Class 1152473)]]
- ← Dependency: [[Tariff Item (Class 1152473)]]
- ← Dependency: [[Tariff Item (Class 1152473)]]
- ← Dependency: [[Tariff Item (Class 1152473)]]
- ← Dependency: [[Offer Result Tariff Item]]
- ← Association: [[Penalty Over Limit]]
- → Dependency: [[{MOD}Base Type]]
- → Dependency: [[Rounding (Enumeration 1238151)]]
- → Dependency: [[{MOD}Base Type Usage]]
- → Dependency: [[Tariff Annual Rate Projection]]
- → Dependency: [[{MOD}Base Type Usage]]
- → Dependency: [[{MOD}Base Type Usage]]
- → Dependency: [[{MOD}Base Type]]
- → Dependency: [[{MOD}Base Type]]
- → Dependency: [[{MOD}Base Type]]
- → Aggregation: [[{MOD}Tariff]]
- → Dependency: [[Rounding Scale Type]]
- → Association: [[Installment Part (Class 1857180)]]
- → Dependency: [[{MOD}Base Type Usage]]
- → Dependency: [[Tariff Item Type]]
- → Dependency: [[Tariff Item Calculation Method]]
- → Association: [[Tariff Item Label]]
- → Dependency: [[Tariff Item Group]]
- ← Association: [[Charged Fee To Request]]
- ← Association: [[Offer Tariff Item]]
- ← Association: [[Offer Installment Part]]
- ← Association: [[{MOD}FP Tariff Item]]

## 📊 Appears In (19 diagrams)

- Custom: PCG-5511 CBL-29642 BRPH-2099 - Create New Service Type: Interest Back
- Logical: Base Types
- Logical: CEL Rewards request
- Logical: Change due date request
- Logical: Checking Terms of Loan Service Request
- Logical: Contract - Financial parameters
- Logical: Contract - Services
- Logical: Early repayment request
- Logical: Fees and Penalties in context
- Logical: Installment Schedule
- Logical: Loan consolidation - Logical Data Model
- Logical: Loan restructuring request domain
- Logical: Loan Service Request domain
- Logical: LSR.Insurance Offer - Logical Data Model
- Logical: Offer Financial Parameters
- Logical: Payment holiday request
- Logical: Penalty Over Limit
- Logical: Tariff and Tariff Item Management
- Logical: Tariff data synchronization mapping

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | Text |  |
| Type | Tariff Item Type |  |
| Group | Tariff Item Group |  |
| Limit Number Based On | Base Type |  |
| Limit Number From | Number |  |
| Limit Number To | Number |  |
| Limit Amount Based On | Base Type |  |
| Limit Amount From | Financial Amount |  |
| Limit Amount To | Financial Amount |  |
| Calculation Method | Tariff Item Calculation Method |  |
| Amount | Financial Amount |  |
| Percentage | Percentage |  |
| Percentage Based On | Base Type |  |
| Rounding | Rounding |  |
| Rounding Scale | Rounding Scale Type |  |
| Min Amount | Financial Amount |  |
| Max Amount | Financial Amount |  |
| Annual Rate Projection | Tariff Annual Rate Projection |  |
| Tax | Percentage |  |
| Min Amount To Zero | Presented IR Type | false |
| Limit Value Based On | {MOD}Base Type |  |
| Limit Value | string |  |
| {ADD}Divide By Terms | boolean | false |
