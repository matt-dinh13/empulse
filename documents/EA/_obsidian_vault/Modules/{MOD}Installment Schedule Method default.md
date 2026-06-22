---
type: GUIElement
stereotype: "combo"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Product Profile/User Interface"
domain: "Modules"
element_id: 1803385
diagrams: 1
connections: 1
tags:
  - guielement
  - modules
---

# 🖥️ {MOD}Installment Schedule Method default

> **Type**: GUIElement · **Stereotype**: «combo»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Product Profile/User Interface

## 📝 Notes

LDM: ProductProfile.ProductProfileInstallmentSchedule.InstallmentScheduleMethod.Name where ProductProfileInstallmentSchedule.IsDefault = True
Enabled for ProductType = CEL
For ProductType = SAI {ADD PCG-4515}enabled only values IS_ALG_BASIC and IS_ALG_AN_PRINC{/ADD} {DEL PCG-4515}set value to IS_ALG_BASIC and disable{/DEL}

Value EQUAL_ANNUITY displayed only if globalParameter.allowEqualAnnuityISAlgorithm (ALLOW_EQ_ANNUITY_IS_ALG) = true

Localization code: PRF_InstallmentScheduleMethodDef

## 🔗 Connections (1)

- → Dependency: [[{MOD}Installment Schedule Method Type]]

## 📊 Appears In (1 diagrams)

- Custom: Set main Product Profile properties
