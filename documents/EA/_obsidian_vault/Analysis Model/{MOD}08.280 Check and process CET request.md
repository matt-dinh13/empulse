---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Contract Early Termination/Access Rights"
domain: "Analysis Model"
element_id: 1862241
diagrams: 10
connections: 16
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}08.280 Check and process CET request

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Contract Early Termination/Access Rights

## 📝 Notes

System executes this use case to check if a Contract Early Termination repayment request exists to the contract. 
If so, system calculates remaining amount for early repayment and if the client payments are sufficient to cover all unpaid debt, the early repayment of installment schedule is performed. 
In case the client returns financed goods the part of the debt (net credit amount) is covered by internal payment. 
Finally, system sets the ER request as fulfilled.

## 🔗 Connections (16)

- ← Dependency: [[REQ 1.3 ER processing]]
- ← Dependency: [[ER processing]]
- ← UseCase «include»: [[01.730 Finish contract manually (UseCase 1852803)]]
- ← UseCase «include»: [[{MOD}05.184 Reflect change of balance]]
- ← UseCase «include»: [[08.285 Select contracts for CET evaluation (UseCase 1862249)]]
- → UseCase «include»: [[{MOD}03.070 Calculate early repayment amount]]
- → Dependency: [[Check if Installment Schedule is Closed]]
- → Realisation: [[Update processing of FER_CET_COP service]]
- → Dependency: [[Terminate Contract Service after its processing]]
- → Dependency: [[Create incoming payment rule (Requirement 1854275)]]
- ← UseCase «include»: [[08.271 Create CET repayment request (UseCase 1862246)]]
- → Dependency: [[Create business event]]
- → Realisation: [[08.280 Check and process CET request]]
- → UseCase «include»: [[{MOD}05.180 Perform coupling payments with instalments (UseCase 1854294)]]
- → UseCase «include»: [[{MOD} 03.110 Perform early repayment installment schedule]]
- → Dependency: [[Terminate Contract Service if cannot be processed]]

## 📊 Appears In (10 diagrams)

- Custom: Access Rights
- Custom: CBL-14504 (CLM-5127) Asynchronous contract activation
- Custom: CBL-7307 (CLM-2276) Blocking disbursement on signed contracts before finishing
- Custom: CBL-9102 (CLM-2824) SMS/PUSH notification when CET/FER requested via Terminals
- Custom: IS-443 (CBL-1940) COP_CET_services_changes
- Custom: IS-998 (CBL-10543) CET via MobApp and Terminals
- Use Case: Contract Early Termination processing
- Use Case: Contract finishing manually
- Use Case: OVERVIEW - Installment Schedule
- Use Case: PAYM-1887 (CBL-4285) - Pairing time for payment made before due date - services alignment
