---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Management of incoming payments/User Interface"
domain: "Modules"
element_id: 1880345
diagrams: 1
connections: 0
tags:
  - guielement
  - modules
---

# 🖥️ Paired contract number

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Management of incoming payments/User Interface

## 📝 Notes

Number of paired contract

If is filled by user then system set pairing status to “paired”. 

LDM: Incoming Payment->Incoming Payment To Contract[where Active = true]->Contract.contractCode

Mandatory: No
Editable: No
Localization code: PAY_PairedContractNumber

## 📊 Appears In (1 diagrams)

- Custom: Show incoming payment detail panel
