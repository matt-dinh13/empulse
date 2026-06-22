---
type: GUIElement
stereotype: "form"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/Product/Personal information - product AF/Client consent - product AF"
domain: "Analysis Model"
element_id: 1330400
diagrams: 1
connections: 4
tags:
  - guielement
  - analysis-model
---

# 🖥️ Client consent - product AF

> **Type**: GUIElement · **Stereotype**: «form»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/Product/Personal information - product AF/Client consent - product AF

## 📝 Notes

This panel contains client consents with data processing.

Separate panel for each consent document:

	
- Product_Profile_Document_Rule->Document_Type.Flag ="CONSENT"
	
- Product_Profile_Document_Rule.Related_To = "CLIENT"


Visible:
Visibility depends on:

	
- setting of check moment type for selected consent (Profile_Doc_Rule2Check_Moment.Document_Check_Moment), see business rule Determine Check moment type flag


	
- or document object related to temporary application with flag "CONSENT" already exists


Editable:
Only for selected AF step (Profile_Doc_Rule2Check_Moment.Document_Check_Moment), see business rule Determine Check moment type flag

Mandatory:
If Product_Profile_Document_Rule->Document_Type.Flag = "CHECKED" then this consent is mandatory.

Localization code:  APP_ConsentPersonalData_Legend

## 🔗 Connections (4)

- → Dependency: [[{MOD}01.082 Fill in application - 1BoD]]
- → Dependency: [[Determine Check moment type flag]]
- → Dependency: [[{MOD}01.081 Fill in application - 1SP]]
- → Dependency: [[Consent documents]]

## 📊 Appears In (1 diagrams)

- Custom: Client consent - product AF
