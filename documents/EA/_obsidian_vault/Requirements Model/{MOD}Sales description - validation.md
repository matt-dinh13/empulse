---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Requirements Model/Finished/PCG/PCG-5137 (PH) Unique identifier for product service"
domain: "Requirements Model"
element_id: 1845786
diagrams: 3
connections: 5
tags:
  - requirement
  - requirements-model
---

# 📋 {MOD}Sales description - validation

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/PCG/PCG-5137 (PH) Unique identifier for product service

## 📝 Notes

-- validation for sales description. warning messages are marked

SalesDescriptionInputDto 

	
- name
must fulfill Product catalog entity name [INVALID_LENGTH]


SalesDescriptionAttributeDto 

	
- key
mandatory [REQUIRED]
must fulfill Product catalog enitity code [INVALID_CODE]
must be unique for sales description code [INVALID_SALES_DESCRIPTION_ATTRIBUTE]
	
- value
mandatory [REQUIRED]
max. 1000 characters [MAX_LENGTH]
{ADD PCG-4839}{ADD PCG-5137}must fulfill Attribute value by type {/ADD}
	
- type
must exists in Sales Description Attribute Type
	
- localizedValue.key
need to exists in language
	
- localizedValue.value
max. 1000 characters [MAX_LENGTH]


SalesDescriptionAssignmentDto 

	
- entityType
mandatory [REQUIRED]
must exists in Entity type
	
- entityCode
mandatory [REQUIERD]
must exists in entity defined by entityType
SERVICE - Service.Code
TARIFF - Tariff.Code
FINANCING_PACKAGE - Financing Package.Code
FINANCING_SCHEME - Financing Scheme.Code
SC_SERVICE - SC_Service .Code
[INVALID_SALES_DESCRIPTION_ASSIGNMENT]
	
- {ADD PCG-4839}{ADD PCG-5137}entityVersion
optional
version must exists for entity defined by entityCode of entityType{/ADD}


	
- code
only for update, delete [INVALID_VALUE]
	
- entityType, entityCode {ADD PCG-4839}{ADD PCG-5137}, entityVersion{/ADD}
combination of (entityType, entityCode{ADD PCG-4839}{ADD PCG-5137}, entityVersion{/ADD}) must be unique in Sales Description Assignment [INVALID_SALES_DESCRIPTION_ASSIGNMENT]


Cross validations:
PUT, POST - Sales description is not assigned to any entity (warning)
PUT - Sales description is assigned to multiple entities (warning) [SALES_DESCRIPTION_MULTIPLE_ENTITIES]

## 🔗 Connections (5)

- → Dependency: [[{ADD}Attribute value by type]]
- → Dependency: [[Product catalog entity name]]
- → Dependency: [[Product catalog enitity code]]
- ← Dependency: [[POST new sales description]]
- ← Dependency: [[PUT sales description]]

## 📊 Appears In (3 diagrams)

- Custom: One Level Requirement Hierarchy
- Custom: Validation Rules
- Use Case: Use Case
