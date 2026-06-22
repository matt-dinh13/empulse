---
type: GUIElement
stereotype: "label"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Application information"
domain: "Analysis Model"
element_id: 1655516
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Salesman

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Application information

## 📝 Notes

Salesman, upon whose recommendation the application was originated.

LDM source: 
Salesman[.Synchronization_Code=ApplicationSalesmanCode]->Person.Full_Name

- where ApplicationSalesmanCode is got from Contract->Relationship[.Role_Type='SALESMAN']->Party.External_ID

Note: In case there is no salesman with respective code (Salesman.Synchronization_Code) found, value of the salesman code (i.e. value of ApplicationSalesmanCode got as described above) itself is shown instead.

Localization code:
APP_Salesman

## 📊 Appears In (1 diagrams)

- Custom: Tab - Application information
