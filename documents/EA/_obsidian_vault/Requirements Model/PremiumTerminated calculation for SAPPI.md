---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/CSI/CBL-24763 (CSI-3333) [SAPPI] Adding new calculation for the premium amount when insurance is terminated"
domain: "Requirements Model"
element_id: 1814840
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 PremiumTerminated calculation for SAPPI

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/CSI/CBL-24763 (CSI-3333) [SAPPI] Adding new calculation for the premium amount when insurance is terminated

## 📝 Notes

Goal of the requirement is to update PremiumTerminated value in Insurance Period for accounting purpose.

Expected:
 

	
- update of the Calculate SAI terminated installment part amounts with remaining principal (i.e. principal which doesn't be paid by client.) - ensured by Installments


	
- update of UC08.121 Terminate contract insurance common with getting "remaining principal" amount and calculation PremiumTerminated


Definition of "remaining principal":

	
- Sum of Principal amounts between the nearest future standard installment after termination and the last installment
i.e. if you have 24 installments and client terminate the insurance after 12th installment, remaining principal will be sum of amount between 13th and 24th installment.

## 🔗 Connections (1)

- ← Dependency: [[{MOD}08.121 Terminate contract insurance common]]

## 📊 Appears In (1 diagrams)

- Custom: CBL-24763 (CSI-3333) [SAPPI] Adding new calculation for the premium amount when insurance is terminated
