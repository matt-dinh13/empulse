---
type: GUIElement
stereotype: "label"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Client"
domain: "Analysis Model"
element_id: 1814757
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ {MOD}Email

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Client

## 📝 Notes

Primary email of the client.

Visibility of the element is controlled by the Email visibility setting rule.

LDM source:
{DEL LOR-9883}Based on parameter getApplicantDataFromPif system takes data from:{/DEL}

	
- PRIMARY_EMAIL data from applicant entity from PIF

{DEL LOR-9883}else:

	
- Contract->Deal->Client_Snapshot->Client_Snapshot_Contact->Contact[.Contact_Type_Code='PRIMARY_EMAIL'].Contact_Value{/DEL}


Localization code:
GEN_Email

## 🔗 Connections (1)

- → Dependency: [[Email visibility setting]]

## 📊 Appears In (1 diagrams)

- Custom: Tab - Client
