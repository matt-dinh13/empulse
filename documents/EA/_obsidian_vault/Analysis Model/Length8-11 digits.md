---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Validation Rules/VN/Contact information"
domain: "Analysis Model"
element_id: 1635665
diagrams: 3
connections: 5
tags:
  - requirement
  - analysis-model
---

# 📋 Length8-11 digits

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Validation Rules/VN/Contact information

## 📝 Notes

Length must be 8-11 digits starting with 0 (except number beginning with '1900%' or '1800%')

Otherwise following message appears:

	
- Mobile phone, Mobile phone 2 - MSG_0445
	
- Home phone -  INVALID_LAND_PHONE
	
- Phone number for related person - INVALID_PHONE

## 🔗 Connections (5)

- ← Dependency: [[Mobile phone]]
- ← Dependency: [[Home phone]]
- ← Dependency: [[Mobile phone 2]]
- ← Dependency: [[Phone number (Action 1471737)]]
- ← Dependency: [[Contact validation rule-VN]]

## 📊 Appears In (3 diagrams)

- Custom: Contact information
- Custom: Contact to client
- Custom: Validation rules-VN
