---
type: Requirement
stereotype: "Functional"
package: ""
domain: "_Uncategorized"
element_id: 1572549
diagrams: 0
connections: 4
tags:
  - requirement
  - _uncategorized
---

# 📋 Check limit for maximum number of generated codes for OTP consent verification

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: N/A

## 📝 Notes

This object describes, how system checks whether limit for maximum number of generated verification codes on particular consent document was already reached or not.

Input parameters:

	
- consentDocument - consent document being verified via OTP
	
- contact - contact value actually used for OTP verification


Output parameters:

	
- limitReached - indication, whether the limit for maximum number of generated verification codes on particular consent document was already reached


Steps:

	
- System calculates number of usedAttempts for code generation on particular consent document by counting all performed verification records, that did not end up with technical error - i.e. Count(TempAppl_Document[=consentDocument from the input]->TempAppl_Document_Verification[.Result <> 'TECHNICAL_ERROR']).
	
- System checks if limit for maximum number of generated verification codes on particular consent document was already reached.
	
- If parameter properties signContentViaPhoto= TRUE then system checks If usedAttempts >= value of global parameter MaxMultiVerifCodeConsent, then system returns limitReached = 'TRUE'. Otherwise system returns limitReached = 'FALSE'.
If parameter properties signContentViaPhoto= FALSE then system checks If usedAttempts >= value of global parameter MaxNumberConsentVerificationCode, then system returns limitReached = 'TRUE'. Otherwise system returns limitReached = 'FALSE'.

## 🔗 Connections (4)

- ← Dependency: [[Countdown (GUIElement 1817797)]]
- ← Dependency: [[01.147 Reset consent validation (UseCase 1819574)]]
- ← Dependency: [[01.146 Validate verification code for consent (UseCase 1819572)]]
- ← Dependency: [[01.145 Generate verification code for consent validation (UseCase 1819571)]]
