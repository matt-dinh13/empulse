---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/Product/Personal information - product AF/Contact to client - product AF"
domain: "Analysis Model"
element_id: 1539289
diagrams: 1
connections: 3
tags:
  - guielement
  - analysis-model
---

# 🖥️ Home phone

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/Product/Personal information - product AF/Contact to client - product AF

## 📝 Notes

LDM Source: Temporary_Application.TempAppl_Contact.Phone_number where Temporary_Application.TempAppl_Contact.Type = HOME_PHONE.

Localization code: 
GEN_PhoneHome

Other:
For developers: In DB, the entity is represented by table TA_CONTACT, records are distinguished by columns CONTACT_TYPE_CODE and CONTACT_ROLE_TYPE (="CL").

## 🔗 Connections (3)

- → Dependency: [[Queue control panel - verified contact]]
- ← Generalization: [[Fix phone (including STD code without leading 0)]]
- ← Generalization: [[Home phone (GUIElement 1811338)]]

## 📊 Appears In (1 diagrams)

- Custom: Contact to client - product AF
