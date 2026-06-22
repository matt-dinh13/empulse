---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Requirements Model/In process/PCG/HoselNG / FLIP/DOBA-97"
domain: "Requirements Model"
element_id: 1851659
diagrams: 2
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 {MOD}IPPACK service parameter validation

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Requirements Model/In process/PCG/HoselNG / FLIP/DOBA-97

## 📝 Notes

IPPACK

	
- FINANCING_PACKAGE
must exists in Financing Package.Code


{ADD DOBA-97}
For project FLIP
Service activation
If Service.Final is changed from false to true following condition needs to be fulfilled:
  - at least one Service.ServiceSelectionCriterion.Type = PURPOSE need to be in service
{/ADD}

## 🔗 Connections (1)

- ← Dependency: [[{MOD}Service Catalog Service - validation]]

## 📊 Appears In (2 diagrams)

- Custom: DOBA-97
- Custom: Validation Rules
