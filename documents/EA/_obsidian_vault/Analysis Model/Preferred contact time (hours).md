---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/Product/Personal information - product AF/Contact to client - product AF/Preferred time and mode - product AF"
domain: "Analysis Model"
element_id: 1422880
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ Preferred contact time (hours)

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/Product/Personal information - product AF/Contact to client - product AF/Preferred time and mode - product AF

## 📝 Notes

A time specified by the client as a preferred contact time.

LDM Source: 
Temporary_Application.Preferred_contact_date_and_time

Localization code: 
APP_2BODPreferredContactHours

Other:
Combobox contains values from preferredWorkingHoursStart to preferredWorkingHoursEnd (global parameters).  
For example, if workingHoursStart = 7 and workingHoursEnd = 23, the combobox contains values from 07 to 23.

## 🔗 Connections (1)

- → Dependency: [[Preferred hours]]

## 📊 Appears In (1 diagrams)

- Custom: Preferred time and mode - product AF
