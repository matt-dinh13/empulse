---
type: Requirement
stereotype: "Algorithm"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-10326 (CLM-3310) Missing SCAN mandates"
domain: "Requirements Model"
element_id: 1878902
diagrams: 9
connections: 4
tags:
  - requirement
  - requirements-model
---

# 📋 {MOD}Generate documents list for contract registration

> **Type**: Requirement · **Stereotype**: «Algorithm»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-10326 (CLM-3310) Missing SCAN mandates

## 📝 Notes

This algorithm decides which documents must be processed in Contract completion and Contract registration BPs and how they are displayed.

Input:
Contract that is being processed (added into a contract package or registered in Contract registration)

Output:
Ordered list of documents and their attributes 
 

	
- System selects all documents for the contract from:
- Contract documents: CONTRACT.CONTRACT_DOCUMENT.DOCUMENT
- Client documents: CONTRACT.DEAL.CLIENT_SNAPSHOT.CLIENT_DOCUMENT.DOCUMENT
- DDM Documents: CONTRACT.DDM.DDM_DOCUMENT.DOCUMENT where If {DEL CLM-3310}CLM Feature Flag{/DEL}{ADD CLM-3310}global database parameter {/ADD} validateDDM = True then DDM.Valid_To => current date
	
- For the given contract, system filters list of documents based on contract status:
A) If contract is in status 'REJECTED' or 'CANCELED', the list consists of documents whose attribute Document_Type->Document_Type_Flag = 'CHECKED'.
B) If contract is in status 'SIGNED', the list consists of documents whose attribute Document_Type->Document_Type_Flag = 'CREDIT_DOC'.
	
- System orders document list according to attribute Document_Type.Sort_order and Document_Type.Name
	
- For each filtered document system applies the rule {DEL CSI-164}Getting document's DMS file UUID {/DEL} {ADD-CSI-164} Getting DMS files of the same document type from previous contracts {/ADD}if:
- Global database parameter SEARCH_FOR_DMS_IN_PREV_CON = True
- Document -> {DEL CSI-164}DMS File.UUID = null{/DEL}{ADD CSI-164}Document DMS File[File Type = FILE] does not exist{/ADD}
- Document -> Document Attribute having Document Attribute Type of PROOF_CHECK and .Value = values defined in the Document Proof Check Type java enumeration
	
- If {DEL CLM-3310}CLM Feature Flag{/DEL}{ADD CLM-3310}global database parameter {/ADD} validateDDM = True then:
For each document with Document_Type_Code = 'DIRECT_DEBIT_MANDATE' system displays buttons Edit DDM document and Upload DDM document.
	
- For every document, system selects all attributes (names and values) from its Document_Type_Attribute, which are:
- set to visible and editable
- OR not empty {ADD TFT-10175}and set to visible{/ADD}
Attributes are order by Document_Type_Attribute.Sort_Order, Document_Type_Attribute.Name.
For Document Attribute having Document Attribute Type of PROOF_CHECK only values defined in the Document Proof Check Type java enumeration are displayed.
If CLM Feature Flag validateRequiredDocumentAttributes = True then for attribute, which is required and does not exist in Document_Attribute, system display highlighted message MSG_DocumentRequiredAttributeNotFilled (e.g. Missing value for mandatory attribute) as a value.
If CLM Feature Flag validateIncomeProof = True then for attribute[.Document_Type_Code = 'INCOME_PROOF'], which does not exist in Document_Attribute, system display highlighted message MSG_DocumentRequiredAttributeNotFilled (e.g. Missing value for mandatory attribute) as a value.
	
- System returns ordered list of documents with their attributes.

## 🔗 Connections (4)

- ← Dependency: [[01.250 Print contract package (UseCase 1759990)]]
- ← Dependency: [[01.200 Add to contract package (UseCase 1759983)]]
- ← Dependency: [[01.275 Show registration tab]]
- → Dependency: [[Getting DMS files of the same document type from previous contracts]]

## 📊 Appears In (9 diagrams)

- Custom: CBL-10326 (CLM-3310) Missing SCAN mandates
- Custom: CBL-4708 (CLM-2911) Scan Based Mandate Support in HOSEL
- Custom: CBL-5553 (CLM-2773) INVOICE document for Key Accounts/Home Appliances
- Custom: CBL-7299 (CLM-2396) RBI Regulation for KYC Docs -To view KYC Docs on every contract
- Custom: CBL-8156 (CSI-164) Integration with Inovatrics - using PageSpecification in GUI (step3a)
- Custom: CBL-9757 (CLM-3028) Check Income proof document
- Custom: Common Business Rules for Contract Management
- Custom: REQ #1 - Implement DDM document editing and uploading from Registration tab
- Use Case: Contract tracking
