---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules"
domain: "Analysis Model"
element_id: 1773417
diagrams: 1
connections: 5
tags:
  - requirement
  - analysis-model
---

# 📋 Employment validation rule

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules

## 📝 Notes

- employerName - Must be empty, if employerCode is not empty
	
- employerCode - Must be empty, if employerName is not empty
	
- employerIdentification
	
- {MOD}employerAddress – validated according to Address validation rule, mandatory if delivery type = CUSTOMER_EMPLOYER
	
- employerContact – validated according to Contact validation rule, contactTypeRole must be EM (MSG_Ext_ContactTypeRole)
	
- emloyerIndustry – must be value of Industry.Code, Allowed combination of Industry and Economical Status when economicalStatus is not empty
	
- department
	
- economicalStatus – must be value of Economical_Status.Code, Allowed combination of Industry and Economical Status when emloyerIndustry is not empty
	
- employedFrom
	
- professionCode - must be empty, if professionName is not empty
	
- professionName - Must be empty, if professionCode is not empty
	
- employmentType – must be value of Employment Type.Code
	
- salaryDay- Day of month
	
- salarypaymentMethod – must be value of Salary Payment Method.Code
	
- totalWorkExperience
	
- salaryFrequency – must be value of Salary Frequency.Code
	
- universityCourseCode  -  Must be empty, if universityCourseName is not empty
	
- universityCourseName -  Must be empty, if universityCourseCode is not empty

## 🔗 Connections (5)

- → Dependency: [[Allowed combination of Industry and Economical Status]]
- → Dependency: [[Day of month]]
- ← Dependency: [[Application validation rule (Requirement 1773433)]]
- → Dependency: [[Address validation rule]]
- → Dependency: [[Contact validation rule]]

## 📊 Appears In (1 diagrams)

- Custom: Validation Rules
