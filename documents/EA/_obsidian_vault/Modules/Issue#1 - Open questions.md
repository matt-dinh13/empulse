---
type: Issue
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Requirements/CBL-33_Ticketing separation"
domain: "Modules"
element_id: 1799566
diagrams: 1
connections: 0
tags:
  - issue
  - modules
---

# 📄 Issue#1 - Open questions

> **Type**: Issue · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Requirements/CBL-33_Ticketing separation

## 📝 Notes

- GUI of the module:
- can we provide some parts of GUI (panels/grids of results...) to other modules
- will GUI communicate/integrated to module core via a defined interface
	
- Management/processing access rights (privilege map) by the module
	
- API rules:
- no user identifier passed in the API business object. These should be taken from a secure token (probably OAuth 2.0)
	
- Is it needed to have User Detail table?

## 📊 Appears In (1 diagrams)

- Custom: Ticketing-separation
