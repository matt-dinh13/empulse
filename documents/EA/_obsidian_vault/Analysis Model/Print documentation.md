---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Contract signing/User Interface Model"
domain: "Analysis Model"
element_id: 1818382
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Print documentation

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Contract signing/User Interface Model

## 📝 Notes

File with contract documentation is either downloaded to a computer or previewed in modal windows (depending on global parameter ShowPdfWithoutDownloading).

Enabled only for sub-status 'Prepared for sign'.

Hidden if the contract is to be co-financed by some joint lending partner (i.e. some Contract->Relationship.Role_Type='JOINT_LENDER' exists) and manual signing of joint lending contracts is disabled (i.e. global parameter jointLending.manualContractSigningDisabled = TRUE).

Localization code:
CON_Print

## 📊 Appears In (1 diagrams)

- Custom: Contract signing
