---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Client center (CLC)/Requirements/CBL-11232/CLM-4043 - Client center - New tab User Accounts (PH) - Action buttons"
domain: "Modules"
element_id: 1800091
diagrams: 1
connections: 0
tags:
  - requirement
  - modules
---

# 📋 CLM-4043 - Client center - New tab User Accounts (PH) - Action buttons

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Requirements/CBL-11232/CLM-4043 - Client center - New tab User Accounts (PH) - Action buttons

## 📝 Notes

Button Show login history

	
- Implement a modal window to be opened on click
	
- Implement integration with PH CredStore REST APIs to obtain the data (discuss with the OSB team if APIs are not available directly):
	
- Login history: os01-cluacuf5ah.ph.infra:9030/hcph-audit-service/v1/audit/logins/userId
	
- e.g. http://os01-cluacuf5ah.ph.infra:9030/hcph-audit-service/v1/audit/logins/1033105
	
- Example userId = 1033105


Button Block user

	
- API will be called based on click
	
- os01-cluacuf5ah.ph.infra:8080/credstore-client (blueprint here - the lock function is not documented but works exactly the same as unlock method)
	
- e.g. http://os01-cluacuf5ah.ph.infra:8080/credstore-client/v1/users/1033105/lock
	
- Example userId = 1033105


Button Unblock user

	
- API will be called based on click
	
- os01-cluacuf5ah.ph.infra:8080/credstore-client (blueprint here)
	
- e.g. http://os01-cluacuf5ah.ph.infra:8080/credstore-client/v1/users/1033105/unlock
	
- Example userId = 1033105

## 📊 Appears In (1 diagrams)

- Custom: CLM-4043 - Client center - New tab User Accounts (PH) - Action buttons
