---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract search/Business rules"
domain: "Analysis Model"
element_id: 1822346
diagrams: 11
connections: 8
tags:
  - requirement
  - analysis-model
---

# 📋 {MOD}Contract search filter

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract search/Business rules

## 📝 Notes

Search filters:
User can use one of the predefined search filters:
User with access righ UC01_300_Hidden is able to see all hidden contacts.

1. Drafts
Result could be filtered by optional search criteria:
- CODE = specified temporary application code{/ADD}

	
- search TEMPORARY_APPLICATION for which all conditions are fulfilled:
- Temporary_Application.Saved = true 
- Temporary_Application.Contract_ID = NULL
- doesn't have Scoring_Result or has Scoring result = APPROVED (TA->Scoring [.Evaluation_request_type = BASIC]->Scoring_result=APP)
	
- if user has access right UC01_300_RemoteContracts, system also looks for applications:
- were created remotely on different salesroom using search criteria and
- has Scoring result = APPROVED (TA->Scoring [.Evaluation_request_type = BASIC]->Scoring_result=APP)


	
- Default order: CREATION_DATE desc


2. Contracts for 2BoD filling
The contract status is 'In pre-process' and sub-status is 'Draft'.

	
- For user with access right: 
UC01_300_FO: Application_Filling_Queue.Filling_Group=FO‘ is in status (‚OPEN‘ or ‚ASSIGNED‘) and contract has been created in salesroom in which is current user logged on;
UC01_300_BO: Application_Filling_Queue.Filling_Group=BO‘ is in status ‚OPEN‘ or (in status ‚ASSIGNED‘ and is assigned to current user);
UC01_300_BO_ADMIN: Application_Filling_Queue.Filling_Group= ‚BO‘ is in status ‚OPEN‘ or ‚ASSIGNED‘;


	
- Results will be filtered by Preferred language attribute defined by user in sub-panel. If attribute Preferred language is:
- empty – no filtering
- has value – search results will contain only contract with TemporaryApplication.TempAppl_Preferred_Language[Preference_Order=0].Language= field value


	
- The result of search will be ordered by 'Time to contact' ascendantly (meaning the lowest date first, even if it is already in the past). Results can then be ordered by any column except Action with functional buttons.


3. Contracts in process (in or after scoring)

	
- Search according to CONTRACT.STATUS and SUBSTATUS:
- IN_PREPROCESS (sub-statuses CIF_WAITING, CIF_IDENTIFIED, CIF_MANUAL, LAP_WAITING, OFFERS_GENERATED, or CLIENT DRAFT or APPROVED WITH CROSS-SEL LIMITS),
- IN_PROCESS (sub-statuses CIF_WAITING, CIF_IDENTIFIED, CIF_MANUAL, LAP_WAITING, LAP_WAITING_AFTER_OFFERS, OFFERS_GENERATED, DRAFT),
- REJECTED,
- APPROVED


	
- With following conditions (particular conditions are joined by AND):
- The contract in not in 2BoD queue (algorithm Check if contract is currently in 2BoD queue) - applicable only for contracts in status 'IN_PREPROCESS' and sub-status 'DRAFT'
- (CONTRACT.CLIENT_INFORMED = 0) or (CONTRACT.CLIENT_INFORMED = 1 and CONTACT.STATUS = APPROVED)
- Contract->BusinessEvent[where type = CREATE_CONTRACT].TimeOfModification > (today - global parameter InProgressContractDateCreated)  - applicable only for contracts in statuses 'IN_PROCESS' or 'APPROVED'
- Contract->BusinessEvent[where type = SUBMIT_PRE].TimeOfModification > (today - global parameter InProgressContractDateCreated) - applicable only for contracts in status 'IN_PREPROCESS'
- Contract->BusinessEvent[where type in (CREATE_CONTRACT, SUBMIT_PRE)].TimeOfModification > (today - global parameter InProgressContractDateCreated) - applicable only for contracts in status 'REJECTED' (note that for contracts in status 'REJECTED' only one record of 'SUBMIT_PRE'/'CREATE_CONTRACT' exists).
Default order:
- CONTACT_SUBSTATUS_TRANSITIONS.CHANGED, desc
- CONTRACT.SCORING.EVALUATION_DURATION, „LONG“ as first


	
- Automatic reload of sub-panel: global parameter AutomaticRefresh


4. Items for registration
This search returns Contracts and Contract Supplements according to following conditions

	
- FOR Contract: CONTRACT.STATUS = SIGNED AND CONTRACT.REGISTRATION_STATUS != R (Registered) AND one of following is true:
- CONTRACT has not CONTRACT2PACKAGE record (contract is not in package - was never in package)
- CONTRACT in all CONTRACT2PACKAGE records has value ARCHIVED=1 (contract is not in package - was removed from all packages)
- CONTRACT has CONTRACT2PACKAGE record WHERE ARCHIVED=0 AND CONTRACTPACKAGE.LOCATION=POS (contract is in package which was not sent to BO (or received at BO))
- exists Ticket T where: T.Contract = Contract.Code AND T.TYPE='ContractMistake' AND T.AccessRoleCode->FrontOfficeFlag=True (contract contains mistake ticket which is assigned to front office)
For Supplement: ContractSupplement.Status= SIGNED AND ContractSupplement.RegistrationStatus!=R and at least one of following is true: 
- ContractSupplement has not CONTRACT2PACKAGE record (Contract Supplement is not in package - was never in package)
- ContractSupplement in all CONTRACT2PACKAGE records has value ARCHIVED=1 (supplement is not in package - was removed from all packages)
- ContractSupplement has CONTRACT2PACKAGE record WHERE ARCHIVED=0 AND CONTRACTPACKAGE.LOCATION=POS (supplement is in package which was not sent to BO (or received at BO))
- exists Ticket T where: T.Supplement = ContractSupplement.Code AND T.TYPE='ContractMistake' AND T.AccessRoleCode->FrontOfficeFlag=True (supplement contains mistake ticket which is assigned to front office)
	
- Default order: Contract->BusinessEvent[where type = CREATE_CONTRACT].TimeOfModification union ContractSupplement.CreatedDate asc


5. Reimbursed Contracts

	
- CONTRACT.STATUS = ACTIVE, SIGNED
	
- All CONTRACT.OUTGOING_PAYMENTs with OUTGOING_PAYMENT.PAYMENT_TYPE = (OTC, CL, PTR) and OUTGOING_PAYMENT.STATUS = PAID
	
- Contract->BusinessEvent[where type = CREATE_CONTRACT].TimeOfModification > (today - global parameter ReimbursedContractDateCreated)


	
- Default order: Contract->BusinessEvent[where type = CREATE_CONTRACT].TimeOfModification desc


6. Non reimbursed Contracts

	
- If CONTRACT.SALESROOM.MOMENT_OF_PAYMENT != ON_CONTRACT_COMPLETION filter will display Contracts with STATUS = SIGNED, ACTIVE or If CONTRACT.SALESROOM.MOMENT_OF_PAYMENT = ON_CONTRACT_COMPLETION, filter will display Contracts with STATUS = ACTIVE


	
- At least one CONTRACT.OUTGOING_PAYMENTs with OUTGOING_PAYMENT.PAYMENT_TYPE = (CL, PTR) and CONTRACT.OUTGOING_PAYMENT.STATUS = BLOCKED or UNPAID


	
- Default order: Contract->BusinessEvent[where type = CREATE_CONTRACT].TimeOfModification desc


7. Cancelled Contracts

	
- CONTRACT.STATUS = CANCELLED


	
- Default order: CONTRACT.CODE desc


8. Custom search (Other)
This filter is preselected as default option. Custom search is standard search on entity of Contract composed by search attributes defined by user. Letter case (size of the letters) is ignored within the Custom search (other) filter. Some restrictions can be applied for this type of search - see related GUI (Search for contract)

	
- User may enter barcode of contract document to 'Contract number' field. System each time analyzes Contract number string if it is DDM, Supplement or Contract document barcode according to Analyze barcode algorithm. If algorithm return contract number, value is updated and search according to contract number is performed.


	
- User may enter customer's bank account number to "Account number" field. System searches for contract where Contract -> Contract Bank Account -> Bank Account.Account Number = input value


	
- If user has access right UC01_300_RemoteContracts, system also looks for contracts given by  Access control to remote application


Extended Custom Search result grid is displayed for KZ country instead of the standard Custom Search result grid

9. Custom SNM search
Search on entity of Contract composed by search attributes defined by user - see related GUI (Custom SNM search).
Result is filtered by mandatory search criteria:
Salesroom
If specific salesroom is selected from Salesroom

	
- thenCONTRACT.SALESROOM = selected salesroom
	
- else CONTRACT.SALESROOM IN {all salesrooms displayed in list}

Seller
If specific salesman is selected from Seller

	
- then CONTRACT.CREATED_BY = selected sales agent
	
- else CONTRACT.CREATED_BY IN {all sales agents displayed in list}


When searching with no selected item from Seller, search will return all contracts created on selected salesrooms regardless on sales agent.

Result could be filtered by optional search criteria:
- CONTRACT.CODE = specified contract code
- CONTRACT.CREATED_DATE >= specified create from date
- CONTRACT.CREATED_DATE <= specified create to date

10. Custom BO search
Search on entity of Contract composed by search attributes defined by user - see related GUI (Custom BO Search).
Result is filtered by mandatory search criteria:
Salesroom
If specific salesroom is selected from Salesroom

	
- then CONTRACT.SALESROOM = selected salesroom

Seller
If specific salesman is selected from Seller

	
- then CONTRACT.CREATED_BY = selected sales agent


When searching with no selected item from Seller, search will return all contracts created on selected salesrooms regardless on sales agent.
When searching with no selected item from Salesroom, search will return all contracts created by selected sales agent regardless on salesroom.

Extended Custom Search (result grid)  is used for displaying search results. 

11. Contracts for disbursement channel verification
This search returns Contracts NOT in Status (Cancelled) having valid Payment Channel where Type = Disbursement and Last Change Request Status = NEW and current date between Valid Form to Valid To.
Specific access right UC01_300_DisbursementChannelChange is needed to access the filter

12. Remotely created not disbursed contracts
This search returns Contracts created remotely and signed on Salesroom where User is currently logged in and disbursement for the contract has not been generated yet: 
Contract.Created Remotely = "True" and Contract -> Business_Event[.Type="SIGN"].Salesroom= Salesroom -> Salesroom Agent -> User.Login and all Contract -> Outgoing Payment have Status = 'U (Unpaid)' or 'W (Waiting)' or 'G (Order generating)'

13. Telesales search
This search returns Contracts created by logged user (having UC01_300_Telesales access right) allowing him to search for the contracts using Contract number or Document Type and Document ID number: 
- after "Telesales Search" radio button is selected then automatically check "Show contracts created by me" checkbox (to display only contracts created by logged user) and make it inactive and display Telesales search sub-panel to allow the user to search for contracts according to Contract number or Document type and Document ID number. Display results in Custom Search grid.

14. Remote contracts for 2BoD filling
Search for remote contract (Contract.Created_Remotely = TRUE) using Contract number and Date of birth, that was created in any salesroom and is in status In Pre-Process.

15. Remote contracts for signature
Search for remote contract (Contract.Created_Remotely = TRUE) in status Approved. Display results in Contracts in process grid.

16. Sales agent search
{ADD CLM-2860} -- moved to a separate rule
Specific filter for Sales agent roles of Contract search filter - Sales agent search rule is applied{/ADD}

{ADD CLM-3352}17. BO Limited Search
System returns contracts based on calling the rule {ADD}Contract search filter - dynamic  with parameters:

	
- user criteria = response of calling the rule BO Limited Search criteria restriction
	
- system criteria = response of calling the rule Get system contract search criteria based on configuration with parameter filterCode = BO Limited Search/ADD}


{ADD CLM-3352}18. CRM Search
System returns contracts based on calling the rule {ADD}Contract search filter - Dynamic  with parameters:

	
- user criteria = response of calling the rule {ADD}CRM Search criteria restriction
	
- system criteria = response of calling the rule Get system contract search criteria based on configuration with parameter filterCode = CRM Search{/ADD}


19. Search contract by code
Allows users with corresponding access right (01.300 Search contract by code) to search across all applications/contracts by their code. If the entity is found, user is automatically redirected to application/contract detail. Hidden application/contract is displayed only with access right for hidden entities

## 🔗 Connections (8)

- → Dependency: [[{ADD}CRM Search criteria restriction]]
- → Dependency: [[{ADD}BO Limited Search criteria restriction]]
- → Dependency: [[REQ#1 - New predefined contract search]]
- → Dependency: [[{ADD}Contract search filter - Sales agent search rule]]
- → Dependency: [[{ADD}Get system contract search criteria based on configuration]]
- → Dependency: [[{ADD}Contract search filter - Dynamic]]
- ← Dependency: [[{MOD}01.300 Search for contract]]
- ← Realisation: [[Drafts (Object 1822453)]]

## 📊 Appears In (11 diagrams)

- Custom: Business rules
- Custom: CBL-7036 (CLM-2233) Restrict Contract search function for SA
- Custom: CBL-8891 (CLM-2860) Sales Agents contract search limitation
- Custom: CLM Overview
- Custom: CLM-103 (CBL-54) Disbursement of cash loans
- Custom: LOR-9601 Improvement of Search for Contract Number for Customer Service Operators 
- Custom: LOR-9719 New contract search - with contract code only
- Custom: Overview
- Custom: REQ #2 - Implement BO Limited Search
- Custom: REQ #3 - Implement CRM Search
- Use Case: Contract search
