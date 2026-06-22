---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-18002 (CLM-5124) Process PayOffRequest - Finish Pay-off for CEL"
domain: "Requirements Model"
element_id: 1730355
diagrams: 2
connections: 3
tags:
  - guielement
  - requirements-model
---

# 🖥️ Termination due date

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-18002 (CLM-5124) Process PayOffRequest - Finish Pay-off for CEL

## 📝 Notes

Date to which the contract termination (pay-off) is performed. 
Optional.
If the field is used, then a validation by Check pay-off possibility algorithm (RMQ)  rule is performed.

Localization code: CON_PayOffDate

## 🔗 Connections (3)

- → Dependency: [[Check pay-off possibility algorithm (GUI_RMQ)]]
- → Dependency: [[Validate termination (pay-off) due date]]
- ← Dependency: [[01.410 Pay-off contract manually (UseCase 1878655)]]

## 📊 Appears In (2 diagrams)

- Custom: CBL-18002 (CLM-5124) Process PayOffRequest - Finish Pay-off for CEL
- Custom: Pay off contracts
