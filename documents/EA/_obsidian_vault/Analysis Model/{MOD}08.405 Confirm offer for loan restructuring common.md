---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Loan Restructuring/Access Rights"
domain: "Analysis Model"
element_id: 1862181
diagrams: 6
connections: 8
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}08.405 Confirm offer for loan restructuring common

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Loan Restructuring/Access Rights

## 📝 Notes

This technical use case does all steps to confirmation an offer for loan restructuring (CEL products only) selected by GUI or by API. 
The offer limits are generate/calculated by BLAZE system and system uses them to restructure offers generation. These offers are displayed for user to choose and confirm one of them.
Within the confirmation, restructuring documentation (contract supplement) is generated. After that, the loan restructuring request is finalized and waits for fulfilling defined conditions (e.g. registration needed documents). If no documentation is supposed, evaluation and application of the service request is performed.
Service requests of "early repayment" types (i.e. FER, PER, CET, COP) are canceled at the offer confirmation.

Function is moved from  08.404 Confirm offer for loan restructuring

## 🔗 Connections (8)

- ← UseCase «include»: [[08.404 Confirm offer for loan restructuring (UseCase 1862186)]]
- → Dependency «invokes»: [[08.920 Evaluate collection tool service request]]
- → Dependency: [[Deactivate contract early termination requests]]
- → Dependency: [[Determine first installment for loan restructuring]]
- → Realisation: [[{ADD}08.405 Confirm offer for loan restructuring common]]
- → Dependency: [[Calculate financial parameters for loan restructuring]]
- → UseCase «include»: [[{MOD}13.205 Create contract supplement documents v2]]
- ← Dependency «invokes»: [[01.812 Confirm ContractLRESRequest offer service (UseCase 1869797)]]

## 📊 Appears In (6 diagrams)

- Custom: Access Rights
- Custom: CBL-11449 (CSI-314) Loan restructuring printout
- Custom: CBL-9759 (CLM-3060) Create API for Loan restructuring
- Custom: CBL-9759 (CLM-3088) Loan restructuring offer calculation update
- Use Case: Loan restructuring request creation - externally
- Use Case: Loan restructuring request creation - via GUI
