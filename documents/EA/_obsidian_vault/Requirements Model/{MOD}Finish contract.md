---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-10294 (CLM-3808) Standalone Insurance as Installment"
domain: "Requirements Model"
element_id: 1848510
diagrams: 2
connections: 1
tags:
  - guielement
  - requirements-model
---

# 🖥️ {MOD}Finish contract

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-10294 (CLM-3808) Standalone Insurance as Installment

## 📝 Notes

The button runs the 01.730 Finish contract manually use case

If Contract.Status in (Active (A), Paid-off (L)) and Contract.Contract Type = CEL{CLM-3819} or (CLM Feature Flag enableSAIWithInstallments = True and Contract.Contract Type = SAI and Contract.Has Installments  = True){/ADD}then system displays this button.


Localization code: CON_FINISH_CONTRACT

## 🔗 Connections (1)

- → Dependency: [[01.730 Finish contract manually (UseCase 1852803)]]

## 📊 Appears In (2 diagrams)

- Custom: CLM-3819 - New SAI - Contract finishing
- Custom: Panel of buttons
