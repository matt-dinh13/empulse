---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/Service Eligibility Management/User Interface"
domain: "Modules"
element_id: 1146578
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 Eligibility Container - saving validation rules

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/Service Eligibility Management/User Interface

## 📝 Notes

Service Eligibility Container

	
- Code - mandatory, unique (MSG_SEREligibilityContainerNotUniqueCode), string min. 4 and max. 20 chars, allowed characters are [letter, number, _ , - ] (MSG_SEREligibilityContainerInvalidCode)
	
- Name - mandatory, string max. 255 chars (MSG_SEREligibilityContainerInvalidName)


For each assigned Service Eligibility Criteria

	
- Type - mandatory, reference to Service Eligibility Criteria Type (exception - implementation error)
Type must be unique in the scope of Container (MSG_SEREligibilityContainerTypeNotUnique).


For each assigned Service Eligibility Criteria Parameter

	
- Code - reference to Service Eligibility Criteria Parameter Type, which is assigned to selected Service Eligibility Criteria Type (exception - implementation error)
	
- Value - mandatory, checked according to rules defined by 
- CustomDataType (MSG_SEREligibilityCriteriaParameterType)
- CustomValidation (MSG_SEREligibilityCriteriaParameterValidation)
in ServiceEligibilityCriteriaParameterType.DefinitionCode.CustomDataDefinition.

## 🔗 Connections (1)

- ← Dependency: [[Create eligibility container]]

## 📊 Appears In (1 diagrams)

- Custom: Set Eligibility Container
