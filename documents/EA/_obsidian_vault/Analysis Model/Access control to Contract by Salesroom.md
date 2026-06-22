---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/Fill in application - 1SP/Access Rights"
domain: "Analysis Model"
element_id: 1878882
diagrams: 15
connections: 16
tags:
  - requirement
  - analysis-model
---

# 📋 Access control to Contract by Salesroom

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/Fill in application - 1SP/Access Rights

## 📝 Notes

Entry condition A: User has access right to all salesrooms
Entry condition B: User is currently logged on Salesroom	

	
- If A = False AND B = False then
the contract is not accessible.
	
- If (A = False AND B = True) or (A = True AND B = True) then
the contract is accessible if it was created(Get salesroom by operation(APPLICATION_CREATED) in Salesroom or it was created remotely
	
- If A = True AND B = False then
the contract can be accessed without salesroom restriction.

Only contracts related to active salesroom can be accessed.
The same rules are valid for credit applications (initial phase of contract).

## 🔗 Connections (16)

- ← Dependency: [[01.305 Inform client (UseCase 626513)]]
- ← Dependency: [[01.031 Release assigned contract (UseCase 1736431)]]
- ← Realisation: [[{MOD}01.081 Fill in application - 1SP]]
- ← Dependency: [[{MOD}01.082 Fill in application - 1BoD]]
- ← Dependency: [[01.083 Fill in application - 2BoD (UseCase 1811345)]]
- ← Dependency: [[01.158 Accept offer (UseCase 1827719)]]
- ← Dependency: [[{MOD}01.159 Reject offer]]
- ← Dependency: [[01.325 Cancel In Pre-Process or In Process contract manually (UseCase 1850515)]]
- ← Dependency: [[01.320 Cancel approved contract manually (UseCase 1850514)]]
- ← Dependency: [[01.590 Cancel active contract manually (UseCase 1850510)]]
- ← Dependency: [[01.340 Cancel contract with generated offers manually (UseCase 1850505)]]
- ← Dependency: [[01.592 Cancel paid-off contract manually (UseCase 1850504)]]
- ← Dependency: [[01.330 Cancel signed contract manually (UseCase 1850502)]]
- ← Dependency: [[{ADD}01.650 Edit Contract Commodity [CLM]]]
- ← Dependency: [[01.650 Edit Contract Commodity (UseCase 1852203)]]
- ← Dependency: [[01.180 Sign contract manually (UseCase 1878503)]]

## 📊 Appears In (15 diagrams)

- Custom: Access Rights
- Custom: Access Rights
- Custom: Access Rights
- Custom: Access Rights
- Custom: Access Rights
- Custom: Access Rights
- Custom: Access Rights
- Custom: Access Rights
- Custom: Common Business Rules for Contract Management
- Use Case: 2BoD processing
- Use Case: Contract detail
- Use Case: Edit contract documents
- Use Case: Edit DDM documents
- Use Case: Inform client
- Use Case: Manage contract commodities
