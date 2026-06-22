---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Document Management/Business Rules"
domain: "Analysis Model"
element_id: 1731359
diagrams: 6
connections: 10
tags:
  - requirement
  - analysis-model
---

# 📋 Add/Edit document validations

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Document Management/Business Rules

## 📝 Notes

All the following conditions must be met in order to pass this validation:

	
- for all existing documents of contract is obligation of attributes governed by Document_Type and by business rules - initial state of document attribute and update state of document attribute, which depends on the configuration of every country.
If Contract.Created remotely=TRUE, then used business rule is always update state of document attribute.


	
- This is done only for personal documents: Check that no other Document of selected Document_Type with Document_Type_Attribute.Value equals to value entered in form exists for related Contract. This validation skips DocumentTypes with no attributes assigned.
MSG_0071
	
- This is done only for non-personal documents: Check that no other Document of selected Document_Type with Document_Type_Attribute.Value equals to value entered in form exists for related Contract. This validation is applicable also for Document_Types without attributes, i.e. no Document_Type with no defined attributes can be added when it is already present on the contract.
MSG_0071


	
- If Document_Type of current Document has defined Document_Attribute_Type with Code = 'ISS_DATE' Document_Attribute.Value based on this Document_Attribute_Type cannot be set in the future.
MSG_0417
	
- If Document_Type of current Document has defined Document_Attribute_Type with Code = 'VALID_FROM' Document_Attribute.Value based on this Document_Attribute_Type cannot be set in the future.
MSG_0418
	
- If Document_Type of current Document has defined Document_Attribute_Type with Code = 'VALID_TO' DocumentAttribute.Value based on this Document_Attribute_Type cannot be set in the past.
MSG_0419
	
- If DocumentType of current Document has defined Document_Attribute_Type with Code = 'VALID_FROM' AND 'VALID_TO', Document_Attribute.Value based on this Document_Attribute_Type have to be ValidFrom < ValidTo.
MSG_0420


If the attribute is not in valid date format, then MSG_INVALID_DATE_FORMAT (Invalid date format - region specific format is ${format}.).

## 🔗 Connections (10)

- ← Dependency: [[CreateDocumentRequest validations]]
- ← Dependency: [[{DEL}Update document instance]]
- ← Dependency: [[{DEL}01.176 Create document]]
- ← Dependency: [[01.080 Fill in application (UseCase 1821367)]]
- ← Dependency: [[{MOD}01.110 Edit contract document]]
- ← Dependency: [[{MOD}01.113 Edit client document]]
- ← Dependency: [[01.112 Edit DDM document (UseCase 1880248)]]
- ← Dependency: [[01.107 Add contract document common]]
- ← Dependency: [[01.106 Add client document common]]
- ← Dependency: [[01.108 Add DDM document common]]

## 📊 Appears In (6 diagrams)

- Custom: Business Rules
- Use Case: Edit client documents
- Use Case: Edit contract documents
- Use Case: Edit DDM documents
- Use Case: Fill in application
- Use Case: Use Case
