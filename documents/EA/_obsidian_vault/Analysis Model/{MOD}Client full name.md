---
type: GUIElement
stereotype: "label"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Application detail header (panel)"
domain: "Analysis Model"
element_id: 1813825
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ {MOD}Client full name

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Application detail header (panel)

## 📝 Notes

Full name of the client.

Value is active link to Client detail screen

LDM source:
{DEL LOR-9883}Based on parameter getApplicantDataFromPif{/DEL} system takes data from:

	
- applicant entity from PIF or


	
- client entity - if applicant data are not retrieved but CUID exists for related application or
	
- is empty, when both applicant and client calls fail

{DEL LOR-9883}else:

	
- Contract->Deal->Client_Snapshot.Full_Name{/DEL}


Localization code:
CLI_FullName

## 📊 Appears In (1 diagrams)

- Custom: Application detail header
