---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/CSI/CBL-25266 (CSI-3437) VN New insurance on card product"
domain: "Requirements Model"
element_id: 1879417
diagrams: 15
connections: 16
tags:
  - requirement
  - requirements-model
---

# 📋 {MOD}Sign contract finalization

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/CSI/CBL-25266 (CSI-3437) VN New insurance on card product

## 📝 Notes

//Common parts of use cases 01.187 and 01.099 (CLM part) separated into this business rule.

Input:

	
- Contract
	
- ContractSignedExternaly (boolean)


Steps:

	
- {DEL CLM-6211}If system parameter ONLINE_CONTRACT_REGISTRATION = 1 (the online process with the registration queue is used for the contract registration) and business rule Definition of contracts for Registration Queue with parameter Contract returns TRUE, system performs:
- setting the contract registration status to Ready to Registration by rules in Set Contract registration status with parameters: Contract, Registration Status = 'RR'
- insert the contract into the registration queue by rules in Tracking changes in Contract Registration Queue with parameters: Assigned_To = NULL; Queue_Status ='RP' (Registration in Progress); Business_Category = Contract -> Financial Parameters -> Product Variant -> Product -> Product Profile -> Business Category.Code{/DEL}
	
- System calls use case 11.030 Sign insurance contract for each insurance contract related to the loan contract (Contract Insurance Service->Insurance Contract).
	
- If (Contract.Contract_type = SAI or (Contract.Contract_type = 'CEL' (closed-end loan)) and (Financial_Parameters.Initial Transaction Type in 'CASH' or  'NDF' or 'POS'), then system calls use case 05.090 Generate outgoing payment. -- outgoing payment for REL is ensured by Cabus AM
	
- System generates outgoing payments for insurance - use case 05.091 Generate outgoing payments - insurance.
	
- If Financial_Parameters.Initial Transaction Type = 'POS' {ADD IS-2642}{country IN} with Contract->Product->installmentScheduleGenerationTrigger = ON_SIGN{/ADD} OR (Contract.Contract_type = 'SAI' AND enableSAIWithInstallments = TRUE AND Contract.Has Installments = True  AND there is no related contract to Contract, it means there is no Contract.Extended Property Value.Value related to the processed Contract having Extended Property Item Code = 'RELATED_LOAN') (SAI related to CLX is accepted after CLX disbursement confirmation)) {ADD CBL-30268 CLM-7562}{country PH} OR (Rule Check if contract is purchased is returning TRUE){/ADD} then system sets loan condition acceptation by Set contract Condition Accepted rule with processed contract as parameter.
	
- System performs {ADD}Update DataProtectionLevel for client data rule with parameter contract
	
- If a Contract Document with a printout generated (Document has DMS_FILE_PRINTOUT_ID) and having Document Type flag = 'IS_PRINT1' (IS printout first version) exists, a reference between the Document and the Installment Schedule of Version = 1 is created (i.e. Installment Version Printout entity with Event = 'CIC' is created).
	
- System creates one document (i.e. Contract->Document) for each Document_Type where Contract->Product->Product_Profile->Product_Profile_to_Document_Type.When_Requied = 'CS' and for or all such created documents system sets Document.When_Created = 'CS'
If at least one document is created, system calls the use case 01.183 Print documents for contract sign with the processed Contract and ContractSignedExternaly flag passed on the input
	
- System saves the information about the used signing method according to the rule Save signing method for documents signed paperlessly.
	
- If global parameter UpdateClientDataMoment = CONTRACT_SIGNATURE, then system calls use case 06.021 Update client data from contract with input parameters:
- Contract number and
- Business event type = 'CREATE_CONTRACT'
- operationType = SIGN
If an exception occurs during updating of client data, this use case ends.
	
- Return back to the calling UC.

## 🔗 Connections (16)

- ← InformationFlow: [[REQ#1 - Use only _paperless_ contracts in the Registration queue (for PH only)]]
- ← Dependency: [[REQ#1 - Use only contract with defined Business category in the Registration queue]]
- ← Dependency: [[{MOD}01.187 Sign contract]]
- → Dependency: [[REQ #2 - Sign contract for standalone insurance]]
- → Dependency: [[11.030 Sign insurance contract (UseCase 1879778)]]
- → Dependency: [[{ADD}Check if contract is purchased]]
- → Dependency: [[{MOD}05.091 Generate outgoing payment - insurance]]
- → Dependency: [[{ADD}Update DataProtectionLevel for client data]]
- → Dependency: [[06.021 Update client data from contract]]
- → Dependency: [[Get salesroom by operation]]
- → Dependency: [[{MOD}05.090 Generate outgoing payment for contract]]
- → Dependency: [[{MOD}01.183 Print documents for contract sign]]
- → Dependency: [[Set contract Condition Accepted]]
- → Dependency: [[{DEL}Tracking changes in Contract Registration Queue]]
- → Dependency: [[Set Contract registration status]]
- → Dependency: [[{MOD}Save signing method for documents signed paperlessly]]

## 📊 Appears In (15 diagrams)

- Custom: CBL-25266 (CSI-3437) VN New insurance on card product
- Custom: CBL-3421 (CLM-1328) Paperless Contracts in Registration Queue
- Custom: CBL-3666 (CLM-1478) Extended Warranty Standalone
- Custom: CBL-5042 (CLM-1780) Registration queue cleaning
- Custom: CBL-5151 (CLM-1871) Add ConditionAcceptedSE/RejectedSE to ContractFullInfo Notification
- Custom: CBL-9350 (CLM-2872) Salary project extension - employee flag update and usage
- Custom: CLM-3817 - New SAI - Contract signing
- Custom: CLM-6205 Condition accepted for related SAI contract
- Custom: CLM-819 (CBL-860) Unification reimbursement from credit cards
- Custom: LOR-9360 Remove temporary switch useSingleOtpForContractSign
- Custom: REQ #1 - Migrate full person update to PIF REST
- Use Case: Client update
- Use Case: Contract signing
- Use Case: Create and Sign Insurance contract
- Use Case: Insurance Contract Management
