---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Loan Restructuring/Access Rights"
domain: "Analysis Model"
element_id: 1862192
diagrams: 7
connections: 10
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}08.403 Create request for loan restructuring common

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Loan Restructuring/Access Rights

## 📝 Notes

This technical use case creates LoanServiceRequest according input parameter provided by GUI or by API.
At the end, a request to LAP is sent.  

Function is moved from  08.402 Create request for loan restructuring

## 🔗 Connections (10)

- → Dependency: [[Create contract supplement rule (Requirement 1879308)]]
- → UseCase «include»: [[13.150 Send supplement to approval]]
- → Realisation: [[{ADD}08.403 Create request for loan restructuring common]]
- → Dependency: [[Check TopUp overlap period for contract]]
- → Dependency: [[{MOD}Determine first due date of restructured installments]]
- ← UseCase «include»: [[08.402 Create request for loan restructuring (UseCase 1862199)]]
- → Dependency: [[Pause bonus service evaluation]]
- → Dependency: [[Determine first installment for loan restructuring]]
- → Dependency: [[{MOD}Total amount to restructuring calculation]]
- ← UseCase «include»: [[01.810 Create ContractLRESRequest service (UseCase 1869794)]]

## 📊 Appears In (7 diagrams)

- Custom: Access Rights
- Custom: CBL-11449 (CSI-314) Loan restructuring printout
- Custom: CBL-18427 (CSI-2407) TopUp Service usage
- Custom: CBL-9759 (CLM-3060) Create API for Loan restructuring
- Custom: CBL-9759 (CLM-3088) Loan restructuring offer calculation update
- Use Case: Loan restructuring request creation - externally
- Use Case: Loan restructuring request creation - via GUI
