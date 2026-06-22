---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Client center (CLC)/Requirements/CBL-11232/CLM-4032 - Client center - New tab User Accounts (PH) - List of accounts"
domain: "Modules"
element_id: 1800087
diagrams: 1
connections: 0
tags:
  - requirement
  - modules
---

# 📋 CLM-4032 - Client center - New tab User Accounts (PH) - List of accounts

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Requirements/CBL-11232/CLM-4032 - Client center - New tab User Accounts (PH) - List of accounts

## 📝 Notes

- Add new User Accounts tab to Client Detail page
	
- Implement integration with CredStore REST APIs to obtain the data (discuss with the OSB team if APIs are not available directly):
- User accounts: os01-cluacuf5ah.ph.infra:8080/credstore-client
- e.g. http://os01-cluacuf5ah.ph.infra:8080/credstore-client/v1/users/1033105
- Example userId = 1033105
	
- Documentation draft prepared in EA:

## 📊 Appears In (1 diagrams)

- Custom: CLM-4032 - Client center - New tab User Accounts (PH) - List of accounts
