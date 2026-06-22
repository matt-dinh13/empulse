---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/Consent verification/User Interface Model - Consent verification"
domain: "Analysis Model"
element_id: 1817795
diagrams: 1
connections: 2
tags:
  - guielement
  - analysis-model
---

# 🖥️ Generate verification code

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/Consent verification/User Interface Model - Consent verification

## 📝 Notes

Localization code: 
- GEN_GenerateVerificationCode -> button label
- GEN_NumberOfAttempts -> number of remaining attempts

Other:
Button label consists of localization code and number of available attempts (eg. Generate verification code (2 attempts)). 
If IVR functionality is switched on (useIVRProcess='TRUE') and performedAttemptsPerApplication >=  maxAttempts button label has suffix: -IVR

Value for available attempts is counted as:
If  useIVRProcess='TRUE' AND performedAttemptsPerApplication >=  maxAttempts then:
availableAttempts = maxAttempts + maxAttemptsForIVR - performedAttemptsPerApplication
otherwise
availableAttempts = maxAttempts - performedAttemptsPerApplication

where:
- maxAttempts = value of global parameter MaxGenerationOfVerificationCodeForConsent
- maxAttemptsForIVR = value of global parameter MaxGenerationOfVerificationCodeForConsentViaIVR
- performedAttemptsPerApplication = count of all TempAppl_Document[current]->TempAppl_Document_Verification[.Result <> 'TECHNICAL_ERROR'] records.

## 🔗 Connections (2)

- ← Generalization: [[Generate verification code (GUIElement 1572630)]]
- → Dependency: [[01.145 Generate verification code for consent validation (UseCase 1819571)]]

## 📊 Appears In (1 diagrams)

- Custom: Verification panel
