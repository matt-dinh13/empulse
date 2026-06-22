---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/Product/Other information - product AF/Other information - product AF"
domain: "Analysis Model"
element_id: 1822271
diagrams: 1
connections: 3
tags:
  - guielement
  - analysis-model
---

# 🖥️ Salesman

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/Product/Other information - product AF/Other information - product AF

## 📝 Notes

LDM Source: 
Temporary_Application.Salesman Code

Localization code: 
APP_Salesman

Other:
Codelist value from active_salesroom.Salesroom_Salesman.Salesman(.Active=TRUE) when getSalesmenFromHSIS=false otherwise the values are got from HSIS module (GET API https://homesis./{environment}/homesis/restful/salesrooms/{salesroomCode}/salesmen)
Displayed values: If Salesman Code is found in Salesman.Synchronization Code, display Salesman.Person.Full_Name, otherwise display Salesman Code when getSalesmenFromHSIS=false otherwise the fullName is got from HSIS module (GET API https://homesis./{environment}/homesis/restful/salesrooms/{salesroomCode}/salesmen)

## 🔗 Connections (3)

- ← Generalization: [[Salesman (GUIElement 1465165)]]
- ← Generalization: [[Salesman (GUIElement 1466036)]]
- → Dependency: [[Salesman (Class 1556402)]]

## 📊 Appears In (1 diagrams)

- Custom: Other information - product AF
