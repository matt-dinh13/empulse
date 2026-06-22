---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract search/Business rules"
domain: "Analysis Model"
element_id: 1822344
diagrams: 4
connections: 4
tags:
  - requirement
  - analysis-model
---

# 📋 {ADD}Contract search filter - Sales agent search rule

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract search/Business rules

## 📝 Notes

{ADD CLM-2860} --- moved from {MOD}Contract search filter rules
This rule describes setting up the criteria for Sale agent search for contracts (usage of form.Sales agent search panel)
In case of canceled contract search, they are only contracts passing SIGN status (or business event)

System takes SearchCriteria (SC) by Sales agent search criteria restriction rules
Rule1: If SC.Contract number and SC.Date of birth are populated then:

	
- System gets contracts based on following criteria:
- Contract code equals to SC.Contract number
- Contract status is in SAContractSearchAllowedStatuses
- at least one Business Event related to Contract fulfills following criteria:
        - Business Event.Type is one of following - CREATE_APPLICATION, CREATE_CONTRACT, GENERATE_DOCUMENTATION, SIGN
        - If SC.CurrentUser is not NULL, add Business Event.Originator = SC.CurrentUser, else add Business Event.Salesroom Code = SC.CurrentSalesroom       
	
- If a Contract is found, then system continues with the next step else system displays MSG no contract and Process ends.
	
- System gets client date of birth via if GP CallCifRestApi = false then PartyWS.customerPersonGet else Customer Data.GetCustomerDataRequest with externalId = CUID and projections = PARTY_DATA, PARTY_DOCUMENTS as parameters.
	
- If there is no client found, then system displays MSG no contract and Process ends..
	
- If system doesn’t receive response during defined time period, system displays  MSG no contract  and error message MSG_0159 (e.g. Data are not available.) and Process ends.
	
- If client date of birth != SC.Date of Birth, then system displays MSG no contract and Process ends.
	
- It is continued with GetOpenMistakeTickets.



Rule2: If SC.Contract number, SC.Document type, SC.Document ID number (and SC.Date of birth) are populated then:

	
- System gets contract based on following criteria:
- Contract code equals to SC.Contract number
- Contract status is in SAContractSearchAllowedStatuses (global parameter)
- There is at least one Business Event fulfilling criteria:
        - Business Event.Type is one of following -  CREATE_APPLICATION, CREATE_CONTRACT, GENERATE_DOCUMENTATION, SIGN.
        - If SC.CurrentUser is not NULL, add Business Event.Originator = SC.CurrentUser, else add Business Event.Salesroom  = SC.CurrentSalesroom
	
- If a Contract is found, then system continues with the next step else system displays MSG no contract and Process ends
	
- System gets client date of birth and documents via if GP CallCifRestApi = false then PartyWS.customerPersonGet else Customer Data.GetCustomerDataRequest with externalId = CUID and projections = PARTY_DATA, PARTY_DOCUMENTS as parameters.
	
- If there is no client found, then system displays MSG no contract and Process ends
	
- If system doesn’t receive response during defined time period. System displays  MSG no contract and error message MSG_0159 (e.g. Data are not available.) and Process ends.
	
- System selects all contracts fulfilling  following criteria:
- There is client document, which document code equals to SC.Document ID number and documents type equals to SC.Document type
- If SC.Date of birth is populated, then client date of birth equals to SC.Date of birth
	
- If the validation passes, is continued with GetOpenMistakeTickets else system displays MSG no contract Process ends


Rule3: If SC.Document type, SC.Document ID number and SC.Date of birth are populated then:

	
- System gets all clients CUID via if GP CallCifRestApi = false then PartyWS.customerPersonSearch else Customer Data.SearchCustomerDataRequest with filter=(person.documents.documentType.eq({SC.Document type})).and (person.documents.documentCode.eq({SC.Document ID number})).and(person.birthDate.eq({SC.Date of birth}))) and projections = PARTY_DATA, ROLE_DATA as parameters.
	
- If there is no client found, then system displays MSG no contract and Process ends.
	
- If system doesn’t receive response during defined time period. System displays no contract and error message MSG_0159 (e.g. Data are not available.) and Process ends.
	
- System selects all contract fulfilling following criteria:
- Contract CUID equals to at least one of clients CUID
- Contract status is in SAContractSearchAllowedStatuses (global parameter)
- There is at least one business events fulfilling criteria:
       -- Business event.Type is one of following -  CREATE_APPLICATION, CREATE_CONTRACT, GENERATE_DOCUMENTATION, SIGN
       -- If SC.CurrentUser is not NULL, add Business Event.Originator = SC.CurrentUser, else add Business Event.Salesroom  = SC.CurrentSalesroom
	
- It is continued with GetOpenMistakeTickets.



Rule4: If search attributes are not populated then:

	
- System selects all contracts fulfilling following criteria:
- Contract status is in SAContractSearchAllowedStatuses
- There is Business Event.Type = CREATE_CONTRACT with Business Event.Modification Date <= current date - SAContractSearchActiveLimit (global parameter)
- There is at least one business events fulfilling criteria:
   -- Business Event.Type is one of following -  CREATE_APPLICATION, CREATE_CONTRACT, GENERATE_DOCUMENTATION, SIGN.
   -- If SC.CurrentUser is not NULL, add Business Event.Originator = SC.CurrentUser
   -- If SC.CurrentUser is NULL {ADD TPH-6663} and SAContractSearchCurrentUser (global parameter) =1, add Business Event.Salesroom  = SC.CurrentSalesroom
   -- If SC.CurrentUser is NULL and SAContractSearchCurrentUser (global parameter) = 0,{/ADD} add Business Event.Originator = currently logged user and Business Event.Salesroom  = SC.CurrentSalesroom
	
- It is continued with GetOpenMistakeTickets.



GetOpenMistakeTickets

	
- If SAContractSearchOpenTickets = 0 and form.Include mistakes = 0 then System returns the found Contracts -- Mistake tickets related to contracts are not displayed in the result grid
	
- System gets list of open Tickets based on the found Contracts by calling POST.../tck/rest/TicketsCounts?openStatuses=true {list of Contracts in the RelatedSubjects}. The response result is used for showing count of tickets in the Search for contract result grid, possibly for next search evaluation in OpenMistakeTickets steps -- Mistake tickets related to contracts are displayed in the result grid
	
- If SAContractSearchOpenTickets = 0, system returns Contracts with Tickets count for displaying and Process ends, else it continues with OpenMistakeTickets steps


OpenMistakeTickets --- additional filtering of contracts: only contracts with opened mistake tickets are returned and displayed

	
- Based on MistakeTicketCounts response, the Contracts are filtered as follow:
- remove Contracts with MistakeTicketCount = 0 having Contract.Status in (N (Signed), T (Cancelled)) AND related Business Event of type CREATE_CONTRACT, where Business Event. Modification Date > current date - SAContractSearchActiveLimit
- remove Contracts with MistakeTicketCount = 0 having Contract.Status in (SAContractSearchAllowedStatuses and exclude N (Signed), T (Cancelled))
	
- System returns the filtered Contracts

{/ADD}

## 🔗 Connections (2)

- → Dependency: [[Sales agent search criteria restriction]]
- ← Dependency: [[{MOD}Contract search filter]]

## 📊 Appears In (4 diagrams)

- Custom: Business rules
- Custom: CBL-8891 (CLM-2860) Sales Agents contract search limitation
- Custom: Overview
- Use Case: Contract search
