---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules/ID"
domain: "Analysis Model"
element_id: 1538368
diagrams: 1
connections: 5
tags:
  - requirement
  - analysis-model
---

# 📋 EmploymentType validation rule - ID

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules/ID

## 📝 Notes

- employerName - Length50, No special characters, Extended text character set
	
- employerAddress – validated according to Address validation rule - ID
	
- profession.code – must be value of Profession.Code
	
- salaryDay - Salary day
	
- employerContact - ContactType validation rule - ID
	
- employedFrom - Date in past

## 🔗 Connections (5)

- → Dependency: [[Length50]]
- → Dependency: [[Extended text character set]]
- → Dependency: [[No special characters]]
- → Dependency: [[Salary day (Requirement 1813145)]]
- → Dependency: [[Address validation rule - ID]]

## 📊 Appears In (1 diagrams)

- Custom: Validation Rules - ID
