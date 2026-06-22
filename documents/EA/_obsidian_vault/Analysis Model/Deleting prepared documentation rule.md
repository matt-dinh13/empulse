---
type: Requirement
stereotype: "Algorithm"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Contract signing/UseCase Model"
domain: "Analysis Model"
element_id: 1879413
diagrams: 4
connections: 8
tags:
  - requirement
  - analysis-model
---

# 📋 Deleting prepared documentation rule

> **Type**: Requirement · **Stereotype**: «Algorithm»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Contract signing/UseCase Model

## 📝 Notes

The rule describes removing existing materials which are not valid, e.g. (are not valid to current date; an error occurs during printing; insurance contract draft was canceled etc.).
Steps:
System removes the prepared materials as follow:

	
- System finds all documents, which are part of the contract documentation for the processed application, according to the rule Get contract documentation documents (with respective ApplicationCode on the input) and deletes their printouts as follows:
   - In case the printout has been already uploaded to Cabinet (i.e. Document->Document_DMS_File[.File_Type='PRINTOUT']->DMS_File[.External_ID is not null] exists), then system deletes such printout from Cabinet by calling the 01.006 Delete file from document archive use case for the respective DMS_File. 
   - Otherwise (i.e. in case the printout upload has not been processed yet) system deletes the relevant upload request from the queue.
	
- System deletes all previously-automatically-generated-CIC documents, i.e. contract’s documents linked to:
- Contract (Contract_Document)
- Client Snapshot (Client_Document)
- DDM (DDM_Document)
where Document.When_Created = 'CIC'. 
If for deleted document exists DMS_File where externalID is not NULL (i.e. document has uploaded file to Cabinet), the system invokes the use case 01.006 Delete file from document archive for the DMS_File. 
Note: Printouts of deleted documents has been deleted in previous step.
	
- System deletes prepared offer installment schedule (OFFER_INSTALLMENT, OFFER_INSTALLMENT_PART).
	
- System deletes the prepared agreement documentation including all its related data sources (i.e. Contract->Agreement and all Contract->Agreement->Agreement_Data_source).
	
- System deletes insurance contracts (calls UC 11.090 Delete insurance contract draft) generated for the insurance services adjusted in the chosen offer (Offer Insurance Service.Insurance Contract Code) and unsets insurance contract code in the corresponding insurance services.
	
- System sets contract to sub-status 'Not prepared for sign' (CONTRACT.SUBSTATUS = 'NOT_PREPARED_FOR_SIGN').

## 🔗 Connections (8)

- ← Dependency: [[01.180 Sign contract manually (UseCase 1878503)]]
- ← Dependency: [[01.182 Prepare documentation manually]]
- ← Dependency: [[01.385 Assign card to application externally (UseCase 1879300)]]
- ← Dependency: [[{MOD}01.099 Sign contract externally]]
- ← Dependency: [[01.096 Prepare documentation externally (UseCase 1879294)]]
- → Dependency: [[Get contract documentation documents]]
- → Dependency: [[11.090 Delete insurance contract draft (UseCase 1879798)]]
- → Dependency: [[01.006 Delete file from document archive (UseCase 1851468)]]

## 📊 Appears In (4 diagrams)

- Use Case: Contract signing
- Use Case: Create and Sign Insurance contract
- Use Case: Insurance Contract Management
- Use Case: Prepare documentation to sign
