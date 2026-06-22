---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Analysis Model/Client Management/Offer management/User Interface Model/Product"
domain: "Analysis Model"
element_id: 1836410
diagrams: 1
connections: 3
tags:
  - guielement
  - analysis-model
---

# 🖥️ Generate verification code

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Analysis Model/Client Management/Offer management/User Interface Model/Product

## 📝 Notes

Call 01.143 Recalculate client's x-sell offer

Enabled by default, disabled once the code is generated. Automatically enabled after defined time (global parameter) even if other OTP code is already generated and valid.

Localization code: 
- GEN_GenerateVerificationCode -> button label
- GEN_NumberOfAttempts -> number of remaining attempts = global parameter MaxGenerationOfVerificationCodeForRBPScoring

## 🔗 Connections (3)

- ← Generalization: [[Generate verification code (GUIElement 1836397)]]
- → Realisation: [[01.143 Recalculate client's x-sell offer (UseCase 1827708)]]
- ← Generalization: [[Generate verification code (GUIElement 1836443)]]

## 📊 Appears In (1 diagrams)

- Custom: Product
