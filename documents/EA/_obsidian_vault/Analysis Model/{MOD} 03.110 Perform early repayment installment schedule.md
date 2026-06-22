---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/COMMON for Early Repayment/Access Rights"
domain: "Analysis Model"
element_id: 1876307
diagrams: 10
connections: 14
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD} 03.110 Perform early repayment installment schedule

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/COMMON for Early Repayment/Access Rights

## 📝 Notes

This use case describes performing Full Early Repayment (FER) of contract.
ER means summarizing all future unpaid debt (installments) to a final (Early repaid) installment. Important condition for the installment schedule re-generating is receiving a payment for the contract which is able to cover entire outstanding debt calculated for FER.
Due date of the FER installment is set to the nearest future installment. it means a payment to amortize all debt has to come on this date at least It also means the FER cannot be performed within the past.
ER cannot be performed for a terminated contract.
Within ER, there can be a fee charged into the ER installment (if it is defined in the product tariff).
Installments with due date before the FER installment due date stay unchanged.

For an example of FER, see Early repayment example

After re-generating the installment schedule the system generates a system event RegeneratedInstallmentScheduleSE.

## 🔗 Connections (13)

- ← Abstraction «trace»: [[REQ#3 - Revert Consolidation FER on contract]]
- ← Dependency: [[Change the calculation of interest to accrued interest and future interest]]
- ← UseCase «include»: [[{MOD}08.280 Check and process CET request]]
- ← UseCase «include»: [[{MOD}08.252 Process cooling-off period]]
- ← UseCase «include»: [[{MOD}08.220 Check and process Grace period]]
- → UseCase «include»: [[{MOD}05.200 Perform decoupling (UseCase 1854303)]]
- → Dependency: [[Recalling of terminated Installment schedule]]
- → UseCase: [[05.030 Couple incoming payment manually]]
- → Realisation: [[Update FER request processing]]
- → Realisation: [[03.110 Perform early repayment installment schedule]]
- → UseCase: [[05.060 Decouple incoming payment manually (UseCase 1854319)]]
- ← UseCase «include»: [[{NotImplemented}08.100 Process Full early repayment]]
- ← UseCase «include»: [[03.100 Check and process Early repayment request (UseCase 1879631)]]

## 📊 Appears In (10 diagrams)

- Custom: Access Rights
- Custom: Access Rights
- Custom: IS-7 (CBL-29) Consolidation (Top up) for cash loans
- Custom: PAYM-1520 (CBL-4166) FER - separation of interest and future interest
- Use Case: Common for Early repayment Request and Processing 
- Use Case: Contract Early Termination processing
- Use Case: Cooling-off period processing
- Use Case: Full early repayment processing
- Use Case: Grace period processing
- Use Case: ISG - Generate installment schedule
