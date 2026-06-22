---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Installment Schedule/Installment Schedule/Access Rights"
domain: "Analysis Model"
element_id: 1879453
diagrams: 5
connections: 5
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}03.037 Deduct interest overcharge while shortening first interest period

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Installment Schedule/Installment Schedule/Access Rights

## 📝 Notes

This technical use case ensures recalculation of the installment schedule so that interest overcharge (i.e. interest charged between contract sign date and date when the client receive money) is deducted from the last installment (or installments) interests.
The calculation is raised by importing of disbursement confirmation file where paid date is used as date when the client receive money (i.e. loan providing date). This feature is only effective for CASH LOAN product types with 30/360 way of annuity calculation and the Basic/Extended1 algorithms for generation of installment schedule.
A usage of the feature is switched on/off in Global Parameters.Deduct Interest Overcharge

## 🔗 Connections (4)

- ← UseCase «include»: [[{MOD}05.310 Process disbursement confirmations]]
- → Realisation: [[{ADD}03.037 Deduct interest overcharge while shortening first interest period]]
- → Realisation: [[REQ#1 Adding validations to all functionalities depending on existence of an installment schedule]]
- → Dependency: [[Recalculate Presented Interest rates on financial parameters change]]

## 📊 Appears In (5 diagrams)

- Custom: Access Rights
- Use Case: Deducting interest overcharge while shortening first interest period
- Use Case: Disbursement confirmations
- Use Case: ISG - Generate installment schedule
- Use Case: OVERVIEW - Installment Schedule
