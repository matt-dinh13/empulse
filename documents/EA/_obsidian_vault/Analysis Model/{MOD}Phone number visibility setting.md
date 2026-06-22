---
type: Requirement
stereotype: "Business rule"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Show contract detail/Access Rights"
domain: "Analysis Model"
element_id: 1878893
diagrams: 6
connections: 7
tags:
  - requirement
  - analysis-model
---

# 📋 {MOD}Phone number visibility setting

> **Type**: Requirement · **Stereotype**: «Business rule»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Show contract detail/Access Rights

## 📝 Notes

This is a business rule checking system global parameter HIDE_CLIENT_PHONE_NUMBERS

-- If HIDE_CLIENT_PHONE_NUMBERS = True then user without specific access rights is not able to see phone numbers / Document Printout Tab.

In case of phone numbers, values are masked by 'x' symbol - only last 4 digits are displayed.

-- if global parameter HIDE_CLIENT_PHONE_NUMBERS = False, there is no check for specific access rights and user is able to see phone numbers as per default setting.


Details:

	
- 06.030 Show client´s phone (Client detail) is required for displaying Primary mobile and Phone on Client data screen.
	
- 01.210 Show client´s phone (Tab Client on Contract detail) is required for displaying  Primary mobile, Secondary mobile and Phone on Contract detail screen - Client tab.
	
- 01.210 Show Document Printouts Tab on Contract detail is required  for displaying Document printouts tab on Contract detail screen.
	
- {ADD CLM-3615} {ADD}08.900 Show available collection tools for client's contracts (show client´s phone) is required for displaying Phone on Client header in Collection tools overview{ADD/}

## 🔗 Connections (7)

- ← Dependency: [[08.900 Show available collection tools for client's contracts]]
- ← Realisation: [[{MOD}06.030 Show Client Data]]
- ← Dependency: [[{MOD}Phone (GUIElement 1814766)]]
- ← Dependency: [[{MOD}Secondary mobile]]
- ← Dependency: [[{MOD}Primary mobile (GUIElement 1814758)]]
- ← Realisation: [[{MOD}01.210 Show contract detail]]
- → Dependency: [[{ADD}08.900 Show available collection tools for client's contracts (show client´s phone)]]

## 📊 Appears In (6 diagrams)

- Custom: Access Rights
- Custom: CBL-11026 (CLM-3615) Hiding of personal data - Changes in Client Detail
- Custom: Client detail - IN
- Custom: Common Business Rules for Contract Management
- Custom: Contract detail
- Custom: Tab - Client
