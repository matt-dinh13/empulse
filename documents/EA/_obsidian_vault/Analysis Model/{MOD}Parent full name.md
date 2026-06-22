---
type: GUIElement
stereotype: "label"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Client"
domain: "Analysis Model"
element_id: 1814750
diagrams: 1
connections: 2
tags:
  - guielement
  - analysis-model
---

# 🖥️ {MOD}Parent full name

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Client

## 📝 Notes

Full name of one of the client's parents / additional name of the client.

Visibitlity

	
- visible only if not empty.


	
- Field may be hidden if user does not have related access right (see relationships)


Country-specific utilization of the element:

	
- ID: Mother's maiden name


	
- IN: Father's full name


	
- KZ: Client full name in Latin


	
- PH: Mother's maiden name
	
- VN: <not utilized>


LDM source:
{DEL LOR-9883}Based on parameter getApplicantDataFromPif system takes data from:{/DEL}

	
- applicant entity from PIF

{DEL LOR-9883}else:

	
- Contract->Deal->Client_Snapshot(.Name4, .Name5, .Name6){/DEL}


- where the actually displayed value is constructed according to the rule Concatenate person name rules.


Localization code:
CLI_ParentName

## 🔗 Connections (2)

- → Dependency: [[{ADD}01.210 Show contract detail (display Parent name)]]
- → Dependency: [[Concatenate person name rules]]

## 📊 Appears In (1 diagrams)

- Custom: Tab - Client
