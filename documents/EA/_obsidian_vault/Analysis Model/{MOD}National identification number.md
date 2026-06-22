---
type: GUIElement
stereotype: "label"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Client"
domain: "Analysis Model"
element_id: 1814752
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ {MOD}National identification number

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Client

## 📝 Notes

National identification number of the client.

Visible only if not empty.

LDM source:
{DEL LOR-9883}Based on parameter getApplicantDataFromPif system takes data from:{/DEL}

	
- applicant entity from PIF

{DEL LOR-9883}else:

	
- Contract->Deal->Client_Snapshot.National_Identification_Number{/DEL}


Localization code:
CLI_NationalIdentificationNumber

## 📊 Appears In (1 diagrams)

- Custom: Tab - Client
