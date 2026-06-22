---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Payment Holidays/Access Rights"
domain: "Analysis Model"
element_id: 1862156
diagrams: 6
connections: 8
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}08.358 Create request for payment holiday common

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Payment Holidays/Access Rights

## 📝 Notes

This technical use case creates LoanServiceRequest generated in GUI or by API.
If any service documentation is set, it is processed as well. 
At the end, an asynchronous task for request processing is registered (if no approval is needed).  

Function is moved from {MOD}08.355 Create request for payment holiday

## 🔗 Connections (8)

- → UseCase «include»: [[{MOD}13.205 Create contract supplement documents v2]]
- → Dependency «invokes»: [[08.920 Evaluate collection tool service request]]
- → Dependency: [[Check TopUp overlap period for contract]]
- → Dependency: [[Change status of Contract Supplement]]
- → Dependency: [[Create contract supplement rule (Requirement 1879308)]]
- → Realisation: [[08.358 Create request for payment holiday common]]
- ← UseCase «include»: [[01.797 Create ContractPayholRequest service]]
- ← UseCase «include»: [[08.355 Create request for payment holiday (UseCase 1862152)]]

## 📊 Appears In (6 diagrams)

- Custom: Access Rights
- Custom: CBL-18427 (CSI-2407) TopUp Service usage
- Custom: CBL-4047 (CLM-1820) Create API for PaymentHoliday
- Use Case: CSI-1119 Use DMS in UC 08.356 Generate service request document
- Use Case: Payment holiday request creation - externally
- Use Case: Payment holiday request creation - via GUI
