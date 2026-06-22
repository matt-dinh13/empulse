---
type: Requirement
stereotype: "Business Rule"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Business Rules/VN"
domain: "Analysis Model"
element_id: 1860590
diagrams: 2
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 {MOD}Mapping CIF data to application form-VN

> **Type**: Requirement · **Stereotype**: «Business Rule»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Business Rules/VN

## 📝 Notes

Documents:
System calls customerPersonGet and finds document with documentType=specific document type. When such document is not found then nothing is preffiled. System prefills document attributes from the response.

Following document types and attributes are considered:

ID_CARD

	
- DOC_ID - document.documentCode


FAMILY_BOOK

	
- DOC_ID -document.documentCode


DRIVERS_LICENCE

	
- ISS_DATE - document.issueDate
	
- DOC_ID - document.documentCode


	
- ISS_BY -document.issuer


Contacts:
System groups contacts with the same contactType, sorts by modified date DESC and prefills each type of contact  from the newest to the oldest.

## 🔗 Connections (1)

- → Generalization: [[Mapping CIF data to application form]]

## 📊 Appears In (2 diagrams)

- Custom: AF definition - VN
- Custom: Business rules VN
