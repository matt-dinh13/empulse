---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Contract signing/User Interface Model"
domain: "Analysis Model"
element_id: 1818376
diagrams: 1
connections: 2
tags:
  - guielement
  - analysis-model
---

# 🖥️ Sign contract

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Contract signing/User Interface Model

## 📝 Notes

This button launches UC 01.180 Sign contract.

Enabled only if all selected applications are in sub-status 'Prepared for sign' and the checkbox "Contract is signed" is checked for selected contracts on non-paperless salesroom (Salesroom.Paperless=FALSE).

Localization code: CON_Sign

## 🔗 Connections (2)

- → Dependency: [[01.180 Sign contract manually (UseCase 1878503)]]
- → Association «navigate»: [[Contract signed on back office_]]

## 📊 Appears In (1 diagrams)

- Custom: Contract signing
