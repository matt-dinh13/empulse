---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Commodity/Interface Consumed/External manufacturers/Business Rules"
domain: "Modules"
element_id: 1881760
diagrams: 3
connections: 1
tags:
  - requirement
  - modules
---

# 📋 {ADD} SAMSUNG validation cancellation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Commodity/Interface Consumed/External manufacturers/Business Rules

## 📝 Notes

{ADD PCG-5108}

System calls external system for validation cancelation with data from commodity.
Endpoints:

	
- B2C Sales Service- EMI Process - ValidateSerialService.asmx
	
- QA URL: http://test03.mcs-swa.com/SerialValidation/ValidateSerialService.asmx
	
- UAT URL: http://smartdost.samsungmarketing.in/SerialValidation/ValidateSerialService.asmx
	
- LIVE URL: https://www.mcs-swa.com/CESerialValidate/ValidateSerialService.asmx


Methods:
UnblockSerialService

Parameters:ommodity.serialNumber
SerialNumber = C

note: documentation for SAMSUNG integration assigned in BRIN-340 - "Web Service for EMI&#226;€&#166;"

for country: IN
{/ADD}

## 🔗 Connections (1)

- ← Dependency: [[{MOD}External validation cancellation]]

## 📊 Appears In (3 diagrams)

- Custom: Business Rules
- Custom: PCG-5108 -SAMSUNG - HA validation Integration - Hosel origination
- Custom: PCG-5308 - Vivo - IMEI unblocking API (CBL-28657)
