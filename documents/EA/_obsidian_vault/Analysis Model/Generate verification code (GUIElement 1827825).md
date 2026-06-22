---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/X-sell offer recalculation/Product"
domain: "Analysis Model"
element_id: 1827825
diagrams: 1
connections: 3
tags:
  - guielement
  - analysis-model
---

# 🖥️ Generate verification code

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/X-sell offer recalculation/Product

## 📝 Notes

Call 01.143 Recalculate client's x-sell offer

Enabled by default, disabled once the code is generated. Automatically enabled after defined time (global parameter) even if other OTP code is already generated and valid.

Localization code: 
- GEN_GenerateVerificationCode -> button label
- GEN_NumberOfAttempts -> number of remaining attempts = global parameter MaxGenerationOfVerificationCodeForRBPScoring

## 🔗 Connections (3)

- ← Generalization: [[Generate verification code (GUIElement 1621930)]]
- ← Generalization: [[Generate verification code (GUIElement 1621980)]]
- → Realisation: [[01.143 Recalculate client's x-sell offer (UseCase 1827708)]]

## 📊 Appears In (1 diagrams)

- Custom: Product
