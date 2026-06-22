---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Client Management/Client update/Business Rules"
domain: "Analysis Model"
element_id: 1647321
diagrams: 3
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 {ADD}Update DataProtectionLevel for client data

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Client Management/Client update/Business Rules

## 📝 Notes

{ADD CLM-2872 /}
This rule updates DataProtectionLevel value in PIF during Contract sign (called by Sign contract finalization) or after service replacement ({ADD}01.782 Replace Contract Service and {ADD}08.085 Replace service manually) according to MTCACC service setting.
Used for KZ Salary project - only if system property UpdateDataProtectionLevelToCIF is set.

Input:

	
- Contract
	
- ServiceReplacement (optional, default = false)


Steps:

	
- If system property UpdateDataProtectionLevelToCIF is not set then rule ends.
	
- System finds active Service for the Contract where Service.ServiceType = MTCACC, if the service is not found then rule ends.
	
- if Service.For internal client attribute is set then DataProtectionLevel = HC_EMPLOYEE 
else if ServiceReplacement = true then DataProtectionLevel = DEFAULT
else rule ends.
	
- System stores current client data (taken from contract) into CIF using PartyWS.customerPersonUpdate as follow:
- customerPersonUpdateRequest.mode = ATTRIBUTE
- customerPerson -> customValues: dataProtectionLevel.type = string; dataProtectionLevel.value=DataProtectionLevel
	
- CIF returns result.
	
- If Communication exception occurs, error message MSG_0159 (e. g. Communication with CIF failed.) is logged.

## 🔗 Connections (1)

- ← Dependency: [[{MOD}Sign contract finalization]]

## 📊 Appears In (3 diagrams)

- Custom: Business Rules
- Custom: CBL-9350 (CLM-2872) Salary project extension - employee flag update and usage
- Use Case: Service - Contract Service management via API
