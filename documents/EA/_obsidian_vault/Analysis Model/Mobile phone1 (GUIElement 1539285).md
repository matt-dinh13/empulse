---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/Product/Personal information - product AF/Contact to client - product AF"
domain: "Analysis Model"
element_id: 1539285
diagrams: 1
connections: 6
tags:
  - guielement
  - analysis-model
---

# 🖥️ Mobile phone1

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/Product/Personal information - product AF/Contact to client - product AF

## 📝 Notes

LDM Source: 
Temporary_Application.TempAppl_Contact.Phone_number where Temporary_Application.TempAppl_Contact.Type = PRIMARY_MOBILE.

Localization code: 
GEN_PhoneMobile1

Other:
For developers: In DB, the entity is represented by table TA_CONTACT, records are distinguished by columns CONTACT_TYPE_CODE and CONTACT_ROLE_TYPE (="CL").
The primary phone is always disabled in case  Temp_Appl_Contact.Read_only = 'YES'

## 🔗 Connections (6)

- ← Generalization: [[Mobile phone1]]
- ← Generalization: [[Mobile phone1 (GUIElement 1533645)]]
- → Dependency: [[Queue control panel - verified contact]]
- → Dependency: [[Primary mobile (Action 1787169)]]
- ← Generalization: [[Mobile phone1 (GUIElement 1715057)]]
- ← Generalization: [[Mobile phone1 (GUIElement 1811340)]]

## 📊 Appears In (1 diagrams)

- Custom: Contact to client - product AF
