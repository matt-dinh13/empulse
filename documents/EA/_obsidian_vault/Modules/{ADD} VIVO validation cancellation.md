---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Commodity/Interface Consumed/External manufacturers/Business Rules"
domain: "Modules"
element_id: 1881768
diagrams: 2
connections: 2
tags:
  - requirement
  - modules
---

# 📋 {ADD} VIVO validation cancellation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Commodity/Interface Consumed/External manufacturers/Business Rules

## 📝 Notes

{ADD PCG-5308} VIVO validation cancellation

For country: IN

System calls external system for validation cancellation with data from commodity.

Endpoint:
API Production URL:

	
- https://in-transfer.vivo.xyz/Services/ImeiService.asmx?op=UpdateImeiInfo


Parameters:

	
- strUID = hcvivonew
	
- strPwd = hc@#new!


	
- strIMEIno = value (commodity.IMEI or commodity.SerialNumber from External validation cancellation )
	
- transDateTime = current date, format YYYY-MM-DD
	
- Status = 2


Response:
XML format with attributes:

	
- SerialNo = given serial number
	
- DateandTime = given transDateTime
	
- ResponseCode = -1, 1 or 0, where 0 = sucess, 1 = validation unsucesfull, -1 incorrect name/password


note: documentation for VIVO integration assigned in BRIN-573
https://jira.homecredit.net/jira/browse/BRIN-573
{/ADD}

## 🔗 Connections (1)

- ← Dependency: [[{MOD}External validation cancellation]]

## 📊 Appears In (2 diagrams)

- Custom: Business Rules
- Custom: PCG-5308 - Vivo - IMEI unblocking API (CBL-28657)
