---
type: GUIElement
stereotype: "label"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Client"
domain: "Analysis Model"
element_id: 1814764
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ {MOD}Secondary mobile

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Client

## 📝 Notes

Secondary mobile of the client.

Visibility of the element is controlled by the Phone number visibility setting rule.

LDM source:
{DEL LOR-9883}Based on parameter getApplicantDataFromPif system takes data from:{/DEL}

	
- SECONDARY_MOBILE data from applicant entity from PIF

{DEL LOR-9883}else:

	
- Contract->Deal->Client_Snapshot->Client_Snapshot_Contact->Contact[.Contact_Type_Code='SECONDARY_MOBILE'].Contact_Value{/DEL}


Localization code:
GEN_PhoneMobile2

## 🔗 Connections (1)

- → Dependency: [[{MOD}Phone number visibility setting]]

## 📊 Appears In (1 diagrams)

- Custom: Tab - Client
