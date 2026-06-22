---
type: GUIElement
stereotype: "label"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/Product/Header - product AF"
domain: "Analysis Model"
element_id: 1720786
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ POS and Partner address

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/Product/Header - product AF

## 📝 Notes

POS and Partner address

LDM Source: 
Concatenation of all address parts (see rule Concatenate address parts):
Get salesroom by operation (APPLICATION_CREATED)
Salesroom.Address of type "BP" (business place)(information is taken from respective method of HSIS module for address type 'SR_BUS')

Partner.Address  of type "BP" (business place) (information is taken from respective method of HSIS module for address type 'PA_BUS')

If BP address is not filled,  address type SR_REG/PA_REG is used

Localization code: 
APP_HeaderParSalAdress

## 🔗 Connections (1)

- → Dependency: [[{MOD}Concatenate address parts]]

## 📊 Appears In (1 diagrams)

- Custom: Header - product AF
