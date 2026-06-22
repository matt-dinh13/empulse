---
type: GUIElement
stereotype: "label"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Show contract detail/User Interface Model/Tab-Contract information"
domain: "Analysis Model"
element_id: 1612879
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Salesman

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Show contract detail/User Interface Model/Tab-Contract information

## 📝 Notes

Application recommended by Salesman

LDM: 
For contract statuses In pre-process, In process, Approved, Rejected, Cancel: Relationship.(ROLE_TYPE = SALESMAN) ->Party->Salesman->Person.Full_Name
Otherwise Contract.Salesman.Person.Full_Name
If Salesman Code is found in Salesman.Synchronization Code, display Salesman.Person.Full_Name, otherwise display Salesman Code.


Localization code: APP_Salesman

## 📊 Appears In (1 diagrams)

- Custom: Tab-Contract information
