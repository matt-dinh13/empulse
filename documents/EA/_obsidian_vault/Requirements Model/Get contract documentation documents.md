---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)/LOR-9360 Remove temporary switch useSingleOtpForContractSign"
domain: "Requirements Model"
element_id: 1879420
diagrams: 4
connections: 7
tags:
  - requirement
  - requirements-model
---

# 📋 Get contract documentation documents

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)/LOR-9360 Remove temporary switch useSingleOtpForContractSign

## 📝 Notes

This object describes the steps, how system gets all relevant documents, which are part of the contract documentation for some selected application.

Input:

	
- ApplicationCode - unique identifier of the application


Output:

	
- Document [0..n] - object of the document, which is part of the contract documentation for the respective application
	
- ErrorCode (optional) - indication of particular error, when some technical issues occur during the performed steps


Steps:

	
- System takes the ApplicationCode from the input and finds all following documents, which are related to the corresponding application (Contract[.Code=ApplicationCode]):

   - Contract documents (Contract->Contract_Document->Document)
   - Client documents (Contract->Deal->Client_Snapshot->Client_Document->Document)
   - DDM documents not related to DDM in Canceled or Finished status (Contract->DDM[.Status not in ('CNC', 'FIN')]->DDM_Document->Document)

which are printable in the CIC phase - i.e. where:
   --Contract->Offer_Financial_Parameters[.Chosen=TRUE]->Product_Variant->Product->Product_Profile->Product_Profile_2_Documentation_Configuration->Documentation_Configuration->Product_Profile_Document_Rule[.Document_Type=DocumentType]->Profile_Document_Rule_Print_Moment->Check_Moment_Type.Code = 'CIC'
      OR
   --Contract->Offer_Financial_Parameters[.Chosen=TRUE]->Offer_Service->Service->Service_To_Document_Type[Document_Type.Code=DocumentType].When_Printable = 'CIC' (for contract documents related to some service adjusted on the application).
	
- System takes each relevant document found in the previous step and returns it as Document to the calling object. Algorithm ends.

## 🔗 Connections (7)

- ← Dependency: [[01.335 Get agreement documentation externally (UseCase 1819522)]]
- ← Dependency: [[{MOD}01.186 Prepare documentation]]
- ← Dependency: [[{MOD}01.187 Sign contract]]
- ← Dependency: [[01.148 Validate verification code for client's documentation]]
- ← Dependency: [[{MOD}01.099 Sign contract externally]]
- ← Dependency: [[{MOD}Save signing method for documents signed paperlessly]]
- ← Dependency: [[Deleting prepared documentation rule]]

## 📊 Appears In (4 diagrams)

- Custom: LOR-9360 Remove temporary switch useSingleOtpForContractSign
- Custom: LOR-9420 - Adjust storing of document signing method
- Use Case: Contract signing
- Use Case: Prepare documentation to sign
