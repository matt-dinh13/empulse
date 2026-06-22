---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Analysis Model/Client Management/Communication/Manage communication/User Interface/Communication detail"
domain: "Analysis Model"
element_id: 1716633
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ {MOD}Contact

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Analysis Model/Client Management/Communication/Manage communication/User Interface/Communication detail

## 📝 Notes

Contact to client; see the Get communication contact algorithm
Read only

Localization code:
COM_Contact
{ADD CLM-4840}If user has a role with privilege Get communication sensitive data, then system gives this info in response.
LDM:

	
- CLC System: Contact[.id = Communication record.Contact id].Value1
	
- External System: Communication Item.Used Contact

{/ADD}

## 🔗 Connections (1)

- → Dependency: [[Get communication contact algorithm]]

## 📊 Appears In (1 diagrams)

- Custom: Show communication record
