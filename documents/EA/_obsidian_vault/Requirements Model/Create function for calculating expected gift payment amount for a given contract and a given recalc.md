---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/Finished/IS/IS-393 (CBL-1855) Full early repayment services changes"
domain: "Requirements Model"
element_id: 1290875
diagrams: 1
connections: 5
tags:
  - requirement
  - requirements-model
---

# 📋 Create function for calculating expected gift payment amount for a given contract and a given recalculation reason

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/IS/IS-393 (CBL-1855) Full early repayment services changes

## 📝 Notes

Function will calculate and return an expected amount of gift payment for a given contract and a given recalculation reason.

Input parameters: contract code (long), recalculation reason (RecalculationReason)
Output parameters: expected GP amount (MoneyDto)

If recalculationReason = 'EG' then GP amount will be calculated according to setting of installment part types included in operation (INSTALLMENTS_INCL_IN_OP) where recalculation reason = 'EG', else it will be calculated from all istallment part types.

## 🔗 Connections (5)

- → Generalization: [[Add support for FER service with included GIFT payments]]
- ← Realisation: [[{MOD}01.766 Simulate CEL service application to IS on local request]]
- ← Realisation: [[08.203 Calculate Gift Payment Amount]]
- ← Realisation: [[08.066 Calculate Full Early repayment preview (UseCase 1879648)]]
- ← Realisation: [[03.052 Create Full Early repayment request (UseCase 1879643)]]

## 📊 Appears In (1 diagrams)

- Custom: IS-393 (CBL-1855) Full early repayment services changes
