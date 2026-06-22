---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Service Interpreter (SIR)/Analytical Model/Use Case Model"
domain: "Modules"
element_id: 1850564
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 SIR - Get Application data by code from ADS

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Service Interpreter (SIR)/Analytical Model/Use Case Model

## 📝 Notes

This rule describes getting data of a transaction application from ADS module based on applicationCode.

Input:

	
- applicationCode


output:

	
- ApplicationData object



	
- System calls GET method of ...ADS/v1/applications/{applicationCode}
	
- System returns the ApplicationData result. If ADS component is unavailable (timeout), system returns error message of MSG_ADS_NOT_AVAILABLE; e.g. Application Data System is not available.

## 🔗 Connections (1)

- ← Dependency: [[16.010 Request for a loan transaction service]]

## 📊 Appears In (1 diagrams)

- Use Case: Service Interpreter - Use Case Model
