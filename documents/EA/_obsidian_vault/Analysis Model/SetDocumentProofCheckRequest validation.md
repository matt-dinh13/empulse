---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Business Rules"
domain: "Analysis Model"
element_id: 1868143
diagrams: 6
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 SetDocumentProofCheckRequest validation

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Business Rules

## 📝 Notes

There is described set of validations for SetDocumentProofCheckRequest data in this rule.

Format of validation: Rule definition; returned error code if validation fails

	
- documentId has to be provided; DOCUMENT_NOT_PROVIDED
	
- Document with provided documentId has to exist; DOCUMENT_NOT_EXISTS
	
- Contract related to the Document has to be in statuses defined by Supported contract statuses for self-care and K (Finished); CONTRACT_NOT_FOUND
	
- Document is Document Type with defined Document Attribute Type of PROOF_CHECK and Document Type Flag = PERSON; INVALID_DOCUMENT_FLAGS
	
- proofCheckType value is defined in the Document Proof Check Type java enumeration; WRONG_PROOFCHECK_TYPE

## 🔗 Connections (1)

- ← Dependency: [[01.792 Set Document ProofCheck service]]

## 📊 Appears In (6 diagrams)

- Custom: Business Rules
- Custom: CBL-5276 (CLM-1857) Create API to set Document Proof Check
- Custom: CBL-8156 (CSI-172) Integration with Inovatrics - using PageSpecification in API (step3b)
- Logical: {ADD}SettingDocumentProofCheck_v3
- Logical: SettingDocumentProofCheck_v1
- Logical: SettingDocumentProofCheck_v2
