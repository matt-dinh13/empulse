---
type: GUIElement
stereotype: "label"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Contract signing/User Interface Model"
domain: "Analysis Model"
element_id: 1818383
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ {MOD}Client full name

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Contract signing/User Interface Model

## 📝 Notes

Name of the client (first name, middle name, surname)

Read only

LDM:
{DEL LOR-9883}Based on parameter getApplicantDataFromPif{/DEL} system takes data from:

	
- applicant entity from PIF or


	
- client entity - if applicant data are not retrieved but CUID exists for related application or
	
- is empty, when both applicant and client calls fail

{DEL LOR-9883}else:

	
- Contract->Deal->Client_Snapshot.Full_Name{/DEL}


Localization code: CLI_FullName

## 📊 Appears In (1 diagrams)

- Custom: Contract signing
