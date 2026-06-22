---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Document management (DMS)/Analytical Model/Document Container/Business Rules"
domain: "Modules"
element_id: 1671542
diagrams: 3
connections: 2
tags:
  - requirement
  - modules
---

# 📋 Update Document Container Validation

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Document management (DMS)/Analytical Model/Document Container/Business Rules

## 📝 Notes

There is described set of validations for Document Container (used by UpdateDocumentContainer).

Inputs:

	
- UpdateDocumentContainerRequest


Steps:

	
- System checks if container with Code already exists. If not, system returns FALSE with CONTAINER_NOT_FOUND (message e.g. "Container code %Code% not found.").
	
- System checks that typeCode value is one of the specified container types. In other case system returns FALSE with UNKNOWN_CONTAINER_TYPE (message e.g. "Unknown container type %typeCode%.")
	
- System checks documentTypes by rule Document Container Type To Document Type Validation with typeCode and documentTypes array and returns result of the rule.

## 🔗 Connections (2)

- ← Dependency: [[14.220 Update Document Container]]
- → Dependency: [[Document Container Type To Document Type Validation]]

## 📊 Appears In (3 diagrams)

- Custom: Business Rules
- Custom: CBL-13070 (CSI-915) Document Container API
- Use Case: Use Case Model
