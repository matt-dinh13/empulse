---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract search/Business rules"
domain: "Analysis Model"
element_id: 1822342
diagrams: 4
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 {ADD}Contract search filter - Dynamic

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract search/Business rules

## 📝 Notes

{ADD CLM-3352/}
This rule builds dynamic query based on user criteria (UC) and system criteria (SC) and returns list of contract based on it.

Input:

	
- User criteria (UC)
	
- System criteria (SC)


Output:

	
- list of contracts


Steps:
System checks and acts based on rules bellow.

Rule 1: If UC.Contract number is not Null then:

	
- System adds to list of conditions:
- Contract.Contract Code equals to UC.Contract number
	
- System continues with next rule.


Rule 2: If UC.Document type, UC.Document ID number are not Null then:

	
- System gets all clients CUID via REST API call then Customer Data.SearchCustomerDataRequest with filter=(person.documents.documentType.eq({UC.Document type})).and(person.documents.documentCode.eq({UC.Document ID number})) and projections = PARTY_DATA, ROLE_DATA as parameters.
	
- If system doesn’t receive response during defined time period. System displays no contract and error message MSG_0159 (e.g. Communication with CIF failed. Please contact system support.) and process ends.
	
- System adds to list of conditions:
- Contract CUID equals to at least one of clients CUID


	
- System continues with next rule.


Rule 3: If UC.Vin Code is not Null then:

	
- System gets all commodities by calling GET .../openapi/v1/commodities with attribute Engine Number = UC.Vin Code.
	
- If system doesn’t receive response during defined time period. System displays no contract and error message MSG_CommodityModuleUnavailable (e.g. The commodity module is unavailable. It is not possible to continue.) and process ends.
	
- System adds to list of conditions:
- Contract Commodity equals to commodity
	
- System continues with next rule.


Rule 4: If UC.NationalIdentificationNumber is not Null then:

	
- System adds to list of conditions:
- Contract->Deal->Client_Snapshot.National_Identification_Number equals to UC.NationalIdentificationNumber
	
- System continues with next rule.


Rule 5: If UC.Status is not Null then:

	
- System adds to list of conditions:
- Contract.Status in UC.Status
	
- System continues with next rule.


Rule 6: If UC.DateFrom is not Null then:

	
- System adds to list of conditions:
- Contract -> BusinessEvent[where type = CREATE_CONTRACT].TimeOfModification
	
- System continues with next rule.


Rule 7: If UC.DateTo is not Null then:

	
- System adds to list of conditions:
- Contract -> BusinessEvent[where type = CREATE_CONTRACT].TimeOfModification
	
- System continues with next rule.


Rule 8: If SC[.criteriaCode = beOnSalesroom].exists then:

	
- If UC.CurrentSalesroom is not Null then system adds to list of conditions:
- Contract - >  Business Event.Code in (SC[.criteriaCode = beOnSalesroom].Value) and .Salesroom = UC.CurrentSalesroom.
	
- System continues with next rule.


If there no more rule to check system continues with BuildQueryAndSelectContracts.

BuildQueryAndSelectContracts

	
- System builds query based on list of conditions.
	
- System selects list of contracts based on query.
	
- System passes list of contracts to GetOpenMistakeTickets.


GetOpenMistakeTickets

	
- If UC.IncludeMistakes = 0 then system returns list of contracts and process ends.-- Mistake tickets related to contracts are not displayed in the result grid
	
- System gets list of open Tickets based on the found Contracts by calling POST.../tck/rest/TicketsCounts?openStatuses=true {list of contracts in the RelatedSubjects}. The response result is used for showing count of tickets in the Search for contract result grid, possibly for next search evaluation in OpenMistakeTickets steps -- Mistake tickets related to contracts are displayed in the result grid
	
- System returns list of contracts with tickets count for displaying and process ends.

## 🔗 Connections (1)

- ← Dependency: [[{MOD}Contract search filter]]

## 📊 Appears In (4 diagrams)

- Custom: Business rules
- Custom: REQ #2 - Implement BO Limited Search
- Custom: REQ #3 - Implement CRM Search
- Use Case: Contract search
