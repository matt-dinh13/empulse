---
type: GUIElement
stereotype: "form"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/Product/Insurance - product AF"
domain: "Analysis Model"
element_id: 1401724
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Service type

> **Type**: GUIElement · **Stereotype**: «form»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/Product/Insurance - product AF

## 📝 Notes

This section will contain all related insurance offer defined in Offer Insurance Service. Insurance services displayed in this panel must be:
- type other than Service.Type=INSGO and
- are not mandatory for contract (Service.Mandatory_on_contract = false)

Each insurance commodity will be displayed as seperated panel containing:
- name - non-editable field from Service.Name
- type ( name of the panel from Service.ServiceType.Name)
- required attributes (from Insurance Custom Data Def)

Required attributes will be stored in LDM Source:  Offer Insurance Custom Data

## 📊 Appears In (1 diagrams)

- Custom: Insurance - product AF
