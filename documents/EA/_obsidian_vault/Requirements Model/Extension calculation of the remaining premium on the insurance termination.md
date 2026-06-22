---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-14272 (CSI-1000) Update Termination Feature for Regular and Upfront Insurance"
domain: "Requirements Model"
element_id: 1637940
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 Extension calculation of the remaining premium on the insurance termination

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-14272 (CSI-1000) Update Termination Feature for Regular and Upfront Insurance

## 📝 Notes

The goal of this task is change of calculation the remaining (unused part) insurance premium when an insurance related to a CEL contract is terminated.
The intended changes are concentrated on the Calculate new installment amount on insurance termination which is called from following use cases:

	
- UC 11.121 Terminate insurance contract manually, UC08.121 Terminate contract insurance common, UC08.453 Get Contract insurance Terminate preview service

Remaining insurance premium and future provided credit amount (remaining principal) after the remaining premium deduction will be provided via IS API. Input parameters for the API calling:

	
- Contract, TerminationDate (due date of nearest installment where insurance is terminated), insurance premium amount of the insurance to be terminated, way of remaining premium calculation (from Insurance Service setting)

The API returns the remaining premium amount and the future provided credit amount (base for annuity calculation) which will be used in the current UCs

Next (additional) change is in getting Service definition parameters - newly will be taken via PRC (Product catalogue) REST API (see Check conditions to insurance termination)
Beside above mentioned UCs, the Service definition parameters will be used in UC08.454 Terminate contract insurance service.

Changes marked as CSI-1174

## 📊 Appears In (1 diagrams)

- Custom: CBL-14272 (CSI-1000) Update Termination Feature for Regular and Upfront Insurance
