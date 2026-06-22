---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/CSI/CBL-26143 (CSI-3705) BNPL - Enrich transaction data"
domain: "Requirements Model"
element_id: 1878832
diagrams: 8
connections: 7
tags:
  - requirement
  - requirements-model
---

# 📋 Get application data by code

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/CSI/CBL-26143 (CSI-3705) BNPL - Enrich transaction data

## 📝 Notes

This rule describes getting data of a transaction application from ADS module based on applicationCode.

Input:

	
- applicationCode


output:

	
- ApplicationData object



	
- System calls GET method of ...ADS/v1/applications/{applicationCode}
	
- System returns the ApplicationData result. If ADS component is unavailable (timeout), system returns error message of MSG_ADS_NOT_AVAILABLE; e.g. Application Data System is not available.

## 🔗 Connections (7)

- ← Dependency: [[{MOD}Validate Transaction Supplement request]]
- ← Dependency: [[{DEL}13.205 Create contract supplement documents]]
- ← Dependency: [[{MOD}13.205 Create contract supplement documents v2]]
- ← Dependency: [[HO_ALOP_DATA filling rules]]
- ← Dependency: [[AlopRequestDocument]]
- ← Dependency: [[13.108 Accept Transaction Supplement documents]]
- ← Dependency: [[Validate Contract Service Replacement request]]

## 📊 Appears In (8 diagrams)

- Custom: CBL-26143 (CSI-3705) BNPL - Enrich transaction data
- Custom: Extension of ALOP datasource
- Custom: HO_ALOP_DATA - getting external data
- Logical: HO_ALOP_DATA
- Use Case: Contract service replacement request processing
- Use Case: Transaction Supplement documents - Use case model 
- Use Case: Transaction Supplement request creation - Use case model
- Use Case: Use DMS in 13.205 Create contract supplement documents
