---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/User Interface Model"
domain: "Analysis Model"
element_id: 1686340
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ Installment schedule method

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/User Interface Model

## 📝 Notes

A choice of an Installment schedule methods which is used to generate IS
Visible and enabled by Allow change of installment schedule method rule. 
Displays list of InstallmentScheduleMethods assigned to ProductProfile.
If the service of type = DEFP (Deferred payment) is assigned to offer/contract financial parameters then only InstallmentSheduleMethod in (IS_ALG_EQ_PRINC, IS_ALG_AN_PRINC) can be offered and chosen. 
As default is set InstallmentScheduleMethod where ProductProfileInstallmentSchedule.IsDefault = TRUE

Localization code: PRD_ChooseISMethod

## 🔗 Connections (1)

- → Dependency: [[{MOD}Installment Schedule Method Type]]

## 📊 Appears In (1 diagrams)

- Custom: Change product offer parameters
