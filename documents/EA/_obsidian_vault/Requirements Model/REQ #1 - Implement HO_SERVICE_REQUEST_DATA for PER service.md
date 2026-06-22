---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-6984 (CLM-2206) Implement HO_SERVICE_REQUEST_DATA for PER service"
domain: "Requirements Model"
element_id: 1454384
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ #1 - Implement HO_SERVICE_REQUEST_DATA for PER service

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-6984 (CLM-2206) Implement HO_SERVICE_REQUEST_DATA for PER service

## 📝 Notes

Goal of this task is to change data source for generating PER request document. Currently used data source HO_ER_REQUEST_DATA is obsolete and does not contain all data requested by customer. Therefore new data source HO_SERVICE_REQUEST_DATA will be used.

Steps:

	
- Extend data source HO_SERVICE_REQUEST_DATA with PER request data.
	
- Add system property useGeneralServiceRequestDocForPer to switch between current and new data source.
	
- Implement new data source.


Note:
Similar implementation was already done for generating CET request document.

## 📊 Appears In (1 diagrams)

- Custom: CBL-6984 (CLM-2206) Implement HO_SERVICE_REQUEST_DATA for PER service
