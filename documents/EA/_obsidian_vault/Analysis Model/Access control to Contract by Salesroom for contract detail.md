---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Show contract detail/Access Rights"
domain: "Analysis Model"
element_id: 1755897
diagrams: 2
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Access control to Contract by Salesroom for contract detail

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Show contract detail/Access Rights

## 📝 Notes

Salesroom where the contract was created is get according to the rule Get salesroom by operation, passed is Contract and operation = APPLICATION_CREATED

Entry condition A: User has access right to all salesrooms
Entry condition B: User is currently logged on Salesroom[user]
Entry condition C: User has access right 01.210 Show contract detail (managed salesrooms) and try to call 01.210 Show contract detail after calling 01.300 Search for contract using Custom SNM search form panel.

	
- If C = True then the contract can be accessed only if it is related to the managed salesroom (salesroom where user is DSM or any of his subordinate is DSM).	


	
- If A = False AND B = False AND C = False then
the contract is not accessible.
	
- If (A = False AND B = True AND C = False) or (A = True AND B = True AND C=False) then
the contract is accessible if it was created in Salesroom[user]
	
- If A = True AND B = False AND C =False then 
he contract can be accessed without salesroom restriction.

## 🔗 Connections (1)

- ← Dependency: [[{MOD}01.210 Show contract detail]]

## 📊 Appears In (2 diagrams)

- Custom: Access Rights
- Custom: Business Rules
