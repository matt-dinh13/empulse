---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Contract signing/User Interface Model"
domain: "Analysis Model"
element_id: 1818392
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ Generate verification code

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Contract signing/User Interface Model

## 📝 Notes

Button for generating the OTP verification code.

Activates the 01.149 Generate verification code for client's documentation use case.

Other:
Button's label consists of the localization code and a number of remaining available attempts (e.g. 'Generate verification code (2 attempts)').
When the IVR functionality is turned on (i.e. useIVRProcess = 'TRUE') and performedAttempts >=  maxAttempts, then the button's label has additional suffix ' - IVR'.

	
- Value for the remaining available attempts is counted as:
If  useIVRProcess='TRUE' AND performedAttempts >=  maxAttempts then:
   availableAttempts = maxAttempts + maxAttemptsForIVR - performedAttempts
otherwise
   availableAttempts = maxAttempts - performedAttempts

where:
- maxAttempts = value of global parameter MaxGenerationOfVerificationCodeForAgreement
- maxAttemptsForIVR = value of global parameter MaxGenerationOfVerificationCodeForAgreementViaIVR
- performedAttempts = count of performed agreement verifications related to the same contact value


Localization code:

	
- GEN_GenerateVerificationCode //Button's main label
	
- GEN_NumberOfAttempts //Number of remaining attempts

## 🔗 Connections (1)

- → Dependency: [[01.149 Generate verification code for client's documentation]]

## 📊 Appears In (1 diagrams)

- Custom: Contract signing
