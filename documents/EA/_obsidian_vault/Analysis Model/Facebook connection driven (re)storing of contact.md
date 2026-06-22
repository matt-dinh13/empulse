---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Business Rules/Product"
domain: "Analysis Model"
element_id: 1822808
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Facebook connection driven (re)storing of contact

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Business Rules/Product

## 📝 Notes

This rule describes, how particular values from Facebook connection determine, what data are stored in DB as a contact of Facebook type for processed application. It also describes how particular value of Facebook connection is restored, when previously saved application is opened again.

Precondition:
Facebook connection is present on processed application form.

Saving the contact of Facebook type:
When saving the temporary application data, Temporary Application.TempAppl Contact[where Temporary Application.TempAppl Contact.Type  = FACEBOOK] structure is filled based on the value selected from Facebook connection as follows:
- If Primary mobile is selected AND Facebook is not present on processed AF, value from Mobile phone1 is used.
- If Primary e-mail is selected AND Facebook is not present on processed AF, value from E-mail is used.
- If (Other contact is selected AND Facebook is present on processed AF) OR Facebook is present on processed AF, structure is filled according to Facebook.

Otherwise no record for contact of Facebook type is created.

Restoring the Facebook connection value:
When previously saved application is opened again, value of Facebook connection is restored according to following algorithm:

	
- System checks, if Temporary Application.TempAppl Contact[where Temporary Application.TempAppl Contact.Type  = FACEBOOK] exists. If not, empty value is returned and algorithm ends.
	
- System compares Temporary Application.TempAppl Contact[where Temporary Application.TempAppl Contact.Type  = FACEBOOK] and Temporary_Application.TempAppl_Contact[where Temporary Application.TempAppl Contact.Type = PRIMARY_MOBILE]. If both values match, Primary mobile is returned and algorithm ends.
	
- System compares Temporary Application.TempAppl Contact[where Temporary Application.TempAppl Contact.Type  = FACEBOOK] and Temporary_Application.TempAppl_Contact[where Temporary Application.TempAppl Contact.Type = PRIMARY_EMAIL]. If both values match, Primary e-mail is returned. Otherwise system returns Other contact.

## 🔗 Connections (1)

- ← Dependency: [[Facebook connection (GUIElement 1811336)]]

## 📊 Appears In (1 diagrams)

- Custom: Product business rules
