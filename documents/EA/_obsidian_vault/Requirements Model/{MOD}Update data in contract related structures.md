---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-3666 (CLM-1478) Extended Warranty Standalone"
domain: "Requirements Model"
element_id: 1879429
diagrams: 11
connections: 8
tags:
  - requirement
  - requirements-model
---

# 📋 {MOD}Update data in contract related structures

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-3666 (CLM-1478) Extended Warranty Standalone

## 📝 Notes

//Common parts of use cases 01.180 and 01.099 (CLM part) separated into this business rule.

Input:

	
- Contract


Steps:

	
- System copies the chosen offer (Offer Financial Parameters with flag Chosen set to 'true'), its adjusted services (Offer Service) to financial parameters (FINANCIAL_PARAMETERS), adjusted contract services (CONTRACT_SERVICE, status set to "New") (see Copy chosen offer financial parameters to contract) to the contract. Contract documents which are linked to service adjusted in the chosen offer (Contract Document.Offer Service is set) are linked to the corresponding service adjusted on the contract. Offer Installment and Offer Installment Parts are left as it is and are not copied to Contract to create Installment Schedule yet.
	
- If Contract.Contract Type = 'CEL' OR (Contract.Contract Type = 'SAI' and Contract -> Product -> Product Flag.Name = 'SAI_WITH_INSTALLMENT_SCHEDULE') then system sets Contract.Has Installment = True else system sets Contract.Has Installment = False.
	
- System copies joint lender (Party entity) to Contract Party Role structures
	
- If CLM Feature Flag useEntrustmentLending = True then system copies System copies lender (Party entity) to Contract Party Role structures.
	
- If the processed Contract is used for consolidation (i.e. Contract.Consolidating = TRUE) then system copies TempAppl Refinanced Contract to corresponding entity Refinanced Contract on the contract.


	
- System checks value of Contract->Product->installmentScheduleGenerationTrigger
I) if "ON_SIGN" or no value or {DEL IS-2642}{IN only}initial transaction type = POS {/DEL} or (initial transaction type = NDF without related cash loan contract -> ExtendedPropertyValue.ExtPropertyItemCode = RELATED_LOAN, ExtendedPropertyValue.Value = SAI contract ExtendedPropertyValue.ParentID = related loan ID -> Contract.contractType = CASH) and
a) Contract.Contract_type = 'CEL' or 'SAI' then system copies offer installment data based on getOfferInstallmentExternally parameter:
   --- when set to FALSE, from installment schedule module
   --- when set to TRUE, from Offer Financial Parameter -> Offer Installment and Offer Installment Part 
to Contract -> Installment and Installment Part and generates a system event RegeneratedInstallmentScheduleSE with the created Installment Schedule of the contract as a parameter
  --- {ADD IS-2617} {PH only} System call GeneratedInstallmentScheduleSE with processed contract code.{/ADD}
-- system calculates date of expected end of the loan by Calculation of ExpectedEndDate and set it into Financial Parameters.Expected End Date and if its day of month is different than day of month of due date of the second last installment then system modifies day of month of Expected End Date accordingly (this is due to a possible last due date shift during IS generation)
b) System calculates and stores parameters for all services assigned to offer according to the Calculation of Loan Service parameters rule with parameters Event Type = 'CS' and Contract = current contract
c) If Contract.Type = 'CEL' OR (CLM Feature Flag enableSAIWithInstallments = True AND  Contract.Has Installment = True) then
-- If global parameter AsyncDCCalculation = true then system inserts a record in BSL_DEBT_CATALOGUE_REQ (contract id, latest debt catalog id, initializing UC number and source system 'BSL' has to be filled) otherwise system calls 01.474 Calculate CEL debt info use case to calculate and update the contract debt catalogue
d) {ADD IS-1346If Contract.Type = 'CEL' call Create Service Timeline record. {/ADD IS-1346} {DEL CLM-3817 Fixed based on code - already called above} Contract.Contract_type = 'REL'  system calculates and stores parameters for all services assigned to offer according to the
Calculation of Loan Service parameters rule with parameters Event Type = 'CS' and Contract = current contract{/DEL}
II) If ("ON_DISBURSEMENT" and initial transaction type = CASH {ADD  IS-2642}{IN only} or POS {/ADD}  or NDF with related cash loan ExtendedPropertyValue.ExtPropertyItemCode = RELATED_LOAN, ExtendedPropertyValue.Value = SAI contract ExtendedPropertyValue.ParentID = related loan ID -> Contract.contractType = CASH)) use case continues with next step
Note: For "ON_DISBURSEMENT",  Installment Schedule is generated later with 01.191 Process installment schedule generation after disbursement use case.

## 🔗 Connections (6)

- ← Dependency: [[{MOD}01.187 Sign contract]]
- → Dependency: [[01.474 Calculate CEL debt info (UseCase 1876071)]]
- → Dependency: [[Calculation of ExpectedEndDate]]
- → Dependency: [[REQ #2 - Sign contract for standalone insurance]]
- → Dependency: [[{MOD}Calculation of Loan Service parameters]]
- → Dependency: [[Copy chosen offer financial parameters to contract]]

## 📊 Appears In (11 diagrams)

- Custom: CBL-3666 (CLM-1478) Extended Warranty Standalone
- Custom: CBL-6340 (CLM-3148) Support two subvention rates in Financial Parameters and skip commodity validation with flag
- Custom: CBL-9299 (CLM-2895) Entrustment Lending support in CLM
- Custom: CBL-9811 (CLM-3001)[COVID19] Loan consolidation for ID
- Custom: CLM-3817 - New SAI - Contract signing
- Custom: Debt Catalog (DC) to trigger contract finishing evaluation (IS-639)
- Custom: LOR-9009 Prepare IS data for creation of Installment and Installment Part in sign UC
- Custom: PAYM-1903 (CBL-4667) IN JL - Generate IS on basis of JL account opening
- Use Case: Contract signing
- Use Case: Determine installment schedule processing
- Use Case: Determine installment schedule processing
