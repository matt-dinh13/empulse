---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-10326 (CLM-3310) Missing SCAN mandates"
domain: "Requirements Model"
element_id: 1836938
diagrams: 5
connections: 3
tags:
  - requirement
  - requirements-model
---

# 📋 {MOD}Validate documents before registration

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-10326 (CLM-3310) Missing SCAN mandates

## 📝 Notes

{ADD CLM-2773/}
This function executes following documents validation before registration:

	
- presence of all documents is checked


	
- check that all required document types attributes exist in document attributes
	
- all document critical mistakes tickets (i.e. where Ticket->TicketPriority = CRITICAL) are in state 'Canceled' or 'Closed'


Inputs:

	
- list of documents for registration


Output:

	
- error message


Validations:

	
- Document.Registered_Flag = False then system returns error.
	
- If  document critical mistakes tickets ( where Ticket->TicketPriority = CRITICAL) are not in state 'Canceled' or 'Closed' then system returns error message MSG_DOC_MISTAKES_MUST_BE_CLOSED_CANCELLED.
	
- System checks if a proof checks have been done for Documents to registration by Check document proof check execution rule with parameters: list of documents for registration. If the returned list of failed Documents is not empty, system returns error message MSG_ProofCheckFailedForDocument; (e.g. Some client's documents requires a proof check. Please use Client document tab on Contract detail to do it.).
	
- If CLM Feature Flag validateRequiredDocumentAttributes = True then if there is required attribute, which exists in its Document_Type_Attribute and does not exist in Document Attribute then system then system returns error message MSG_DocumentRequiredAttributesNotFilled (i.e Document required attribute is not filled).
	
- If {DEL CLM-3310}CLM Feature Flag{/DEL}{ADD CLM-3310}global database parameter {/ADD}validateDDM = True and Document[.Document_Type_Code = 'DIRECT_DEBIT_MANDATE'] -> Document_Attribute[.Code = 'PHYS_MANDATE_RECEIVED'].Value is Null and Document[.Document_Type_Code = 'DIRECT_DEBIT_MANDATE'] -> Document_Attribute[.Code = 'SCAN_BASED_MANDATE'].Value is Null then system returns error message (e.g. MSG_DDMDocumentAtributesNotFilled (e.g. DDM document attributes are not filled in).
	
- If Document[.Document_Type_Code = 'INCOME_PROOF'] -> Document_Attribute[.Code = 'INCOME_PROOF_TYPE'].Value is Null then system returns error message (e.g. MSG_IncomeProofDocumentAtributeNotFilled (e.g. Income proof document attribute is not filled in).


{ADD CLM-3310}Steps for 01.270 Register contract manually:
For each document from list of documents for registration system performs validations 2., 3., 4.{/ADD}

Steps for UC 01.273 Register contract common:
For each document from list of documents for registration system performs validations 2., 3., 4., 5., 6.

Steps for the button Register contract:
For each document from list of documents for registration system performs validations 1., 2., 3., 4., 5., 6.

Steps for the checkbox Check:
For each document from list of documents for registration system performs validation 4.

## 🔗 Connections (3)

- → Dependency: [[Check document proof check execution]]
- ← Dependency: [[Check]]
- ← Dependency: [[Register contract (GUIElement 1868345)]]

## 📊 Appears In (5 diagrams)

- Custom: CBL-10326 (CLM-3310) Missing SCAN mandates
- Custom: CBL-4708 (CLM-2911) Scan Based Mandate Support in HOSEL
- Custom: CBL-5553 (CLM-2773) INVOICE document for Key Accounts/Home Appliances
- Custom: CBL-9757 (CLM-3028) Check Income proof document
- Custom: REQ #2 - Implement DDM document attributes validation before registration
