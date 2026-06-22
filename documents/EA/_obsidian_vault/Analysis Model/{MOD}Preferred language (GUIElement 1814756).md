---
type: GUIElement
stereotype: "label"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Client"
domain: "Analysis Model"
element_id: 1814756
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ {MOD}Preferred language

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Client

## 📝 Notes

Preferred language(s) of the client.

Visible only if not empty.

LDM source:
{DEL LOR-9883}Based on parameter getApplicantDataFromPif system takes data from:{/DEL}

	
- applicant entity from PIF

{DEL LOR-9883}else:

	
- Contract->Deal->Client_Snapshot->Client_Preferred_Language->Language.Value{/DEL}


Note: In case there are multiple client's preferred languages found on the application, the individual Language.Value values are ordered by the associated Client_Preferred_Language.Preference_Order ASC and separated by comma.


Localization code:
GEN_PreferredLanguages

## 📊 Appears In (1 diagrams)

- Custom: Tab - Client
