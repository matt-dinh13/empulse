---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Cooling-off period/Access Rights"
domain: "Analysis Model"
element_id: 1862256
diagrams: 10
connections: 13
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}08.252 Process cooling-off period

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Cooling-off period/Access Rights

## 📝 Notes

The use case describes application of the cooling-off service on the processed contract

## 🔗 Connections (12)

- ← Dependency: [[ER processing]]
- ← UseCase «include»: [[{ADD}08.254 Check and process Cooling-off period]]
- → Realisation: [[Update processing of FER_CET_COP service]]
- → UseCase «include»: [[{MOD}03.070 Calculate early repayment amount]]
- → Dependency: [[Terminate Contract Service after its processing]]
- → UseCase «include»: [[{MOD} 03.110 Perform early repayment installment schedule]]
- → Dependency: [[Terminate Contract Service if cannot be processed]]
- → Dependency: [[Create business event]]
- → Dependency: [[Check if Installment Schedule is Closed]]
- → Realisation: [[08.252 Process cooling-off period]]
- ← Dependency «invokes»: [[08.005 Apply service on contract (UseCase 1872539)]]
- ← UseCase: [[Time (Actor 1880869)]]

## 📊 Appears In (10 diagrams)

- Custom: Access Rights
- Custom: CBL-14504 (CLM-5127) Asynchronous contract activation
- Custom: CBL-7307 (CLM-2276) Blocking disbursement on signed contracts before finishing
- Custom: CBL-9870 (CSI-92) COP Event information - Loan Service Request JMS
- Custom: CLM-3822 - New SAI - COP processing
- Custom: IS-443 (CBL-1940) COP_CET_services_changes
- Use Case: Cooling-off period processing
- Use Case: Evaluation of services on system events (Java)
- Use Case: OVERVIEW - Installment Schedule
- Use Case: PAYM-1887 (CBL-4285) - Pairing time for payment made before due date - services alignment
