---
type: Requirement
stereotype: "Algorithm"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract registration/UseCase Model"
domain: "Analysis Model"
element_id: 1836939
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Show documents list for contract registration

> **Type**: Requirement · **Stereotype**: «Algorithm»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract registration/UseCase Model

## 📝 Notes

This algorithm defines how registration documents are displayed.

Input:
Registration object obtained from REM module.

Output:
Ordered list of documents and their attributes 
 

	
- System orders document list according to attribute Document_Type.Sort_order and Document_Type.Name
	
- If {ADD CLM-3310}global database parameter {/ADD} validateDDM = True then:
For each document with Document_Type_Code = 'DIRECT_DEBIT_MANDATE' system displays buttons Edit DDM document and Upload DDM document.
	
- For every document, system takes all attributes (names and values) from its Registration object, which are:
- set to visible and editable OR not empty and set to visible
Attributes are order by Document_Type_Attribute.Sort_Order, Document_Type_Attribute.Name.
For Document Attribute having Document Attribute Type of PROOF_CHECK only values defined in the Document Proof Check Type java enumeration are displayed.
If CLM Feature Flag validateRequiredDocumentAttributes = True then for attribute, which is required and does not exist in Document_Attribute, system display highlighted message MSG_DocumentRequiredAttributeNotFilled (e.g. Missing value for mandatory attribute) as a value.
If CLM Feature Flag validateIncomeProof = True then for attribute[.Document_Type_Code = 'INCOME_PROOF'], which does not exist in Document_Attribute, system display highlighted message MSG_DocumentRequiredAttributeNotFilled (e.g. Missing value for mandatory attribute) as a value.
	
- System returns ordered list of documents with their attributes.

## 🔗 Connections (1)

- ← Dependency: [[01.275 Show registration tab]]

## 📊 Appears In (1 diagrams)

- Use Case: Document checking within contract registration
