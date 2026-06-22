---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/CLM/CBL-23168 (CLM-5891) [VAS] Standalone PPI as a second loan"
domain: "Requirements Model"
element_id: 1805086
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 Finishing of SAI with installment on customer request

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/CLM/CBL-23168 (CLM-5891) [VAS] Standalone PPI as a second loan

## 📝 Notes

Operator can use the current function for finishing the SAI contract available on the Contract detail UI.
This function is only available when the customer repays all prescribed installments (i.e. there is no unpaid debt on the SAI contract). For now, small underpayment is not supported, i.e. the customer is needed to repay whole prescribed amount.
If a FER request has been created for the contract, system try to execute it in moment of the Finish contract action is run.
SAI contract can also be finished automatically after all debt is repaid.

## 📊 Appears In (1 diagrams)

- Custom: CBL-23168 (CLM-5891) [VAS] Standalone PPI as a second loan
