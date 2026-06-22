---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Analysis Model/Client Management/Client center/User Interface model/Safe guaranty"
domain: "Analysis Model"
element_id: 1691605
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Manage client

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Analysis Model/Client Management/Client center/User Interface model/Safe guaranty

## 📝 Notes

Button for opening the detail of respective client in external CIF system using the dynamically constructed hyperlink.
- https://pif.{environment}.infra/party-web/pif/customerperson/{CUID}?access={CUID hashed in MD5}

Visible only if all the following conditions are met:

	
- User has assigned the 06.030 Show client data (Manage in CIF) (UC06_030_AC) privilege.
	
- Safe guaranty flag is checked (TRUE value).


Localization code:
CLI_Manage

## 📊 Appears In (1 diagrams)

- Custom: Safe guaranty
