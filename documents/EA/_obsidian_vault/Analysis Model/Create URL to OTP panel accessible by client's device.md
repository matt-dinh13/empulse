---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/Consent verification/Business Rules"
domain: "Analysis Model"
element_id: 1572548
diagrams: 2
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Create URL to OTP panel accessible by client's device

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/Consent verification/Business Rules

## 📝 Notes

System creates unique URL for OTP panel that contains:

Input parameters:

	
- domain of the system (e.g. https://www.homecredit.com/bsl/)


	
- page name  = "public-otpverification"
	
- parameter = "?code=" with value of UUID of the Verification


Output parameters:

	
- URL


Steps:

	
- System generates URL from the input parameters
(example https://www.homecredit.com/bsl/public-otpverification?code=cbf5a655-12f1-42be-bc27-0df980d957b3)



This URL is then shortened (using URL management engine) so the final message can fit to one SMS. When system is not integrated to any local URL management engine or it is unavailable, system uses integrated functionality (see Create dynamic link).
Local integration:

	
- ID - system saves URL and get short URL by calling URL management engine endpoint

## 🔗 Connections (2)

- → Dependency: [[Verification (Class 1771453)]]
- ← Dependency: [[01.145 Generate verification code for consent validation (UseCase 1819571)]]

## 📊 Appears In (2 diagrams)

- Custom: Business Rules
- Use Case: Use Case Model - consent verification
