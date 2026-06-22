---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/Product/Contact information - product AF"
domain: "Analysis Model"
element_id: 1738702
diagrams: 1
connections: 2
tags:
  - guielement
  - analysis-model
---

# 🖥️ Phone number 2

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/Product/Contact information - product AF

## 📝 Notes

LDM Source: 
Temporary_Application->TempAppl_Person->TempAppl_Contact.Phone_number with given Temporary_Application->TempAppl_Person->Additional_Person_Relation_Type = <<selected in Contact type>>.
and
Temporary_Application->TempAppl_Person->TempAppl_Contact
.Contact_Type = HOME_PHONE

For developers: In DB, the entity is represented by table TA_CONTACT, records are distinguished by columns CONTACT_TYPE_CODE and CONTACT_ROLE_TYPE (="PE").

Localization code: 
GEN_PhoneFix

## 🔗 Connections (2)

- ← Generalization: [[Phone number 2]]
- → Dependency: [[Unique related person (Action 1787170)]]

## 📊 Appears In (1 diagrams)

- Custom: Contact information - product AF
