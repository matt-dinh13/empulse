---
type: GUIElement
stereotype: "label"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Client"
domain: "Analysis Model"
element_id: 1814766
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ {MOD}Phone

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Client

## 📝 Notes

Home phone (landline) of the client.

Visibility of the element is controlled by the Phone number visibility setting rule.

LDM source:
{DEL LOR-9883}Based on parameter getApplicantDataFromPif system takes data from:{/DEL}

	
- HOME_PHONE data from applicant entity from PIF

{DEL LOR-9883}else:

	
- Contract->Deal->Client_Snapshot->Client_Snapshot_Contact->Contact[.Contact_Type_Code='HOME_PHONE'].Contact_Value{/DEL}


Localization code:
GEN_Phone

## 🔗 Connections (1)

- → Dependency: [[{MOD}Phone number visibility setting]]

## 📊 Appears In (1 diagrams)

- Custom: Tab - Client
