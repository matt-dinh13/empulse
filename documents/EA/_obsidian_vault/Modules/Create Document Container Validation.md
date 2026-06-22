---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Document management (DMS)/Analytical Model/Document Container/Business Rules"
domain: "Modules"
element_id: 1671540
diagrams: 3
connections: 2
tags:
  - requirement
  - modules
---

# 📋 Create Document Container Validation

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Document management (DMS)/Analytical Model/Document Container/Business Rules

## 📝 Notes

There is described set of validations for Document Container (used by CreateDocumentContainer).

Inputs:

	
- CreateDocumentContainerRequest


Steps:

	
- System checks if container with Code already exists. If so, system returns FALSE with CONTAINER_CODE_ALREADY_EXIST (message e.g. "Container code %Code% already exists").
	
- System checks that typeCode value is one of the specified container types. In other case system returns FALSE with UNKNOWN_CONTAINER_TYPE (message e.g. "Unknown container type %typeCode%.")
	
- System checks documentTypes by rule Document Container Type To Document Type Validation with typeCode and documentTypes array and returns result of the rule.

## 🔗 Connections (2)

- ← Dependency: [[14.210 Create Document Container]]
- → Dependency: [[Document Container Type To Document Type Validation]]

## 📊 Appears In (3 diagrams)

- Custom: Business Rules
- Custom: CBL-13070 (CSI-915) Document Container API
- Use Case: Use Case Model
