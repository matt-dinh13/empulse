---
type: GUIElement
stereotype: "lcheckbox"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/Product/Queue control panel - product AF"
domain: "Analysis Model"
element_id: 1182000
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ Verified

> **Type**: GUIElement · **Stereotype**: «lcheckbox»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/Product/Queue control panel - product AF

## 📝 Notes

Related to Mobile phone 1

LDM Source:
Temporary_Application.TempAppl_Contact.Contact_is_ verified where Temporary_Application.TempAppl_Contact.Type = PRIMARY_MOBILE.
For developers: In DB, the entity is represented by table TA_CONTACT, records are distinguished by columns CONTACT_TYPE_CODE and CONTACT_ROLE_TYPE (= "CL").

Editable:	

	
- 2nd BoD 2SP - only if Mobile phone 1 is not empty


Visible: 	

	
- 2nd BoD 2SP
	
- If country =  ID -> INVISIBLE, default value for ID will be unchecked


Localization code:
APP_ContactVerified

## 🔗 Connections (1)

- → Dependency: [[Queue control panel - verified contact]]

## 📊 Appears In (1 diagrams)

- Custom: Queue control panel - product AF
