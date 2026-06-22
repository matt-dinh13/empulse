---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-10709 (CLM-4010) Switch codelistWS, boundaryWS and countryWS to REST in BSL"
domain: "Requirements Model"
element_id: 1819970
diagrams: 3
connections: 3
tags:
  - requirement
  - requirements-model
---

# 📋 (ADD)Get codelists and bounderies

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-10709 (CLM-4010) Switch codelistWS, boundaryWS and countryWS to REST in BSL

## 📝 Notes

{ADD CLM-4010/}
Input:
table code

Output:
list of enumerations

Steps:

	
- System calls following CSD module REST API endpoint with table code as the attribute:
- boundary/search for the table ZIP code tables
- boundaryExt/search for other Boundary tables
- codelist/search for other enumeration tables
- contract/transitionReason/search for contract transition reason table
	
- System returns enumerations from response.

## 🔗 Connections (3)

- → Dependency: [[CSD (Actor 1880885)]]
- ← Dependency: [[{ADD}99.995 Synchronize enumaration tables]]
- ← Dependency: [[{ADD}99.994 Synchronize enumaration tables]]

## 📊 Appears In (3 diagrams)

- Custom: CBL-10709 (CLM-4010) Switch codelistWS, boundaryWS and countryWS to REST in BSL
- Custom: LOR-8763 CSD endpoint for contract status transition
- Use Case: Use case Model
