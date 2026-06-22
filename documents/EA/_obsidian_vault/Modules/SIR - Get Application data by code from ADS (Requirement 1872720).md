---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Service Interpreter (SIR_NG)/Analytical Model/Use Case Model"
domain: "Modules"
element_id: 1872720
diagrams: 4
connections: 2
tags:
  - requirement
  - modules
---

# 📋 SIR - Get Application data by code from ADS

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Service Interpreter (SIR_NG)/Analytical Model/Use Case Model

## 📝 Notes

This rule describes getting data of a transaction application from ADS module based on applicationCode.

Input:

	
- applicationCode


output:

	
- ApplicationData object



	
- System calls GET method of ...ADS/v1/applications/{applicationCode}
	
- System returns the ApplicationData result. If ADS component is unavailable (timeout), system returns error message of MSG_ADS_NOT_AVAILABLE; e.g. Application Data System is not available.

## 🔗 Connections (2)

- ← Dependency: [[{MOD}16.010 Request for a loan service]]
- ← Dependency: [[{MOD}16.040 Process Account Event notifications]]

## 📊 Appears In (4 diagrams)

- Use Case: Account origination - Use Case Model
- Use Case: SIR - Processing of Account Event notifications
- Use Case: SIR - Update process-loan API method - use cases
- Use Case: Transaction origination - Use Case Model
