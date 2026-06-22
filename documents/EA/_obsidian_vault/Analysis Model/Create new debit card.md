---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Analysis Model/Payments/Payment Channels Management/COMMON for Payment Channel Management/User Interface Model"
domain: "Analysis Model"
element_id: 1703709
diagrams: 1
connections: 3
tags:
  - guielement
  - analysis-model
---

# 🖥️ Create new debit card

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Payment Channels Management/COMMON for Payment Channel Management/User Interface Model

## 📝 Notes

If pushed, the currently opened modal window is closed and 01.010 Choose product offer is called with Debit card as the only available product type choice.
Available only if current salesroom is able to create debit cards ( Selection of Product Type for product calculation in LOR area).
The button is disabled for contract  in status In-Process or In-Preprocess.

Localization code:
CON_CreateNewDebitCard

## 🔗 Connections (2)

- → Realisation: [[01.010 Choose product offer (UseCase 1827711)]]
- → Dependency: [[Selection of Product Type for product calculation in LOR area]]

## 📊 Appears In (1 diagrams)

- Custom: HC Debit card account selection - panel
