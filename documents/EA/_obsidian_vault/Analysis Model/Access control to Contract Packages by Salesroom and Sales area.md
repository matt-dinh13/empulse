---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Contract package tracking/Access Rights"
domain: "Analysis Model"
element_id: 1218233
diagrams: 3
connections: 7
tags:
  - requirement
  - analysis-model
---

# 📋 Access control to Contract Packages by Salesroom and Sales area

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Contract package tracking/Access Rights

## 📝 Notes

Entry condition A: User has access right to all salesrooms for the given use case
Entry condition B: User is currently logged on Salesroom
Entry condition C: User has access right to all sales areas for the given use case
Entry condition D: User is currently logged on a Sales area
If GlobalParameter.UseSalesArea = False then set C = True and D = False.


	
- If A = False AND B = False then
no contract/application is accessible (message Your search did not match any results because of you are not logged on any salesroom). Note that this condition covers implicitly also C = False AND D = False.


	
- Else if A = False AND B = True AND C = False AND D = False then
no contract/application is accessible (message MSG_SalesAreaRequired).
	
- Else if A = True AND B = True AND C = False AND D = False then
no contract/application is accessible (message MSG_SalesAreaRequired).
	
- Else if A = True AND B = False AND C = False AND D = False then
no contract/application is accessible (message MSG_SalesAreaRequired).


	
- Else if A = False AND B = True AND C = False AND D = True then
only contracts/applications which has Salesroom = Get salesroom by operation(APPLICATION_CREATED) and were created in Sales area or which was created remotelycan be accessed.
	
- Else if A = True AND B = True AND C = False AND D = True then
only contracts/applications which has Salesroom = Get salesroom by operation(APPLICATION_CREATED) and were created in Sales area or which was created remotely can be accessed.


	
- Else if A = True AND B = False AND C = False AND D = True then
only contracts/applications which were created in Sales area can be accessed (without salesroom restrictions).


	
- Else if A = False AND B = True AND C = True AND D = True then
only contracts/applications which has Salesroom = Get salesroom by operation(APPLICATION_CREATED) and were created in Sales area  or which was created remotely can be accessed.
	
- Else if A = True AND B = True AND C = True AND D = True then
only contracts/applications which has Salesroom = Get salesroom by operation(APPLICATION_CREATED) and were created in Sales area or which was created remotely can be accessed.
	
- Else if A = True AND B = False AND C = True AND D = True then
only contracts/applications which were created in Sales area can be accessed (without salesroom restrictions).


	
- Else if A = True AND B = False AND C = True AND D = False then
contracts/applications can be accessed without salesroom or sales area restrictions.
	
- Else if A = False AND B = True AND C = True AND D = False then
only contracts/applications which has Salesroom = Get salesroom by operation(APPLICATION_CREATED) or which was created remotely can be accessed.


Sales area where Contract was created = Contract.SalesArea

## 🔗 Connections (7)

- ← Dependency: [[01.250 Print contract package (UseCase 1759990)]]
- ← Dependency: [[01.240 Remove from contract package (UseCase 1759989)]]
- ← Dependency: [[01.230 Show contract package detail (UseCase 1759985)]]
- ← Dependency: [[01.220 Search for contract package (UseCase 1759984)]]
- ← Dependency: [[01.200 Add to contract package (UseCase 1759983)]]
- ← Dependency: [[01.260 Send contract package to central office (UseCase 1759981)]]
- ← Dependency: [[01.265 Receive contract package (UseCase 1759980)]]

## 📊 Appears In (3 diagrams)

- Custom: Access Rights
- Logical: Business Rules
- Use Case: Contract tracking
