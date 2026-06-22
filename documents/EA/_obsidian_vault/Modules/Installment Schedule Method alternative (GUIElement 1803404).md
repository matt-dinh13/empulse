---
type: GUIElement
stereotype: "combo"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Product Profile/User Interface"
domain: "Modules"
element_id: 1803404
diagrams: 1
connections: 1
tags:
  - guielement
  - modules
---

# 🖥️ Installment Schedule Method alternative

> **Type**: GUIElement · **Stereotype**: «combo»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Product Profile/User Interface

## 📝 Notes

LDM: ProductProfile.ProductProfileInstallmentSchedule.InstallmentScheduleMethod.Code where ProductProfileInstallmentSchedule.IsDefault = False
Enabled for ProductType = CEL
and InstallmentScheduleMethodDefault = IS_ALG_AN_PRINC.
The only available option is IS_ALG_EQ_PRINC.
Localization code: PRF_InstallmentScheduleMethodAlt

## 🔗 Connections (1)

- → Dependency: [[{MOD}Installment Schedule Method Type]]

## 📊 Appears In (1 diagrams)

- Custom: Set main Product Profile properties
