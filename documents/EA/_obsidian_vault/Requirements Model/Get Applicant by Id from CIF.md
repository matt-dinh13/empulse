---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-13063 (CSI-631) Set up Loan Purpose & Registration process for ALOP/Extension of ALOP datasource"
domain: "Requirements Model"
element_id: 1878816
diagrams: 4
connections: 4
tags:
  - requirement
  - requirements-model
---

# 📋 Get Applicant by Id from CIF

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-13063 (CSI-631) Set up Loan Purpose & Registration process for ALOP/Extension of ALOP datasource

## 📝 Notes

This rule describes how to get Applicant data from the CIF based on provided ApplicantId.
 

	
- System calls GET .../v1/applicant/{ApplicantId}; with query parameters: projections =  ROLE_CONTACTS, PARTY_DATA, RELATED_PERSON_DATA, ROLE_DOCUMENTS
	
- System returns the result. If CIF component is unavailable (timeout), system returns error message of MSG_CIF_NOT_AVAILABLE; e.g. CIF is not available.

## 🔗 Connections (4)

- ← Dependency: [[{DEL}13.205 Create contract supplement documents]]
- ← Dependency: [[{MOD}13.205 Create contract supplement documents v2]]
- ← Dependency: [[HO_ALOP_DATA filling rules]]
- ← Dependency: [[AlopRequestDocument]]

## 📊 Appears In (4 diagrams)

- Custom: Extension of ALOP datasource
- Custom: HO_ALOP_DATA - getting external data
- Logical: HO_ALOP_DATA
- Use Case: Use DMS in 13.205 Create contract supplement documents
