---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Analysis Model/Client Management/Offer management/User Interface Model/Product"
domain: "Analysis Model"
element_id: 1836414
diagrams: 1
connections: 3
tags:
  - guielement
  - analysis-model
---

# 🖥️ Verify code

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Analysis Model/Client Management/Offer management/User Interface Model/Product

## 📝 Notes

Call 01.143 Recalculate client's x-sell offer

Disabled by default, enabled once the code is generated.

Localization code: 
- GEN_VerifyCode -> button label
- GEN_NumberOfAttempts -> number of remaining attempts

Other:
Button label consists of localization code and number of available attempts , eg. Verify code (2 attempts). Value for available attempts is retrieved from the OTP component.

## 🔗 Connections (3)

- ← Generalization: [[Verify code (GUIElement 1836402)]]
- → Realisation: [[01.143 Recalculate client's x-sell offer (UseCase 1827708)]]
- ← Generalization: [[Verify code (GUIElement 1836450)]]

## 📊 Appears In (1 diagrams)

- Custom: Product
