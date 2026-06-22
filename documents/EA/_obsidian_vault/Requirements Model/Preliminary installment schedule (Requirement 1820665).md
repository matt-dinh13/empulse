---
type: Requirement
stereotype: "Algorithm"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-8844 Provide annuity of CEL before signing/LOR-9002 Generate Installment schedule via IS module"
domain: "Requirements Model"
element_id: 1820665
diagrams: 4
connections: 6
tags:
  - requirement
  - requirements-model
---

# 📋 Preliminary installment schedule

> **Type**: Requirement · **Stereotype**: «Algorithm»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-8844 Provide annuity of CEL before signing/LOR-9002 Generate Installment schedule via IS module

## 📝 Notes

Inputs:
- Offer (financial parameters)

Output:
- data structures Offer Installment, Offer Installment Part

If ProductType = CEL or SAI then system generates preliminary Installment Schedule according to parameter generateInstallmentScheduleExternally:
- when parameter is TRUE then system calls API of external IS generator module
- when parameter is FALSE then rule Generation of Preliminary Installment Schedule.
Installment Schedule is saved into offer structure (Offer Installment, Offer Installment Part).

If ProductType = REL and exists Financing scheme code for chosen Offer(Offer.FS_Code) then system displays Installment schedule from offer structure (Offer Installment, Offer Installment Part)

Note: 
Take into account that the data are transformed to Offer Installment and Offer Installment Part only in order to have standardized source for displaying and printing, i.e. the data are not persisted in database (Offer is not updated).

## 🔗 Connections (6)

- → Dependency: [[{MOD}Generation of Preliminary Installment Schedule]]
- ← Dependency: [[{MOD}02.830 Recalculate Product Offers for External system]]
- ← Dependency: [[02.820 Calculate Product Offers for External system (UseCase 1820901)]]
- ← Dependency: [[01.071 Show product offer info (overview) (UseCase 1827714)]]
- ← Dependency: [[{MOD}01.075 Print product offer detail]]
- ← Dependency: [[{MOD}01.076 Display preliminary installment schedule]]

## 📊 Appears In (4 diagrams)

- Custom: LOR-9002 Generate Installment schedule via IS module
- Use Case: Choose product offer
- Use Case: Offer detail
- Use Case: Product Calculator for External system - Calculate/Recalculate
