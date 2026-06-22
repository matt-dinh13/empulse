---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Client center (CLC)/Requirements/CBL-14153/CLM-4266 - Personal data masking"
domain: "Modules"
element_id: 1800141
diagrams: 1
connections: 0
tags:
  - requirement
  - modules
---

# 📋 CLM-4266 - Personal data masking

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Requirements/CBL-14153/CLM-4266 - Personal data masking

## 📝 Notes

Goal of this task is to remove access right XXX_AdditionalClientData and introduce following access rights:

PH

	
- xxx_ClientDateOfBirth  - if user doesn't have this right he/she should se masked date */*/year
	
- xxx_ClientGender - gender will be empty if user doesn't have rights
	
- xxx_ClientParentName - client additional name (Mother's maiden name.....) will be empty if user doesn't have rights
	
- xxx_ClientDocuments - client identification documents list. When used doesn't have rights then he will see only last 4 digits of document number and rest will be masked by '*' star characters.


Rest countries

	
- xxx_ClientDateOfBirth  - if user doesn't have this right then birth data will be empty
	
- xxx_ClientGender - gender will be empty if user doesn't have rights
	
- xxx_ClientParentName - client additional name (Mother's maiden name.....) will be empty if user doesn't have rights
	
- xxx_ClientMaritalStatus - client marital status will be empty in case that user doesn't have rights (only in client tab in contract / application detail at the moment)
	
- xxx_ClientDocuments - client identification documents list. When used doesn't have rights then documents numbers will be empty.



Applicable screens:

	
- UC06_30_xxx - on client detail screen (only in BSL at the moment, not yet in CLC module)
	
- UC06_40_xxx - on client search screen (client center search - only in BSL at the moment, not yet in CLC module)il)

## 📊 Appears In (1 diagrams)

- Custom: CLM-4266 - Personal data masking
