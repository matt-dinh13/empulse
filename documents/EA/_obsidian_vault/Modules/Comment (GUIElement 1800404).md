---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/User Interface Model/Change ticket status"
domain: "Modules"
element_id: 1800404
diagrams: 1
connections: 1
tags:
  - guielement
  - modules
---

# 🖥️ Comment

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/User Interface Model/Change ticket status

## 📝 Notes

Text field for inserting a comment. 

Decision if the comment is mandatory, optional or disabled is based on Rule.commentPreference value:

	
- Case REQUIRED then comment is mandatory
	
- Case OPTIONAL then comment is optional
	
- Case DISABLED then the field is hidden


Localization code: TCK_Comment

## 🔗 Connections (1)

- → Dependency: [[Printable text 0 - 2047 characters]]

## 📊 Appears In (1 diagrams)

- Custom: Change ticket status - user interface
