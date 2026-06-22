---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/COMMON for Ticketing/Business Rules"
domain: "Modules"
element_id: 1864805
diagrams: 2
connections: 1
tags:
  - requirement
  - modules
---

# 📋 {ADD}Get salesroom from contract

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/COMMON for Ticketing/Business Rules

## 📝 Notes

{ADD CLM-7205 /}
Rule gets salesroom stored for specific business event of defined contract.
 
Input parameters:
- Contract_code
- BusinessEvent (optional) - if not defined then business event from TCK global configuration is used, by default it is CREATE_APPLICATION for VN
 

	
- System calls COMA API to get specific business event detail for contract:
GET https://coma.{env}/rest/v12/contracts/{contract_code}/business-events?type={BusinessEvent}
	
- System return salesroomCode from the coma response.
	
- In case of any error or if salesroomCode is not defined then system return empty result.

## 🔗 Connections (1)

- ← Dependency: [[{MOD}10.022 Create ticket service]]

## 📊 Appears In (2 diagrams)

- Custom: Business Rules
- Custom: CBL-29392 (CLM-7205) Ticket search by contract salesroom code
