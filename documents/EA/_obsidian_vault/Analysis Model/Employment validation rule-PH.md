---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules/PH"
domain: "Analysis Model"
element_id: 1738021
diagrams: 1
connections: 7
tags:
  - requirement
  - analysis-model
---

# 📋 Employment validation rule-PH

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules/PH

## 📝 Notes

- employerName - Max length 60, ASCII 32 to ASCII 126; Mandatory for Economical_Status.Employer_required=TRUE


	
- employerAddress - validated according to Address validation rule - PH
	
- employerContact - Mandatory for economical status, validated according to Contact validation rule-PH
	
- emloyerIndustry - Mandatory for Economical_Status.Employer_required=TRUE
	
- employedFrom - Mandatory for Economical_Status.Employer_required=TRUE
	
- profession - Mandatory for Economical_Status.Employer_required=TRUE
	
- employmentType - Type of Employment
	
- salaryDay - 1-28

## 🔗 Connections (7)

- → Dependency: [[Contact validation rule-PH]]
- → Dependency: [[1-28]]
- → Dependency: [[Mandatory for economical status (Requirement 1513063)]]
- → Dependency: [[Max length 60]]
- → Dependency: [[ASCII 32 to ASCII 126]]
- ← Dependency: [[{MOD}Application validation rule-PH]]
- → Dependency: [[Address validation rule - PH]]

## 📊 Appears In (1 diagrams)

- Custom: Validation rules - PH
