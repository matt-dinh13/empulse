---
type: GUIElement
stereotype: "form"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/Product/Payment information - product AF/Way of disbursement - product AF"
domain: "Analysis Model"
element_id: 1820440
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ {ADD}Beneficiary address

> **Type**: GUIElement · **Stereotype**: «form»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/Product/Payment information - product AF/Way of disbursement - product AF

## 📝 Notes

{ADD LOR-9699/}
Panel displayed only if field Target type = BENEFICIARY_PERSON
or BENEFICIARY_COMPANY

LDM source:
Temporary_Application->TempAppl_payment_channel->TempAppl_Person->TempAppl_Person_Address->TempAppl_Address
where Temporary_Application.TempAppl_Client_Address.Role = CONTACT

Localization codes: APP_BENEFICIARYADDRESS

## 📊 Appears In (1 diagrams)

- Custom: Way of disbursement - product AF
