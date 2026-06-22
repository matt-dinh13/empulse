---
type: Requirement
stereotype: "Business rule"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Business Rules/ID"
domain: "Analysis Model"
element_id: 1738961
diagrams: 7
connections: 5
tags:
  - requirement
  - analysis-model
---

# 📋 Mapping CIF data to application form

> **Type**: Requirement · **Stereotype**: «Business rule»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Business Rules/ID

## 📝 Notes

This rule describes how client data from CIF are mapped to fields in application form. Mapping of CIF attributes to AF fields is defined in attached table.
Note: Mapping is outdates - is related to SOAP API. It should probably by discarded in general as it is mostly technical implementation.

Common rules:

	
- A new group of application form fields is generated for each record of related person


	
- A new group of application form fields is generated for each record of client's email, phone number and social network
	
- If some relation types defined in parameter filterRelatedPersonsPrefillByRelationType then only this relation types can be prefilled on application form. Related persons are sort by relation type code when prefilling from CIF


	
- For address fields, either key (to a code list) or value is used,i.e. stringCodeOrValue.Code or Value
	
- When a key (to a code list) from CIF cannot be found in BSL, the related field is not prefilled

## 🔗 Connections (5)

- ← Generalization: [[Mapping CIF data to application form-KZ]]
- ← Generalization: [[Mapping CIF data to application form - IN]]
- ← Generalization: [[Mapping CIF data to application form-PH]]
- ← Dependency: [[Prefill application form]]
- ← Generalization: [[{MOD}Mapping CIF data to application form-VN]]

## 📊 Appears In (7 diagrams)

- Custom: AF definition - ID
- Custom: AF definition - IN
- Custom: AF definition - KZ
- Custom: AF definition - VN
- Custom: Business Rules
- Custom: Product business rules
- Use Case: Fill in application - 2SP
