---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/Product/Payment information - product AF/Way of disbursement - product AF"
domain: "Analysis Model"
element_id: 1820438
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ Phone number 1

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/Product/Payment information - product AF/Way of disbursement - product AF

## 📝 Notes

LDM Source: 
Temporary_Application->TempAppl_payment_channel->TempAppl_Person->TempAppl_Contact.Phone_number
and
Temporary_Application->TempAppl_payment_channel->TempAppl_Person->TempAppl_Contact.Contact_Type = PRIMARY_MOBILE

For developers: In DB, the entity is represented by table TA_CONTACT, records are distinguished by columns CONTACT_TYPE_CODE and CONTACT_ROLE_TYPE (="PE").

Localization code: 
GEN_PHONEMOBILE1

## 🔗 Connections (1)

- ← Generalization: [[Phone number (GUIElement 1781169)]]

## 📊 Appears In (1 diagrams)

- Custom: Way of disbursement - product AF
