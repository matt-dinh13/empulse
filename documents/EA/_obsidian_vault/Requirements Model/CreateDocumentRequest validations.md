---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-5043 (CLM-1778) A new CreateDocument method in ContractDocumentWS"
domain: "Requirements Model"
element_id: 1731361
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 CreateDocumentRequest validations

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-5043 (CLM-1778) A new CreateDocument method in ContractDocumentWS

## 📝 Notes

There is described set of validations for CreateDocumentRequest data in this rule.

Format of validation: Rule definition; returned CreateDocumentResultCode if validation fails

	
- contractCode has to be provided and has to exists in the Contract entity; CONTRACT_NOT_FOUND
	
- Contract has to be in one of (Signed, Active, Paid-off) status, CONTRACT_STATUS_NOT_ALLOWED
	
- documentType has to exists in the Document Type entity; DOCUMENT_TYPE_NOT_FOUND
	
- {ADD CLM-2546}documentAttributes of the Document Attribute Type of PROOF_CHECK and SIGN_METHOD are excluded with creation and validation (it is not taken into account){/ADD}
	
- required documentAttributes have to exist and checked by Add/Edit document validations; INVALID_DOCUMENT_DATA

## 🔗 Connections (1)

- → Dependency: [[Add_Edit document validations]]

## 📊 Appears In (1 diagrams)

- Custom: CBL-5043 (CLM-1778) A new CreateDocument method in ContractDocumentWS
