---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Service Eligibility Containers/Validation Rules"
domain: "Modules"
element_id: 1625473
diagrams: 2
connections: 4
tags:
  - requirement
  - modules
---

# 📋 ServiceEligibilityContainer - validation

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Service Eligibility Containers/Validation Rules

## 📝 Notes

ServiceEligibilityContainerInputDto 

	
- code
mandatory
must be unique in Service Eligibility Container [SERVICE_ELIGIBILITY_CONTAINER_EXISTS]
must fulfill Product catalog entity code [INVALID_CODE]


	
- name
must fulfill Product catalog entity name [INVALID_LENGTH]


ServiceEligibilityCriterionDto 

	
- type
mandatory
must exists in Service Eligibility Criterion Type
must be unique for specified service eligibility container [INVALID_SERVICE_ELIGIBILITY_CRITERION]
	
- parameter
see below


ServiceEligibilityCriterionParameterDto 

	
- type
mandatory 
must exists in Service Eligibility Criterion Parameter Type 
must be valid combination from Service Eligibility Criteria Type Setting [INVALID_SERVICE_ELIGIBILITY_CRITERION_PARAMETER]
	
- value
must match pattern described in Service Eligibility Criteria Type Setting 
[PATTERN_NOT_MATCH]

## 🔗 Connections (4)

- → Dependency: [[Product catalog enitity code]]
- → Dependency: [[Product catalog entity name]]
- ← Dependency: [[POST service-eligibility-containers]]
- ← Dependency: [[PUT service-eligibility-containers]]

## 📊 Appears In (2 diagrams)

- Custom: Validation Rules
- Use Case: Use Case
