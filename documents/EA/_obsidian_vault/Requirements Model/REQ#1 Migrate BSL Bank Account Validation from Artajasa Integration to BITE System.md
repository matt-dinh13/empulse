---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-6304 (CBL-31820) Migrate BSL Bank Account Validation from Artajasa Integration to BITE System"
domain: "Requirements Model"
element_id: 1877814
diagrams: 1
connections: 2
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#1 Migrate BSL Bank Account Validation from Artajasa Integration to BITE System

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-6304 (CBL-31820) Migrate BSL Bank Account Validation from Artajasa Integration to BITE System

## 📝 Notes

REQUIREMENT:
Integration change: The direct call to the Artajasa endpoint via OSB/RCM is removed. BSL will call the BITE bank account verification endpoint (GET /account-validate) directly, using Basic authentication, passing bankCode and accountNumber as query parameters.

Request contract change: 
The VerifyBankAccountDataExternallyRequest no longer requires verificationAttributes (CUID, contractCode), as these fields were exclusively used by the Artajasa/RCM integration layer and have no equivalent in the BITE API.

Response handling: 
The result mapping is updated from Artajasa-specific response fields (result, resultDescription) to BITE HTTP status codes and error codes.

Confirmed mappings:
HTTP 200 → VERIFIED,
HTTP 404 with ERR_404_ACCOUNT_NUMBER_INVALID → NOT_VERIFIED,
HTTP 5xx → TECHNICAL_ERROR.

Model updates: 
The component rcmWS – Artajasa is removed from UC 00.300 diagram in Enterprise Architect and replaced with a new BITE interface component.



REMOVED INTEGRATION:
  The previous integration via rcmWS.getRegisterData() (Artajasa endpoint through OSB) is fully removed.
  The result/resultDescription field logic (FOUND / NOT_FOUND / ERROR / PENDING) from the
  Artajasa inquiryResponse.header.* is no longer applicable.

## 🔗 Connections (1)

- → Usage: [[{MOD CBL-31820}00.300 - Verify bank account data externally - service(_MOD)]]

## 📊 Appears In (1 diagrams)

- Custom: PAYM-6304 (CBL-31820) Migrate BSL Bank Account Validation from Artajasa Integration to BITE System
