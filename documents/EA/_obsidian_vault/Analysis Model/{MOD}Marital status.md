---
type: GUIElement
stereotype: "label"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Client"
domain: "Analysis Model"
element_id: 1814751
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ {MOD}Marital status

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Client

## 📝 Notes

Marital status of the client.

Field may be hidden if user does not have related access right (see relationships)

LDM source:
{DEL LOR-9883}Based on parameter getApplicantDataFromPif system takes data from:{/DEL}

	
- applicant entity from PIF

{DEL LOR-9883}else:

	
- Contract->Deal->Client_Snapshot.Marital_Status{/DEL}


Localization code:
APP_MaritalStatus

## 🔗 Connections (1)

- → Dependency: [[{ADD}01.210 Show contract detail (display Marital status)]]

## 📊 Appears In (1 diagrams)

- Custom: Tab - Client
