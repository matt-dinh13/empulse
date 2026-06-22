---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract securitization/Business rules"
domain: "Analysis Model"
element_id: 1519506
diagrams: 3
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 {MOD}Securitization import notification structure

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract securitization/Business rules

## 📝 Notes

Notification about import of securitized contracts has the following structure:

Head:
Import of securitized contracts
File: ${fileName}                       ...${fileName} =name of the imported file
Imported: ${importDate}         ...${importDate}=current date and time in moment of sending the message
Localization code: MSG_SecuritizationImportHead ("Import of securitized contracts \nFile: ${fileName} \nImported: ${importDate}  \n")

Head validation fails:
If any head validation fails, message is completed with status of import (MSG_SecuritizationImportFailed (e.g. "Import status: Failed") and appropriate text:

	
- XML validation fails: MSG_SecuritizationImportHead_formalValidation (e.g. "Import of securitized contracts \nFile\: ${fileName} \nImported\: ${importDate}  \nFormal XML validation failed.")
	
- soldDate check: MSG_SecuritizationImportSoldDate (e.g. "Sale date has to be in defined period.")
	
- owner check: MSG_WrongOwnerName (e.g. "Wrong owner is provided.")
	
- tranche existence check: MSG_InvalidTrancheExistence (e.g. "An active tranche with the same name exists within the system.")


Contract validation fails:
If the import contains at least one contract for which the validations failed, then message to user contains information about name and location of file with unprocessed records (e.g. XML file). Message has to support hyperlinks which will allow user to directly download file with unprocessed records.

Each unsuccessfully processed contract is stored into the file (mentioned above) with its Contract.code and appropriate message:

	
- contract check: CONTRACT_NOT_FOUND("Contract with code: ${contract_code} not found.")


	
- unique contract code within the file: MSG_ContractCodeIsNotUnique ("Contract code ${contract_code} is more then once within the file.")
	
- current owner must be HC: MSG_SecuritizationImportWrongOwner (e.g. "Owner of contract ${contract_code} is not HC.")


	
- date of contract signature is lower then tranche sales date: MSG_SecuritizationWrongSignDate (e.g. “Date of signature for the contract $(contractCode) is not lower then tranche sales date.”)


	
- contract is not securitized: MSG_SecuritizationImportContractAlreadySecuritized (e.g. "Contract ${contractCode} is already securitized.")
	
- contract is in wrong state: MSG_SecuritizationContractWrongState (e.g. "Contract ${contractCode} cannot be securitized because it is in status {contractStatus}.")
	
- currency amounts in the file does not match the contract account currency: MSG_SecurAmountCurencyNotMatch (e.g. "The currency in file doesn't match the account currency for contract code: ${ContractCode}."
	
- {ADD CLM-2895}Home Credit is not the contract owner: MSG_SecuritizationContractNotOwnedByHC e.g. "Contract ${contractCode} cannot be securitized because Home Credit is not the owner.{/ADD}


Beside that, the message is completed with status of import (MSG_SecuritizationImportFailed (e.g. "Import status: Failed"). 

All contract passed the validations:
If there is no contract failure, message is completed with status of import (MSG_SecuritizationImportSuccessful (e.g. "Import status: Successful")

Count of imported items:
At the end of the message, number of imported contracts without error is added (MSG_SecuritizationImportNum (e.g. "${number} contracts was successfully imported.")).

An unexpected error (whole import failed):
If whole the processing failed (all steps has been rolled back), the message MSG_SecuritizationImportFatalError (e.g. "
An unexpected error occurred during processing the file. No records in the database has been created.")

## 🔗 Connections (1)

- ← Dependency: [[01.860 Process contract securitization file]]

## 📊 Appears In (3 diagrams)

- Custom: Business rules
- Custom: CBL-9299 (CLM-2895) Entrustment Lending support in CLM
- Use Case: Contract securitization
