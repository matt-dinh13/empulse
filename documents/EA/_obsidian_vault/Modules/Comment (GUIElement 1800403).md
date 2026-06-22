---
type: GUIElement
stereotype: "textbox"
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/User Interface Model/Ticket unassignment modal"
domain: "Modules"
element_id: 1800403
diagrams: 3
connections: 1
tags:
  - guielement
  - modules
---

# 🖥️ Comment

> **Type**: GUIElement · **Stereotype**: «textbox»
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/User Interface Model/Ticket unassignment modal

## 📝 Notes

Text field for inserting a comment

Decision if the comment is mandatory, optional or disabled is based on Rule.commentPreference value:

	
- Case REQUIRED then comment is mandatory
	
- Case OPTIONAL then comment is optional
	
- Case DISABLED then the field is hidden


{ADD_CLM642}If multiple rules with different commentPreference value are applicable, the rule with highest priority is applied. Rules priority (highest to lowest):

	
- REQUIRED
	
- OPTIONAL
	
- DISABLED

{/ADD}
Localization code: TCK_Comment

## 🔗 Connections (1)

- → Dependency: [[Printable text 0 - 2047 characters]]

## 📊 Appears In (3 diagrams)

- Custom: {ADD}Ticket unassignment modal
- Custom: {ADD}User assignment modal
- Custom: Assign ticket to department - user interface
