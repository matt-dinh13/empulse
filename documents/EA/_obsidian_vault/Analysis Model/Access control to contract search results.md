---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract search/Business rules"
domain: "Analysis Model"
element_id: 1822345
diagrams: 2
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Access control to contract search results

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract search/Business rules

## 📝 Notes

Entry condition A: User has access right to all salesrooms (01.300 Search for contract (all salesrooms))
Entry condition B: User is currently logged on Salesroom
Entry condition C: User has access right 01.300 Search for contract (custom SNM search) AND user is searching using Custom SNM search
Entry condition D: User has access right to all sales areas (01.300 Search for contract (all sales areas))
Entry condition E: User is currently logged on a Sales area
If GlobalParameter.UseSalesArea = False then set D = True and E = True.
 

	
- If C = True then only contracts/applications of managed (salesroom where user is DSM or any of his subordinate is DSM) salesrooms can be accessed without salesroom or sales are restrictions.


	
- Else if C = False AND A = False AND B = False then
no contract/application is accessible (message Your search did not match any results because of you are not logged on any salesroom). Note that this condition covers implicitly also D = False AND E = False.


	
- Else if C = False AND A = False AND B = True AND D = False AND E = False then
no contract/application is accessible (message MSG_SalesAreaRequired).
	
- Else if C = False AND A = True AND B = True AND D = False AND E = False then
no contract/application is accessible (message MSG_SalesAreaRequired).
	
- Else if C = False AND A = True AND B = False AND D = False AND E = False then
no contract/application is accessible (message MSG_SalesAreaRequired).


	
- Else if C = False AND A = False AND B = True AND D = False AND E = True then
only contracts/applications which were created in Sales area AND on Salesroom can be accessed.


	
- Else if C = False AND A = True AND B = True AND D = False AND E = True  then
only contracts/applications which were created in Sales area AND on Salesroom can be accessed.


	
- Else if C = False AND A = True AND B = False AND D = False AND E = True then
only contracts/applications which were created in Sales area can be accessed (without salesroom are restrictions).


	
- Else if C = False AND A = False AND B = True AND D = True AND E = True then
only contracts/applications which were created in Sales area AND on Salesroom can be accessed.
	
- Else if C = False AND A = True AND B = True AND D = True AND E = True then
only contracts/applications which were created in Sales area AND on Salesroom can be accessed.
	
- Else if C = False AND A = True AND B = False AND D = True AND E = True then
only contracts/applications which were created in Sales area can be accessed (without salesroom restrictions).


	
- Else if C = False AND A = True AND B = False AND D = True AND E = False then
contracts/applications can be accessed without salesroom or sales are restrictions.


Sales area where Contract was created = Contract.SalesArea
Sales area where Application was created = Temporary_application->Salesroom.SalesArea

## 🔗 Connections (2)

- → Dependency: [[Access control to remote application]]
- ← Dependency: [[{MOD}01.300 Search for contract]]

## 📊 Appears In (2 diagrams)

- Custom: Business rules
- Use Case: Contract search
